import { DatabaseStatus } from './common';

export interface PostgresDatabase {
  postgresId: string;
  name: string;
  appName: string;
  databaseName: string;
  databaseUser: string;
  dockerImage?: string;
  description?: string;
  projectId: string;
  serverId?: string;
  applicationStatus?: DatabaseStatus;
  [key: string]: unknown;
}

export interface CreatePostgresRequest {
  name: string;
  appName: string;
  databaseName: string;
  databaseUser: string;
  databasePassword: string;
  environmentId: string;
  dockerImage?: string | null;
  description?: string | null;
  serverId?: string | null;
}

export interface GetPostgresRequest {
  postgresId: string;
}

export interface StartPostgresRequest {
  postgresId: string;
}

export interface StopPostgresRequest {
  postgresId: string;
}

export interface SaveExternalPortRequest {
  postgresId: string;
  externalPort: number | null;
}

export interface DeployPostgresRequest {
  postgresId: string;
}

export interface ChangePostgresStatusRequest {
  postgresId: string;
  applicationStatus: DatabaseStatus;
}

export interface RemovePostgresRequest {
  postgresId: string;
}

export interface SavePostgresEnvironmentRequest {
  postgresId: string;
  env: string | null;
}

export interface ReloadPostgresRequest {
  postgresId: string;
  appName: string;
}

export interface UpdatePostgresRequest {
  postgresId: string;
  name?: string;
  description?: string;
  databaseName?: string;
  databaseUser?: string;
  databasePassword?: string;
  dockerImage?: string;
  [key: string]: unknown;
}

export interface MovePostgresRequest {
  postgresId: string;
  targetEnvironmentId: string;
}

export interface RebuildPostgresRequest {
  postgresId: string;
}
