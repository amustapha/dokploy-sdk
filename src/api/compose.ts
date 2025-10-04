import { HttpClient } from '../client/http-client';
import {
  Compose,
  CreateComposeRequest,
  GetComposeRequest,
  UpdateComposeRequest,
  DeleteComposeRequest,
  DeployComposeRequest,
  RedeployComposeRequest,
  StopComposeRequest,
} from '../types/compose';

export class ComposeApi {
  constructor(private client: HttpClient) {}

  async create(request: CreateComposeRequest): Promise<Compose> {
    return this.client.post<Compose>('/compose.create', request);
  }

  async getOne(request: GetComposeRequest): Promise<Compose> {
    return this.client.get<Compose>('/compose.one', request);
  }

  async update(request: UpdateComposeRequest): Promise<void> {
    await this.client.post<void>('/compose.update', request);
  }

  async delete(request: DeleteComposeRequest): Promise<void> {
    await this.client.post<void>('/compose.delete', request);
  }

  async deploy(request: DeployComposeRequest): Promise<void> {
    await this.client.post<void>('/compose.deploy', request);
  }

  async redeploy(request: RedeployComposeRequest): Promise<void> {
    await this.client.post<void>('/compose.redeploy', request);
  }

  async stop(request: StopComposeRequest): Promise<void> {
    await this.client.post<void>('/compose.stop', request);
  }
}
