export type DatabaseStatus = 'idle' | 'running' | 'done' | 'error';

export interface MariadbDatabase {
  mariadbId: string;
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

export interface CreateMariadbRequest {
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

export interface GetMariadbRequest {
  mariadbId: string;
}

export interface StartMariadbRequest {
  mariadbId: string;
}

export interface StopMariadbRequest {
  mariadbId: string;
}

export interface SaveExternalPortRequest {
  mariadbId: string;
  externalPort: number | null;
}

export interface DeployMariadbRequest {
  mariadbId: string;
}

export interface ChangeMariadbStatusRequest {
  mariadbId: string;
  applicationStatus: DatabaseStatus;
}

export interface RemoveMariadbRequest {
  mariadbId: string;
}

export interface SaveMariadbEnvironmentRequest {
  mariadbId: string;
  env: string | null;
}

export interface ReloadMariadbRequest {
  mariadbId: string;
  appName: string;
}

export interface UpdateMariadbRequest {
  mariadbId: string;
  name?: string;
  description?: string;
  databaseName?: string;
  databaseUser?: string;
  databasePassword?: string;
  dockerImage?: string;
  [key: string]: unknown;
}
