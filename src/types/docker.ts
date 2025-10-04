export interface DockerContainer {
  containerId: string;
  name: string;
  status: string;
  [key: string]: unknown;
}

export interface GetContainersRequest {
  serverId?: string;
}

export interface RestartContainerRequest {
  containerId: string;
}

export interface GetContainerConfigRequest {
  containerId: string;
  serverId?: string;
}

export interface GetContainersByAppNameRequest {
  appName: string;
  appType?: string;
  serverId?: string;
}

export interface GetContainersByLabelRequest {
  appName: string;
  serverId?: string;
}
