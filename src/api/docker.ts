import { HttpClient } from '../client/http-client';
import {
  DockerContainer,
  GetContainersRequest,
  RestartContainerRequest,
  GetContainerConfigRequest,
  GetContainersByAppNameRequest,
  GetContainersByLabelRequest,
  GetServiceContainersByAppNameRequest,
  GetStackContainersByAppNameRequest,
} from '../types/docker';

export class DockerApi {
  constructor(private client: HttpClient) {}

  async getContainers(
    request?: GetContainersRequest
  ): Promise<DockerContainer[]> {
    return this.client.get<DockerContainer[]>('/docker.getContainers', request);
  }

  async restartContainer(request: RestartContainerRequest): Promise<void> {
    await this.client.post<void>('/docker.restartContainer', request);
  }

  async getConfig(request: GetContainerConfigRequest): Promise<unknown> {
    return this.client.get<unknown>('/docker.getConfig', request);
  }

  async getContainersByAppName(
    request: GetContainersByAppNameRequest
  ): Promise<DockerContainer[]> {
    return this.client.get<DockerContainer[]>(
      '/docker.getContainersByAppNameMatch',
      request
    );
  }

  async getContainersByLabel(
    request: GetContainersByLabelRequest
  ): Promise<DockerContainer[]> {
    return this.client.get<DockerContainer[]>(
      '/docker.getContainersByAppLabel',
      request
    );
  }

  async getServiceContainersByAppName(
    request: GetServiceContainersByAppNameRequest
  ): Promise<DockerContainer[]> {
    return this.client.get<DockerContainer[]>(
      '/docker.getServiceContainersByAppName',
      request
    );
  }

  async getStackContainersByAppName(
    request: GetStackContainersByAppNameRequest
  ): Promise<DockerContainer[]> {
    return this.client.get<DockerContainer[]>(
      '/docker.getStackContainersByAppName',
      request
    );
  }
}
