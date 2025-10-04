import { HttpClient } from '../client/http-client';
import {
  MySqlDatabase,
  CreateMySqlRequest,
  GetMySqlRequest,
  StartMySqlRequest,
  StopMySqlRequest,
  SaveMySqlExternalPortRequest,
  DeployMySqlRequest,
  ChangeMySqlStatusRequest,
  RemoveMySqlRequest,
  SaveMySqlEnvironmentRequest,
  ReloadMySqlRequest,
  UpdateMySqlRequest,
} from '../types/mysql';

export class MySqlApi {
  constructor(private client: HttpClient) {}

  async create(request: CreateMySqlRequest): Promise<MySqlDatabase> {
    return this.client.post<MySqlDatabase>('/mysql.create', request);
  }

  async getOne(request: GetMySqlRequest): Promise<MySqlDatabase> {
    return this.client.get<MySqlDatabase>('/mysql.one', request);
  }

  async start(request: StartMySqlRequest): Promise<void> {
    await this.client.post<void>('/mysql.start', request);
  }

  async stop(request: StopMySqlRequest): Promise<void> {
    await this.client.post<void>('/mysql.stop', request);
  }

  async saveExternalPort(
    request: SaveMySqlExternalPortRequest
  ): Promise<void> {
    await this.client.post<void>('/mysql.saveExternalPort', request);
  }

  async deploy(request: DeployMySqlRequest): Promise<void> {
    await this.client.post<void>('/mysql.deploy', request);
  }

  async changeStatus(request: ChangeMySqlStatusRequest): Promise<void> {
    await this.client.post<void>('/mysql.changeStatus', request);
  }

  async remove(request: RemoveMySqlRequest): Promise<void> {
    await this.client.post<void>('/mysql.remove', request);
  }

  async saveEnvironment(request: SaveMySqlEnvironmentRequest): Promise<void> {
    await this.client.post<void>('/mysql.saveEnvironment', request);
  }

  async reload(request: ReloadMySqlRequest): Promise<void> {
    await this.client.post<void>('/mysql.reload', request);
  }

  async update(request: UpdateMySqlRequest): Promise<void> {
    await this.client.post<void>('/mysql.update', request);
  }
}
