import { HttpClient } from '../client/http-client';
import {
  Deployment,
  GetDeploymentsByApplicationRequest,
  GetDeploymentsByComposeRequest,
  GetDeploymentsByServerRequest,
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
}
