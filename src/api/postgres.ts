import { HttpClient } from '../client/http-client';
import {
  PostgresDatabase,
  CreatePostgresRequest,
  GetPostgresRequest,
  StartPostgresRequest,
  StopPostgresRequest,
  SaveExternalPortRequest,
  DeployPostgresRequest,
  ChangePostgresStatusRequest,
  RemovePostgresRequest,
  SavePostgresEnvironmentRequest,
  ReloadPostgresRequest,
  UpdatePostgresRequest,
} from '../types/postgres';

export class PostgresApi {
  constructor(private client: HttpClient) {}

  async create(request: CreatePostgresRequest): Promise<PostgresDatabase> {
    return this.client.post<PostgresDatabase>('/postgres.create', request);
  }

  async getOne(request: GetPostgresRequest): Promise<PostgresDatabase> {
    return this.client.get<PostgresDatabase>('/postgres.one', request);
  }

  async start(request: StartPostgresRequest): Promise<void> {
    await this.client.post<void>('/postgres.start', request);
  }

  async stop(request: StopPostgresRequest): Promise<void> {
    await this.client.post<void>('/postgres.stop', request);
  }

  async saveExternalPort(request: SaveExternalPortRequest): Promise<void> {
    await this.client.post<void>('/postgres.saveExternalPort', request);
  }

  async deploy(request: DeployPostgresRequest): Promise<void> {
    await this.client.post<void>('/postgres.deploy', request);
  }

  async changeStatus(request: ChangePostgresStatusRequest): Promise<void> {
    await this.client.post<void>('/postgres.changeStatus', request);
  }

  async remove(request: RemovePostgresRequest): Promise<void> {
    await this.client.post<void>('/postgres.remove', request);
  }

  async saveEnvironment(
    request: SavePostgresEnvironmentRequest
  ): Promise<void> {
    await this.client.post<void>('/postgres.saveEnvironment', request);
  }

  async reload(request: ReloadPostgresRequest): Promise<void> {
    await this.client.post<void>('/postgres.reload', request);
  }

  async update(request: UpdatePostgresRequest): Promise<void> {
    await this.client.post<void>('/postgres.update', request);
  }
}
