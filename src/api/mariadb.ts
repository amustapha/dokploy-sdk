import { DatabaseApiBase } from './base/database-api.base';
import {
  MariadbDatabase,
  CreateMariadbRequest,
  GetMariadbRequest,
  StartMariadbRequest,
  StopMariadbRequest,
  SaveMariadbExternalPortRequest,
  DeployMariadbRequest,
  ChangeMariadbStatusRequest,
  RemoveMariadbRequest,
  SaveMariadbEnvironmentRequest,
  ReloadMariadbRequest,
  UpdateMariadbRequest,
  MoveMariadbRequest,
  RebuildMariadbRequest,
} from '../types/mariadb';

/**
 * API client for managing MariaDB database instances
 *
 * @example
 * const mariadb = await sdk.mariadb.create({
 *   name: 'my-database',
 *   environmentId: 'env-123'
 * });
 */
export class MariadbApi extends DatabaseApiBase<
  MariadbDatabase,
  CreateMariadbRequest,
  GetMariadbRequest,
  StartMariadbRequest,
  StopMariadbRequest,
  SaveMariadbExternalPortRequest,
  DeployMariadbRequest,
  ChangeMariadbStatusRequest,
  RemoveMariadbRequest,
  SaveMariadbEnvironmentRequest,
  ReloadMariadbRequest,
  UpdateMariadbRequest,
  MoveMariadbRequest,
  RebuildMariadbRequest
> {
  protected readonly prefix = 'mariadb';
}
