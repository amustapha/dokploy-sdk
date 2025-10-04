export interface CreateAdminRequest {
  email: string;
  password: string;
}

export interface CreateUserRequest {
  password: string;
  id: string;
  token: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token?: string;
  [key: string]: unknown;
}

export interface AuthUser {
  id: string;
  email: string;
  role?: string;
  [key: string]: unknown;
}

export interface UpdateAuthRequest {
  email?: string;
  password?: string;
  role?: string;
  image?: string;
  [key: string]: unknown;
}

export interface GenerateTokenResponse {
  token: string;
}

export interface GetAuthUserRequest {
  id: string;
}
