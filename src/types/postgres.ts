export type DatabaseStatus = 'idle' | 'running' | 'done' | 'error';

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
  projectId: string;
  dockerImage?: string;
  description?: string;
  serverId?: string;
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
