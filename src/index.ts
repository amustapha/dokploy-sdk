import { DokployConfig } from './types/common';
import { HttpClient } from './client/http-client';
import { AdminApi } from './api/admin';

export class DokploySDK {
  public admin: AdminApi;

  constructor(config: DokployConfig) {
    const httpClient = new HttpClient(config);
    this.admin = new AdminApi(httpClient);
  }
}

export * from './types/common';
export * from './types/admin';
export { AdminApi } from './api/admin';
