import { DatabaseApiBase } from './base/database-api.base';
import {
  PostgresDatabase,
  CreatePostgresRequest,
  GetPostgresRequest,
  StartPostgresRequest,
  StopPostgresRequest,
  SaveExternalPortRequest,
  DeployPostgresRequest,
  ChangePostgresStatusRequest,
  RemovePostgresRequest,
  SavePostgresEnvironmentRequest,
  ReloadPostgresRequest,
  UpdatePostgresRequest,
  MovePostgresRequest,
  RebuildPostgresRequest,
} from '../types/postgres';

/**
 * API client for managing PostgreSQL database instances
 *
 * @example
 * const postgres = await sdk.postgres.create({
 *   name: 'my-database',
 *   environmentId: 'env-123'
 * });
 */
export class PostgresApi extends DatabaseApiBase<
  PostgresDatabase,
  CreatePostgresRequest,
  GetPostgresRequest,
  StartPostgresRequest,
  StopPostgresRequest,
  SaveExternalPortRequest,
  DeployPostgresRequest,
  ChangePostgresStatusRequest,
  RemovePostgresRequest,
  SavePostgresEnvironmentRequest,
  ReloadPostgresRequest,
  UpdatePostgresRequest,
  MovePostgresRequest,
  RebuildPostgresRequest
> {
  protected readonly prefix = 'postgres';
}
