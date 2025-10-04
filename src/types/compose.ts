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

export interface CancelComposeDeploymentRequest {
  composeId: string;
}

export interface CleanComposeQueuesRequest {
  composeId: string;
}

export interface DeployTemplateRequest {
  environmentId?: string;
  serverId?: string;
  id?: string;
  baseUrl?: string;
}

export interface DisconnectComposeGitProviderRequest {
  composeId: string;
}

export interface FetchComposeSourceTypeRequest {
  composeId: string;
}

export interface GetConvertedComposeRequest {
  composeId: string;
}

export interface GetDefaultCommandRequest {
  composeId: string;
}

export interface GetComposeTagsRequest {
  baseUrl?: string;
}

export interface ImportComposeRequest {
  composeId: string;
  base64: string;
}

export interface IsolatedDeploymentRequest {
  composeId: string;
  suffix: string;
}

export interface LoadMountsByServiceRequest {
  composeId: string;
  serviceName: string;
}

export interface LoadComposeServicesRequest {
  composeId: string;
  type?: string | null;
}

export interface MoveComposeRequest {
  composeId: string;
  targetEnvironmentId: string;
}

export interface ProcessTemplateRequest {
  composeId: string;
  base64: string;
}

export interface RandomizeComposeRequest {
  composeId: string;
  suffix: string;
}

export interface RefreshComposeTokenRequest {
  composeId: string;
}

export interface StartComposeRequest {
  composeId: string;
}

export interface GetComposeTemplatesRequest {
  baseUrl?: string;
}
