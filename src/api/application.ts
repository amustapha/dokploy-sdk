import { HttpClient } from '../client/http-client';
import {
  Application,
  CreateApplicationRequest,
  GetApplicationRequest,
  ReloadApplicationRequest,
  DeleteApplicationRequest,
  StopApplicationRequest,
  StartApplicationRequest,
  RedeployApplicationRequest,
  SaveEnvironmentRequest,
} from '../types/application';

export class ApplicationApi {
  constructor(private client: HttpClient) {}

  async create(request: CreateApplicationRequest): Promise<Application> {
    return this.client.post<Application>('/application.create', request);
  }

  async getOne(request: GetApplicationRequest): Promise<Application> {
    return this.client.get<Application>('/application.one', request);
  }

  async reload(request: ReloadApplicationRequest): Promise<void> {
    await this.client.post<void>('/application.reload', request);
  }

  async delete(request: DeleteApplicationRequest): Promise<void> {
    await this.client.post<void>('/application.delete', request);
  }

  async stop(request: StopApplicationRequest): Promise<void> {
    await this.client.post<void>('/application.stop', request);
  }

  async start(request: StartApplicationRequest): Promise<void> {
    await this.client.post<void>('/application.start', request);
  }

  async redeploy(request: RedeployApplicationRequest): Promise<void> {
    await this.client.post<void>('/application.redeploy', request);
  }

  async saveEnvironment(request: SaveEnvironmentRequest): Promise<void> {
    await this.client.post<void>('/application.saveEnvironment', request);
  }
}
