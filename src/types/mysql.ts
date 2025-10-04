import { DatabaseStatus } from './common';

export interface MySqlDatabase {
  mysqlId: string;
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

export interface CreateMySqlRequest {
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

export interface GetMySqlRequest {
  mysqlId: string;
}

export interface StartMySqlRequest {
  mysqlId: string;
}

export interface StopMySqlRequest {
  mysqlId: string;
}

export interface SaveMySqlExternalPortRequest {
  mysqlId: string;
  externalPort: number | null;
}

export interface DeployMySqlRequest {
  mysqlId: string;
}

export interface ChangeMySqlStatusRequest {
  mysqlId: string;
  applicationStatus: DatabaseStatus;
}

export interface RemoveMySqlRequest {
  mysqlId: string;
}

export interface SaveMySqlEnvironmentRequest {
  mysqlId: string;
  env: string | null;
}

export interface ReloadMySqlRequest {
  mysqlId: string;
  appName: string;
}

export interface UpdateMySqlRequest {
  mysqlId: string;
  name?: string;
  description?: string;
  databaseName?: string;
  databaseUser?: string;
  databasePassword?: string;
  dockerImage?: string;
  [key: string]: unknown;
}

export interface MoveMySqlRequest {
  mysqlId: string;
  targetEnvironmentId: string;
}

export interface RebuildMySqlRequest {
  mysqlId: string;
}
