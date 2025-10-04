export interface Application {
  applicationId: string;
  name: string;
  appName?: string;
  description?: string;
  projectId: string;
  serverId?: string;
  [key: string]: unknown;
}

export interface CreateApplicationRequest {
  name: string;
  appName?: string;
  description?: string;
  projectId: string;
  serverId?: string;
}

export interface GetApplicationRequest {
  applicationId: string;
}

export interface ReloadApplicationRequest {
  appName: string;
  applicationId: string;
}

export interface DeleteApplicationRequest {
  applicationId: string;
}

export interface StopApplicationRequest {
  applicationId: string;
}

export interface StartApplicationRequest {
  applicationId: string;
}

export interface RedeployApplicationRequest {
  applicationId: string;
}

export interface SaveEnvironmentRequest {
  applicationId: string;
  env?: string;
  buildArgs?: string;
}
