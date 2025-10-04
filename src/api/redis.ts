import { DatabaseApiBase } from './base/database-api.base';
import {
  RedisDatabase,
  CreateRedisRequest,
  GetRedisRequest,
  StartRedisRequest,
  StopRedisRequest,
  SaveRedisExternalPortRequest,
  DeployRedisRequest,
  ChangeRedisStatusRequest,
  RemoveRedisRequest,
  SaveRedisEnvironmentRequest,
  ReloadRedisRequest,
  UpdateRedisRequest,
  MoveRedisRequest,
  RebuildRedisRequest,
} from '../types/redis';

/**
 * API client for managing Redis database instances
 *
 * @example
 * const redis = await sdk.redis.create({
 *   name: 'my-cache',
 *   environmentId: 'env-123'
 * });
 */
export class RedisApi extends DatabaseApiBase<
  RedisDatabase,
  CreateRedisRequest,
  GetRedisRequest,
  StartRedisRequest,
  StopRedisRequest,
  SaveRedisExternalPortRequest,
  DeployRedisRequest,
  ChangeRedisStatusRequest,
  RemoveRedisRequest,
  SaveRedisEnvironmentRequest,
  ReloadRedisRequest,
  UpdateRedisRequest,
  MoveRedisRequest,
  RebuildRedisRequest
> {
  protected readonly prefix = 'redis';
}
