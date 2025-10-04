import axios, { AxiosInstance, AxiosError, InternalAxiosRequestConfig, AxiosResponse } from 'axios';
import { DokployConfig, ApiError } from '../types/common';

export class HttpClient {
  private client: AxiosInstance;

  constructor(config: DokployConfig) {
    this.client = axios.create({
      baseURL: config.baseUrl,
      headers: {
        'x-api-key': config.token,
        'Content-Type': 'application/json',
      },
    });

    this.setupInterceptors();
  }

  /**
   * Set up request and response interceptors
   */
  private setupInterceptors(): void {
    // Request interceptor for logging and adding correlation IDs
    this.client.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        // Add correlation ID for request tracking
        const correlationId = this.generateCorrelationId();
        config.headers.set('X-Correlation-ID', correlationId);

        // Optional: Log request details in debug mode
        if (process.env.DEBUG === 'true') {
          console.debug(`[${correlationId}] ${config.method?.toUpperCase()} ${config.url}`);
        }

        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // Response interceptor for common processing
    this.client.interceptors.response.use(
      (response: AxiosResponse) => {
        // Optional: Log successful responses in debug mode
        if (process.env.DEBUG === 'true') {
          const correlationId = response.config.headers['X-Correlation-ID'];
          console.debug(`[${correlationId}] Response: ${response.status}`);
        }
        return response;
      },
      async (error: AxiosError) => {
        // Handle errors with retry logic for specific cases
        if (this.isRetryable(error) && this.shouldRetry(error.config)) {
          return this.retryRequest(error.config!);
        }
        return Promise.reject(error);
      }
    );
  }

  /**
   * Generate a unique correlation ID for request tracking
   */
  private generateCorrelationId(): string {
    return `${Date.now()}-${Math.random().toString(36).substring(2, 11)}`;
  }

  /**
   * Check if an error is retryable
   */
  private isRetryable(error: AxiosError): boolean {
    // Retry on network errors or 5xx server errors
    return (
      !error.response ||
      (error.response.status >= 500 && error.response.status < 600) ||
      error.code === 'ECONNABORTED' ||
      error.code === 'ETIMEDOUT'
    );
  }

  /**
   * Check if a request should be retried based on retry count
   */
  private shouldRetry(config: InternalAxiosRequestConfig | undefined): boolean {
    if (!config) return false;
    const retryCount = (config as any).retryCount || 0;
    return retryCount < 3;
  }

  /**
   * Retry a failed request with exponential backoff
   */
  private async retryRequest(config: InternalAxiosRequestConfig): Promise<AxiosResponse> {
    const retryCount = ((config as any).retryCount || 0) + 1;
    (config as any).retryCount = retryCount;

    // Exponential backoff: 1s, 2s, 4s
    const delay = Math.pow(2, retryCount - 1) * 1000;
    await new Promise(resolve => setTimeout(resolve, delay));

    if (process.env.DEBUG === 'true') {
      console.debug(`Retrying request (attempt ${retryCount}): ${config.url}`);
    }

    return this.client.request(config);
  }

  async get<T>(endpoint: string, params?: unknown): Promise<T> {
    try {
      const response = await this.client.get<T>(endpoint, { params });
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async post<T>(endpoint: string, data?: unknown): Promise<T> {
    try {
      const response = await this.client.post<T>(endpoint, data);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  private handleError(error: unknown): ApiError {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      return {
        message: axiosError.message,
        statusCode: axiosError.response?.status,
      };
    }
    return {
      message: 'An unknown error occurred',
    };
  }
}
