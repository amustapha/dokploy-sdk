import { HttpClient } from '../client/http-client';
import {
  MongoDatabase,
  CreateMongoRequest,
  GetMongoRequest,
  StartMongoRequest,
  StopMongoRequest,
  SaveMongoExternalPortRequest,
  DeployMongoRequest,
  ChangeMongoStatusRequest,
  RemoveMongoRequest,
  SaveMongoEnvironmentRequest,
  ReloadMongoRequest,
  UpdateMongoRequest,
  MoveMongoRequest,
  RebuildMongoRequest,
} from '../types/mongo';

export class MongoApi {
  constructor(private client: HttpClient) {}

  async create(request: CreateMongoRequest): Promise<MongoDatabase> {
    return this.client.post<MongoDatabase>('/mongo.create', request);
  }

  async getOne(request: GetMongoRequest): Promise<MongoDatabase> {
    return this.client.get<MongoDatabase>('/mongo.one', request);
  }

  async start(request: StartMongoRequest): Promise<void> {
    await this.client.post<void>('/mongo.start', request);
  }

  async stop(request: StopMongoRequest): Promise<void> {
    await this.client.post<void>('/mongo.stop', request);
  }

  async saveExternalPort(
    request: SaveMongoExternalPortRequest
  ): Promise<void> {
    await this.client.post<void>('/mongo.saveExternalPort', request);
  }

  async deploy(request: DeployMongoRequest): Promise<void> {
    await this.client.post<void>('/mongo.deploy', request);
  }

  async changeStatus(request: ChangeMongoStatusRequest): Promise<void> {
    await this.client.post<void>('/mongo.changeStatus', request);
  }

  async remove(request: RemoveMongoRequest): Promise<void> {
    await this.client.post<void>('/mongo.remove', request);
  }

  async saveEnvironment(request: SaveMongoEnvironmentRequest): Promise<void> {
    await this.client.post<void>('/mongo.saveEnvironment', request);
  }

  async reload(request: ReloadMongoRequest): Promise<void> {
    await this.client.post<void>('/mongo.reload', request);
  }

  async update(request: UpdateMongoRequest): Promise<void> {
    await this.client.post<void>('/mongo.update', request);
  }

  async move(request: MoveMongoRequest): Promise<void> {
    await this.client.post<void>('/mongo.move', request);
  }

  async rebuild(request: RebuildMongoRequest): Promise<void> {
    await this.client.post<void>('/mongo.rebuild', request);
  }
}
