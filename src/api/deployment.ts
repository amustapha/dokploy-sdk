import { HttpClient } from '../client/http-client';
import {
  Deployment,
  GetDeploymentsByApplicationRequest,
  GetDeploymentsByComposeRequest,
  GetDeploymentsByServerRequest,
  GetDeploymentsByTypeRequest,
  KillDeploymentProcessRequest,
} from '../types/deployment';

export class DeploymentApi {
  constructor(private client: HttpClient) {}

  async getAllByApplication(
    request: GetDeploymentsByApplicationRequest
  ): Promise<Deployment[]> {
    return this.client.get<Deployment[]>('/deployment.all', request);
  }

  async getAllByCompose(
    request: GetDeploymentsByComposeRequest
  ): Promise<Deployment[]> {
    return this.client.get<Deployment[]>('/deployment.allByCompose', request);
  }

  async getAllByServer(
    request: GetDeploymentsByServerRequest
  ): Promise<Deployment[]> {
    return this.client.get<Deployment[]>('/deployment.allByServer', request);
  }

  async getAllByType(
    request: GetDeploymentsByTypeRequest
  ): Promise<Deployment[]> {
    return this.client.get<Deployment[]>('/deployment.allByType', request);
  }

  async killProcess(request: KillDeploymentProcessRequest): Promise<void> {
    await this.client.post<void>('/deployment.killProcess', request);
  }
}
