import { HttpClient } from '../client/http-client';
import {
  Admin,
  CreateUserInvitationRequest,
  CreateUserInvitationResponse,
  RemoveUserRequest,
  RemoveUserResponse,
  GetUserByTokenRequest,
  User,
} from '../types/admin';

export class AdminApi {
  constructor(private client: HttpClient) {}

  async getAdmin(): Promise<Admin> {
    return this.client.get<Admin>('/admin.one');
  }

  async createUserInvitation(
    request: CreateUserInvitationRequest
  ): Promise<CreateUserInvitationResponse> {
    return this.client.post<CreateUserInvitationResponse>(
      '/admin.createUserInvitation',
      request
    );
  }

  async removeUser(request: RemoveUserRequest): Promise<RemoveUserResponse> {
    return this.client.post<RemoveUserResponse>('/admin.removeUser', request);
  }

  async getUserByToken(request: GetUserByTokenRequest): Promise<User> {
    return this.client.get<User>('/admin.getUserByToken', {
      token: request.token,
    });
  }
}
