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
  CancelComposeDeploymentRequest,
  CleanComposeQueuesRequest,
  DeployTemplateRequest,
  DisconnectComposeGitProviderRequest,
  FetchComposeSourceTypeRequest,
  GetConvertedComposeRequest,
  GetDefaultCommandRequest,
  GetComposeTagsRequest,
  ImportComposeRequest,
  IsolatedDeploymentRequest,
  LoadMountsByServiceRequest,
  LoadComposeServicesRequest,
  MoveComposeRequest,
  ProcessTemplateRequest,
  RandomizeComposeRequest,
  RefreshComposeTokenRequest,
  StartComposeRequest,
  GetComposeTemplatesRequest,
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

  async cancelDeployment(request: CancelComposeDeploymentRequest): Promise<void> {
    await this.client.post<void>('/compose.cancelDeployment', request);
  }

  async cleanQueues(request: CleanComposeQueuesRequest): Promise<void> {
    await this.client.post<void>('/compose.cleanQueues', request);
  }

  async deployTemplate(request: DeployTemplateRequest): Promise<void> {
    await this.client.post<void>('/compose.deployTemplate', request);
  }

  async disconnectGitProvider(request: DisconnectComposeGitProviderRequest): Promise<void> {
    await this.client.post<void>('/compose.disconnectGitProvider', request);
  }

  async fetchSourceType(request: FetchComposeSourceTypeRequest): Promise<unknown> {
    return this.client.post<unknown>('/compose.fetchSourceType', request);
  }

  async getConvertedCompose(request: GetConvertedComposeRequest): Promise<string> {
    return this.client.get<string>('/compose.getConvertedCompose', request);
  }

  async getDefaultCommand(request: GetDefaultCommandRequest): Promise<string> {
    return this.client.get<string>('/compose.getDefaultCommand', request);
  }

  async getTags(request?: GetComposeTagsRequest): Promise<unknown[]> {
    return this.client.get<unknown[]>('/compose.getTags', request);
  }

  async import(request: ImportComposeRequest): Promise<void> {
    await this.client.post<void>('/compose.import', request);
  }

  async isolatedDeployment(request: IsolatedDeploymentRequest): Promise<void> {
    await this.client.post<void>('/compose.isolatedDeployment', request);
  }

  async loadMountsByService(request: LoadMountsByServiceRequest): Promise<unknown[]> {
    return this.client.get<unknown[]>('/compose.loadMountsByService', request);
  }

  async loadServices(request: LoadComposeServicesRequest): Promise<unknown[]> {
    return this.client.get<unknown[]>('/compose.loadServices', request);
  }

  async move(request: MoveComposeRequest): Promise<void> {
    await this.client.post<void>('/compose.move', request);
  }

  async processTemplate(request: ProcessTemplateRequest): Promise<void> {
    await this.client.post<void>('/compose.processTemplate', request);
  }

  async randomizeCompose(request: RandomizeComposeRequest): Promise<void> {
    await this.client.post<void>('/compose.randomizeCompose', request);
  }

  async refreshToken(request: RefreshComposeTokenRequest): Promise<void> {
    await this.client.post<void>('/compose.refreshToken', request);
  }

  async start(request: StartComposeRequest): Promise<void> {
    await this.client.post<void>('/compose.start', request);
  }

  async templates(request?: GetComposeTemplatesRequest): Promise<unknown[]> {
    return this.client.get<unknown[]>('/compose.templates', request);
  }
}
