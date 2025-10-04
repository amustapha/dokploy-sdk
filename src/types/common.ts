export interface DokployConfig {
  baseUrl: string;
  token: string;
}

export interface ApiResponse<T> {
  data: T;
}

export interface ApiError {
  message: string;
  statusCode?: number;
}

export type DatabaseStatus = 'idle' | 'running' | 'done' | 'error';
