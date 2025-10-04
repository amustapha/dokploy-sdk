import { HttpClient } from '../../client/http-client';

/**
 * Base class for all database APIs (Postgres, MySQL, MariaDB, MongoDB, Redis)
 * Provides common CRUD and lifecycle operations for database services
 *
 * @template TDatabase - The database entity type
 * @template TCreateReq - Create request type
 * @template TGetReq - Get one request type
 * @template TStartReq - Start request type
 * @template TStopReq - Stop request type
 * @template TSaveExternalPortReq - Save external port request type
 * @template TDeployReq - Deploy request type
 * @template TChangeStatusReq - Change status request type
 * @template TRemoveReq - Remove request type
 * @template TSaveEnvironmentReq - Save environment request type
 * @template TReloadReq - Reload request type
 * @template TUpdateReq - Update request type
 * @template TMoveReq - Move request type
 * @template TRebuildReq - Rebuild request type
 */
export abstract class DatabaseApiBase<
  TDatabase,
  TCreateReq,
  TGetReq,
  TStartReq,
  TStopReq,
  TSaveExternalPortReq,
  TDeployReq,
  TChangeStatusReq,
  TRemoveReq,
  TSaveEnvironmentReq,
  TReloadReq,
  TUpdateReq,
  TMoveReq,
  TRebuildReq
> {
  /**
   * The API endpoint prefix (e.g., 'postgres', 'mysql', 'mariadb', 'mongo', 'redis')
   */
  protected abstract readonly prefix: string;

  constructor(protected client: HttpClient) {}

  /**
   * Creates a new database instance
   * @param request - Database creation parameters
   * @returns The created database instance
   * @throws {ApiError} When the request fails
   */
  async create(request: TCreateReq): Promise<TDatabase> {
    return this.client.post<TDatabase>(`/${this.prefix}.create`, request);
  }

  /**
   * Retrieves a single database instance
   * @param request - Parameters to identify the database
   * @returns The database instance
   * @throws {ApiError} When the request fails or database is not found
   */
  async getOne(request: TGetReq): Promise<TDatabase> {
    return this.client.get<TDatabase>(`/${this.prefix}.one`, request);
  }

  /**
   * Starts a database instance
   * @param request - Parameters to identify the database to start
   * @throws {ApiError} When the request fails
   */
  async start(request: TStartReq): Promise<void> {
    await this.client.post<void>(`/${this.prefix}.start`, request);
  }

  /**
   * Stops a running database instance
   * @param request - Parameters to identify the database to stop
   * @throws {ApiError} When the request fails
   */
  async stop(request: TStopReq): Promise<void> {
    await this.client.post<void>(`/${this.prefix}.stop`, request);
  }

  /**
   * Saves the external port configuration for the database
   * @param request - Port configuration parameters
   * @throws {ApiError} When the request fails
   */
  async saveExternalPort(request: TSaveExternalPortReq): Promise<void> {
    await this.client.post<void>(`/${this.prefix}.saveExternalPort`, request);
  }

  /**
   * Deploys the database instance
   * @param request - Deployment parameters
   * @throws {ApiError} When the request fails
   */
  async deploy(request: TDeployReq): Promise<void> {
    await this.client.post<void>(`/${this.prefix}.deploy`, request);
  }

  /**
   * Changes the status of a database instance
   * @param request - Status change parameters
   * @throws {ApiError} When the request fails
   */
  async changeStatus(request: TChangeStatusReq): Promise<void> {
    await this.client.post<void>(`/${this.prefix}.changeStatus`, request);
  }

  /**
   * Removes a database instance
   * @param request - Parameters to identify the database to remove
   * @throws {ApiError} When the request fails
   */
  async remove(request: TRemoveReq): Promise<void> {
    await this.client.post<void>(`/${this.prefix}.remove`, request);
  }

  /**
   * Saves environment variables for the database
   * @param request - Environment configuration parameters
   * @throws {ApiError} When the request fails
   */
  async saveEnvironment(request: TSaveEnvironmentReq): Promise<void> {
    await this.client.post<void>(`/${this.prefix}.saveEnvironment`, request);
  }

  /**
   * Reloads the database configuration
   * @param request - Reload parameters
   * @throws {ApiError} When the request fails
   */
  async reload(request: TReloadReq): Promise<void> {
    await this.client.post<void>(`/${this.prefix}.reload`, request);
  }

  /**
   * Updates database configuration
   * @param request - Update parameters
   * @throws {ApiError} When the request fails
   */
  async update(request: TUpdateReq): Promise<void> {
    await this.client.post<void>(`/${this.prefix}.update`, request);
  }

  /**
   * Moves a database to a different project or environment
   * @param request - Move parameters
   * @throws {ApiError} When the request fails
   */
  async move(request: TMoveReq): Promise<void> {
    await this.client.post<void>(`/${this.prefix}.move`, request);
  }

  /**
   * Rebuilds the database instance
   * @param request - Rebuild parameters
   * @throws {ApiError} When the request fails
   */
  async rebuild(request: TRebuildReq): Promise<void> {
    await this.client.post<void>(`/${this.prefix}.rebuild`, request);
  }
}
