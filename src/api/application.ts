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
  DeployApplicationRequest,
  UpdateApplicationRequest,
  MarkRunningApplicationRequest,
  SaveBuildTypeRequest,
  SaveGithubProviderRequest,
  SaveGitlabProviderRequest,
  SaveBitbucketProviderRequest,
  SaveGiteaProviderRequest,
  SaveGitProviderRequest,
  SaveDockerProviderRequest,
  CancelDeploymentRequest,
  MoveApplicationRequest,
  CleanQueuesRequest,
  ReadAppMonitoringRequest,
  ReadTraefikConfigRequest,
  UpdateTraefikConfigRequest,
  RefreshTokenRequest,
  DisconnectGitProviderRequest,
} from '../types/application';
import { MonitoringData } from '../types/monitoring';

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

  async deploy(request: DeployApplicationRequest): Promise<void> {
    await this.client.post<void>('/application.deploy', request);
  }

  async update(request: UpdateApplicationRequest): Promise<void> {
    await this.client.post<void>('/application.update', request);
  }

  async markRunning(request: MarkRunningApplicationRequest): Promise<void> {
    await this.client.post<void>('/application.markRunning', request);
  }

  async saveBuildType(request: SaveBuildTypeRequest): Promise<void> {
    await this.client.post<void>('/application.saveBuildType', request);
  }

  async saveGithubProvider(request: SaveGithubProviderRequest): Promise<void> {
    await this.client.post<void>('/application.saveGithubProvider', request);
  }

  async saveGitlabProvider(request: SaveGitlabProviderRequest): Promise<void> {
    await this.client.post<void>('/application.saveGitlabProvider', request);
  }

  async saveBitbucketProvider(request: SaveBitbucketProviderRequest): Promise<void> {
    await this.client.post<void>('/application.saveBitbucketProvider', request);
  }

  async saveGiteaProvider(request: SaveGiteaProviderRequest): Promise<void> {
    await this.client.post<void>('/application.saveGiteaProvider', request);
  }

  async saveGitProvider(request: SaveGitProviderRequest): Promise<void> {
    await this.client.post<void>('/application.saveGitProdiver', request);
  }

  async saveDockerProvider(request: SaveDockerProviderRequest): Promise<void> {
    await this.client.post<void>('/application.saveDockerProvider', request);
  }

  async cancelDeployment(request: CancelDeploymentRequest): Promise<void> {
    await this.client.post<void>('/application.cancelDeployment', request);
  }

  async move(request: MoveApplicationRequest): Promise<void> {
    await this.client.post<void>('/application.move', request);
  }

  async cleanQueues(request: CleanQueuesRequest): Promise<void> {
    await this.client.post<void>('/application.cleanQueues', request);
  }

  async readAppMonitoring(request: ReadAppMonitoringRequest): Promise<MonitoringData> {
    return this.client.get<MonitoringData>('/application.readAppMonitoring', request);
  }

  async readTraefikConfig(request: ReadTraefikConfigRequest): Promise<string> {
    return this.client.get<string>('/application.readTraefikConfig', request);
  }

  async updateTraefikConfig(request: UpdateTraefikConfigRequest): Promise<void> {
    await this.client.post<void>('/application.updateTraefikConfig', request);
  }

  async refreshToken(request: RefreshTokenRequest): Promise<void> {
    await this.client.post<void>('/application.refreshToken', request);
  }

  async disconnectGitProvider(request: DisconnectGitProviderRequest): Promise<void> {
    await this.client.post<void>('/application.disconnectGitProvider', request);
  }
}
