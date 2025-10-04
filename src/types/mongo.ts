export type DatabaseStatus = 'idle' | 'running' | 'done' | 'error';

export interface MongoDatabase {
  mongoId: string;
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

export interface CreateMongoRequest {
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

export interface GetMongoRequest {
  mongoId: string;
}

export interface StartMongoRequest {
  mongoId: string;
}

export interface StopMongoRequest {
  mongoId: string;
}

export interface SaveExternalPortRequest {
  mongoId: string;
  externalPort: number | null;
}

export interface DeployMongoRequest {
  mongoId: string;
}

export interface ChangeMongoStatusRequest {
  mongoId: string;
  applicationStatus: DatabaseStatus;
}

export interface RemoveMongoRequest {
  mongoId: string;
}

export interface SaveMongoEnvironmentRequest {
  mongoId: string;
  env: string | null;
}

export interface ReloadMongoRequest {
  mongoId: string;
  appName: string;
}

export interface UpdateMongoRequest {
  mongoId: string;
  name?: string;
  description?: string;
  databaseName?: string;
  databaseUser?: string;
  databasePassword?: string;
  dockerImage?: string;
  [key: string]: unknown;
}
