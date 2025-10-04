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

/**
 * API client for managing applications
 * Provides methods for creating, deploying, and managing applications
 *
 * @example
 * const app = await sdk.application.create({
 *   name: 'my-app',
 *   environmentId: 'env-123'
 * });
 */
export class ApplicationApi {
  constructor(private client: HttpClient) {}

  /**
   * Creates a new application
   * @param request - Application creation parameters
   * @returns The created application object
   * @throws {ApiError} When the request fails
   */
  async create(request: CreateApplicationRequest): Promise<Application> {
    return this.client.post<Application>('/application.create', request);
  }

  /**
   * Retrieves a single application by ID
   * @param request - Parameters to identify the application
   * @returns The application object
   * @throws {ApiError} When the request fails or application is not found
   */
  async getOne(request: GetApplicationRequest): Promise<Application> {
    return this.client.get<Application>('/application.one', request);
  }

  /**
   * Reloads an application configuration
   * @param request - Parameters to identify the application to reload
   * @throws {ApiError} When the request fails
   */
  async reload(request: ReloadApplicationRequest): Promise<void> {
    await this.client.post<void>('/application.reload', request);
  }

  /**
   * Deletes an application
   * @param request - Parameters to identify the application to delete
   * @throws {ApiError} When the request fails
   */
  async delete(request: DeleteApplicationRequest): Promise<void> {
    await this.client.post<void>('/application.delete', request);
  }

  /**
   * Stops a running application
   * @param request - Parameters to identify the application to stop
   * @throws {ApiError} When the request fails
   */
  async stop(request: StopApplicationRequest): Promise<void> {
    await this.client.post<void>('/application.stop', request);
  }

  /**
   * Starts an application
   * @param request - Parameters to identify the application to start
   * @throws {ApiError} When the request fails
   */
  async start(request: StartApplicationRequest): Promise<void> {
    await this.client.post<void>('/application.start', request);
  }

  /**
   * Redeploys an application with current configuration
   * @param request - Parameters to identify the application to redeploy
   * @throws {ApiError} When the request fails
   */
  async redeploy(request: RedeployApplicationRequest): Promise<void> {
    await this.client.post<void>('/application.redeploy', request);
  }

  /**
   * Saves environment variables for an application
   * @param request - Environment configuration parameters
   * @throws {ApiError} When the request fails
   */
  async saveEnvironment(request: SaveEnvironmentRequest): Promise<void> {
    await this.client.post<void>('/application.saveEnvironment', request);
  }

  /**
   * Deploys an application
   * @param request - Deployment parameters
   * @throws {ApiError} When the request fails
   */
  async deploy(request: DeployApplicationRequest): Promise<void> {
    await this.client.post<void>('/application.deploy', request);
  }

  /**
   * Updates application configuration
   * @param request - Update parameters
   * @throws {ApiError} When the request fails
   */
  async update(request: UpdateApplicationRequest): Promise<void> {
    await this.client.post<void>('/application.update', request);
  }

  /**
   * Marks an application as running
   * @param request - Parameters to identify the application
   * @throws {ApiError} When the request fails
   */
  async markRunning(request: MarkRunningApplicationRequest): Promise<void> {
    await this.client.post<void>('/application.markRunning', request);
  }

  /**
   * Saves the build type configuration for an application
   * @param request - Build type configuration parameters
   * @throws {ApiError} When the request fails
   */
  async saveBuildType(request: SaveBuildTypeRequest): Promise<void> {
    await this.client.post<void>('/application.saveBuildType', request);
  }

  /**
   * Configures GitHub as the source provider for an application
   * @param request - GitHub provider configuration parameters
   * @throws {ApiError} When the request fails
   */
  async saveGithubProvider(request: SaveGithubProviderRequest): Promise<void> {
    await this.client.post<void>('/application.saveGithubProvider', request);
  }

  /**
   * Configures GitLab as the source provider for an application
   * @param request - GitLab provider configuration parameters
   * @throws {ApiError} When the request fails
   */
  async saveGitlabProvider(request: SaveGitlabProviderRequest): Promise<void> {
    await this.client.post<void>('/application.saveGitlabProvider', request);
  }

  /**
   * Configures Bitbucket as the source provider for an application
   * @param request - Bitbucket provider configuration parameters
   * @throws {ApiError} When the request fails
   */
  async saveBitbucketProvider(request: SaveBitbucketProviderRequest): Promise<void> {
    await this.client.post<void>('/application.saveBitbucketProvider', request);
  }

  /**
   * Configures Gitea as the source provider for an application
   * @param request - Gitea provider configuration parameters
   * @throws {ApiError} When the request fails
   */
  async saveGiteaProvider(request: SaveGiteaProviderRequest): Promise<void> {
    await this.client.post<void>('/application.saveGiteaProvider', request);
  }

  /**
   * Configures a custom Git provider for an application
   * @param request - Custom Git provider configuration parameters
   * @throws {ApiError} When the request fails
   */
  async saveGitProvider(request: SaveGitProviderRequest): Promise<void> {
    await this.client.post<void>('/application.saveGitProdiver', request);
  }

  /**
   * Configures Docker as the source provider for an application
   * @param request - Docker provider configuration parameters
   * @throws {ApiError} When the request fails
   */
  async saveDockerProvider(request: SaveDockerProviderRequest): Promise<void> {
    await this.client.post<void>('/application.saveDockerProvider', request);
  }

  /**
   * Cancels an ongoing deployment
   * @param request - Parameters to identify the deployment to cancel
   * @throws {ApiError} When the request fails
   */
  async cancelDeployment(request: CancelDeploymentRequest): Promise<void> {
    await this.client.post<void>('/application.cancelDeployment', request);
  }

  /**
   * Moves an application to a different environment
   * @param request - Move parameters including target environment
   * @throws {ApiError} When the request fails
   */
  async move(request: MoveApplicationRequest): Promise<void> {
    await this.client.post<void>('/application.move', request);
  }

  /**
   * Cleans deployment queues for an application
   * @param request - Parameters to identify the application
   * @throws {ApiError} When the request fails
   */
  async cleanQueues(request: CleanQueuesRequest): Promise<void> {
    await this.client.post<void>('/application.cleanQueues', request);
  }

  /**
   * Reads monitoring data for an application
   * @param request - Parameters to identify the application
   * @returns Monitoring metrics including CPU, memory, and network usage
   * @throws {ApiError} When the request fails
   */
  async readAppMonitoring(request: ReadAppMonitoringRequest): Promise<MonitoringData> {
    return this.client.get<MonitoringData>('/application.readAppMonitoring', request);
  }

  /**
   * Reads Traefik configuration for an application
   * @param request - Parameters to identify the application
   * @returns Traefik configuration as a string
   * @throws {ApiError} When the request fails
   */
  async readTraefikConfig(request: ReadTraefikConfigRequest): Promise<string> {
    return this.client.get<string>('/application.readTraefikConfig', request);
  }

  /**
   * Updates Traefik configuration for an application
   * @param request - New Traefik configuration
   * @throws {ApiError} When the request fails
   */
  async updateTraefikConfig(request: UpdateTraefikConfigRequest): Promise<void> {
    await this.client.post<void>('/application.updateTraefikConfig', request);
  }

  /**
   * Refreshes the authentication token for a Git provider
   * @param request - Parameters to identify the application
   * @throws {ApiError} When the request fails
   */
  async refreshToken(request: RefreshTokenRequest): Promise<void> {
    await this.client.post<void>('/application.refreshToken', request);
  }

  /**
   * Disconnects the Git provider from an application
   * @param request - Parameters to identify the application
   * @throws {ApiError} When the request fails
   */
  async disconnectGitProvider(request: DisconnectGitProviderRequest): Promise<void> {
    await this.client.post<void>('/application.disconnectGitProvider', request);
  }
}
