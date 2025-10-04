import { MetricsConfig } from './monitoring';

export interface Admin {
  id: string;
  email: string;
  [key: string]: unknown;
}

export interface CreateUserInvitationRequest {
  email: string;
}

export interface CreateUserInvitationResponse {
  success: boolean;
  invitationId?: string;
}

export interface RemoveUserRequest {
  authId: string;
}

export interface RemoveUserResponse {
  success: boolean;
}

export interface GetUserByTokenRequest {
  token: string;
}

export interface User {
  id: string;
  email: string;
  authId: string;
  [key: string]: unknown;
}

export interface AssignPermissionsRequest {
  userId: string;
  permissions: string[];
}

export interface SetupMonitoringRequest {
  metricsConfig?: MetricsConfig;
}
