import { DatabaseApiBase } from './base/database-api.base';
import {
  MongoDatabase,
  CreateMongoRequest,
  GetMongoRequest,
  StartMongoRequest,
  StopMongoRequest,
  SaveMongoExternalPortRequest,
  DeployMongoRequest,
  ChangeMongoStatusRequest,
  RemoveMongoRequest,
  SaveMongoEnvironmentRequest,
  ReloadMongoRequest,
  UpdateMongoRequest,
  MoveMongoRequest,
  RebuildMongoRequest,
} from '../types/mongo';

/**
 * API client for managing MongoDB database instances
 *
 * @example
 * const mongo = await sdk.mongo.create({
 *   name: 'my-database',
 *   environmentId: 'env-123'
 * });
 */
export class MongoApi extends DatabaseApiBase<
  MongoDatabase,
  CreateMongoRequest,
  GetMongoRequest,
  StartMongoRequest,
  StopMongoRequest,
  SaveMongoExternalPortRequest,
  DeployMongoRequest,
  ChangeMongoStatusRequest,
  RemoveMongoRequest,
  SaveMongoEnvironmentRequest,
  ReloadMongoRequest,
  UpdateMongoRequest,
  MoveMongoRequest,
  RebuildMongoRequest
> {
  protected readonly prefix = 'mongo';
}
