import { DatabaseStatus } from './common';

export interface RedisDatabase {
  redisId: string;
  name: string;
  appName: string;
  dockerImage?: string;
  description?: string;
  projectId: string;
  serverId?: string;
  applicationStatus?: DatabaseStatus;
  [key: string]: unknown;
}

export interface CreateRedisRequest {
  name: string;
  appName: string;
  databasePassword: string;
  environmentId: string;
  dockerImage?: string | null;
  description?: string | null;
  serverId?: string | null;
}

export interface GetRedisRequest {
  redisId: string;
}

export interface StartRedisRequest {
  redisId: string;
}

export interface StopRedisRequest {
  redisId: string;
}

export interface SaveRedisExternalPortRequest {
  redisId: string;
  externalPort: number | null;
}

export interface DeployRedisRequest {
  redisId: string;
}

export interface ChangeRedisStatusRequest {
  redisId: string;
  applicationStatus: DatabaseStatus;
}

export interface RemoveRedisRequest {
  redisId: string;
}

export interface SaveRedisEnvironmentRequest {
  redisId: string;
  env: string | null;
}

export interface ReloadRedisRequest {
  redisId: string;
  appName: string;
}

export interface UpdateRedisRequest {
  redisId: string;
  name?: string;
  description?: string;
  databasePassword?: string;
  dockerImage?: string;
  [key: string]: unknown;
}

export interface MoveRedisRequest {
  redisId: string;
  targetEnvironmentId: string;
}

export interface RebuildRedisRequest {
  redisId: string;
}
