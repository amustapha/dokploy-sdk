import { DokployConfig } from './types/common';
import { HttpClient } from './client/http-client';
import { AdminApi } from './api/admin';
import { ApplicationApi } from './api/application';
import { AuthApi } from './api/auth';
import { ProjectApi } from './api/project';
import { DeploymentApi } from './api/deployment';
import { ComposeApi } from './api/compose';
import { DockerApi } from './api/docker';
import { DomainApi } from './api/domain';
import { PostgresApi } from './api/postgres';

export class DokploySDK {
  public admin: AdminApi;
  public application: ApplicationApi;
  public auth: AuthApi;
  public project: ProjectApi;
  public deployment: DeploymentApi;
  public compose: ComposeApi;
  public docker: DockerApi;
  public domain: DomainApi;
  public postgres: PostgresApi;

  constructor(config: DokployConfig) {
    const httpClient = new HttpClient(config);
    this.admin = new AdminApi(httpClient);
    this.application = new ApplicationApi(httpClient);
    this.auth = new AuthApi(httpClient);
    this.project = new ProjectApi(httpClient);
    this.deployment = new DeploymentApi(httpClient);
    this.compose = new ComposeApi(httpClient);
    this.docker = new DockerApi(httpClient);
    this.domain = new DomainApi(httpClient);
    this.postgres = new PostgresApi(httpClient);
  }
}

export * from './types/common';
export * from './types/admin';
export * from './types/application';
export * from './types/auth';
export * from './types/project';
export * from './types/deployment';
export * from './types/compose';
export * from './types/docker';
export * from './types/domain';
export * from './types/postgres';
export { AdminApi } from './api/admin';
export { ApplicationApi } from './api/application';
export { AuthApi } from './api/auth';
export { ProjectApi } from './api/project';
export { DeploymentApi } from './api/deployment';
export { ComposeApi } from './api/compose';
export { DockerApi } from './api/docker';
export { DomainApi } from './api/domain';
export { PostgresApi } from './api/postgres';
