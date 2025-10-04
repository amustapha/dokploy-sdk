export interface Deployment {
  deploymentId: string;
  applicationId?: string;
  composeId?: string;
  serverId?: string;
  [key: string]: unknown;
}

export interface GetDeploymentsByApplicationRequest {
  applicationId: string;
}

export interface GetDeploymentsByComposeRequest {
  composeId: string;
}

export interface GetDeploymentsByServerRequest {
  serverId: string;
}

export interface GetDeploymentsByTypeRequest {
  id: string;
  type: string;
}

export interface KillDeploymentProcessRequest {
  deploymentId: string;
}
