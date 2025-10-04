export type ComposeType = 'docker-compose' | 'stack';

export interface Compose {
  composeId: string;
  name: string;
  description?: string;
  projectId: string;
  composeType?: ComposeType;
  appName?: string;
  serverId?: string;
  [key: string]: unknown;
}

export interface CreateComposeRequest {
  name: string;
  description?: string;
  projectId: string;
  composeType?: ComposeType;
  appName?: string;
  serverId?: string;
}

export interface GetComposeRequest {
  composeId: string;
}

export interface UpdateComposeRequest {
  composeId: string;
  name?: string;
  description?: string;
  env?: string;
  composeFile?: string;
  [key: string]: unknown;
}

export interface DeleteComposeRequest {
  composeId: string;
}

export interface DeployComposeRequest {
  composeId: string;
}

export interface RedeployComposeRequest {
  composeId: string;
}

export interface StopComposeRequest {
  composeId: string;
}
