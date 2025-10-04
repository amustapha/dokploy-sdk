import axios, { AxiosInstance, AxiosError } from 'axios';
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
