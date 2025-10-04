import { HttpClient } from '../client/http-client';
import {
  RedisDatabase,
  CreateRedisRequest,
  GetRedisRequest,
  StartRedisRequest,
  StopRedisRequest,
  SaveExternalPortRequest,
  DeployRedisRequest,
  ChangeRedisStatusRequest,
  RemoveRedisRequest,
  SaveRedisEnvironmentRequest,
  ReloadRedisRequest,
  UpdateRedisRequest,
} from '../types/redis';

export class RedisApi {
  constructor(private client: HttpClient) {}

  async create(request: CreateRedisRequest): Promise<RedisDatabase> {
    return this.client.post<RedisDatabase>('/redis.create', request);
  }

  async getOne(request: GetRedisRequest): Promise<RedisDatabase> {
    return this.client.get<RedisDatabase>('/redis.one', request);
  }

  async start(request: StartRedisRequest): Promise<void> {
    await this.client.post<void>('/redis.start', request);
  }

  async stop(request: StopRedisRequest): Promise<void> {
    await this.client.post<void>('/redis.stop', request);
  }

  async saveExternalPort(request: SaveExternalPortRequest): Promise<void> {
    await this.client.post<void>('/redis.saveExternalPort', request);
  }

  async deploy(request: DeployRedisRequest): Promise<void> {
    await this.client.post<void>('/redis.deploy', request);
  }

  async changeStatus(request: ChangeRedisStatusRequest): Promise<void> {
    await this.client.post<void>('/redis.changeStatus', request);
  }

  async remove(request: RemoveRedisRequest): Promise<void> {
    await this.client.post<void>('/redis.remove', request);
  }

  async saveEnvironment(request: SaveRedisEnvironmentRequest): Promise<void> {
    await this.client.post<void>('/redis.saveEnvironment', request);
  }

  async reload(request: ReloadRedisRequest): Promise<void> {
    await this.client.post<void>('/redis.reload', request);
  }

  async update(request: UpdateRedisRequest): Promise<void> {
    await this.client.post<void>('/redis.update', request);
  }
}
