import { HttpClient } from '../client/http-client';
import {
  CreateAdminRequest,
  CreateUserRequest,
  LoginRequest,
  LoginResponse,
  AuthUser,
  UpdateAuthRequest,
  GenerateTokenResponse,
  GetAuthUserRequest,
} from '../types/auth';

export class AuthApi {
  constructor(private client: HttpClient) {}

  async createAdmin(request: CreateAdminRequest): Promise<void> {
    await this.client.post<void>('/auth.createAdmin', request);
  }

  async createUser(request: CreateUserRequest): Promise<void> {
    await this.client.post<void>('/auth.createUser', request);
  }

  async login(request: LoginRequest): Promise<LoginResponse> {
    return this.client.post<LoginResponse>('/auth.login', request);
  }

  async get(): Promise<AuthUser> {
    return this.client.get<AuthUser>('/auth.get');
  }

  async logout(): Promise<void> {
    await this.client.post<void>('/auth.logout');
  }

  async update(request: UpdateAuthRequest): Promise<void> {
    await this.client.post<void>('/auth.update', request);
  }

  async generateToken(): Promise<GenerateTokenResponse> {
    return this.client.post<GenerateTokenResponse>('/auth.generateToken');
  }

  async getOne(request: GetAuthUserRequest): Promise<AuthUser> {
    return this.client.get<AuthUser>('/auth.one', request);
  }
}
