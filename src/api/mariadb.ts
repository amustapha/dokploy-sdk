import { HttpClient } from '../client/http-client';
import {
  MariadbDatabase,
  CreateMariadbRequest,
  GetMariadbRequest,
  StartMariadbRequest,
  StopMariadbRequest,
  SaveMariadbExternalPortRequest,
  DeployMariadbRequest,
  ChangeMariadbStatusRequest,
  RemoveMariadbRequest,
  SaveMariadbEnvironmentRequest,
  ReloadMariadbRequest,
  UpdateMariadbRequest,
  MoveMariadbRequest,
  RebuildMariadbRequest,
} from '../types/mariadb';

export class MariadbApi {
  constructor(private client: HttpClient) {}

  async create(request: CreateMariadbRequest): Promise<MariadbDatabase> {
    return this.client.post<MariadbDatabase>('/mariadb.create', request);
  }

  async getOne(request: GetMariadbRequest): Promise<MariadbDatabase> {
    return this.client.get<MariadbDatabase>('/mariadb.one', request);
  }

  async start(request: StartMariadbRequest): Promise<void> {
    await this.client.post<void>('/mariadb.start', request);
  }

  async stop(request: StopMariadbRequest): Promise<void> {
    await this.client.post<void>('/mariadb.stop', request);
  }

  async saveExternalPort(
    request: SaveMariadbExternalPortRequest
  ): Promise<void> {
    await this.client.post<void>('/mariadb.saveExternalPort', request);
  }

  async deploy(request: DeployMariadbRequest): Promise<void> {
    await this.client.post<void>('/mariadb.deploy', request);
  }

  async changeStatus(request: ChangeMariadbStatusRequest): Promise<void> {
    await this.client.post<void>('/mariadb.changeStatus', request);
  }

  async remove(request: RemoveMariadbRequest): Promise<void> {
    await this.client.post<void>('/mariadb.remove', request);
  }

  async saveEnvironment(
    request: SaveMariadbEnvironmentRequest
  ): Promise<void> {
    await this.client.post<void>('/mariadb.saveEnvironment', request);
  }

  async reload(request: ReloadMariadbRequest): Promise<void> {
    await this.client.post<void>('/mariadb.reload', request);
  }

  async update(request: UpdateMariadbRequest): Promise<void> {
    await this.client.post<void>('/mariadb.update', request);
  }

  async move(request: MoveMariadbRequest): Promise<void> {
    await this.client.post<void>('/mariadb.move', request);
  }

  async rebuild(request: RebuildMariadbRequest): Promise<void> {
    await this.client.post<void>('/mariadb.rebuild', request);
  }
}
