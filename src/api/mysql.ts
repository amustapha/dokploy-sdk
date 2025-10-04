import { DatabaseApiBase } from './base/database-api.base';
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
  MoveMySqlRequest,
  RebuildMySqlRequest,
} from '../types/mysql';

/**
 * API client for managing MySQL database instances
 *
 * @example
 * const mysql = await sdk.mysql.create({
 *   name: 'my-database',
 *   environmentId: 'env-123'
 * });
 */
export class MySqlApi extends DatabaseApiBase<
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
  MoveMySqlRequest,
  RebuildMySqlRequest
> {
  protected readonly prefix = 'mysql';
}
