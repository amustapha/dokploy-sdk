export interface Application {
  applicationId: string;
  name: string;
  appName?: string;
  description?: string;
  projectId: string;
  serverId?: string;
  [key: string]: unknown;
}

export interface CreateApplicationRequest {
  name: string;
  appName?: string;
  description?: string;
  projectId: string;
  serverId?: string;
}

export interface GetApplicationRequest {
  applicationId: string;
}

export interface ReloadApplicationRequest {
  appName: string;
  applicationId: string;
}

export interface DeleteApplicationRequest {
  applicationId: string;
}

export interface StopApplicationRequest {
  applicationId: string;
}

export interface StartApplicationRequest {
  applicationId: string;
}

export interface RedeployApplicationRequest {
  applicationId: string;
}

export interface SaveEnvironmentRequest {
  applicationId: string;
  env?: string;
  buildArgs?: string;
}

export interface DeployApplicationRequest {
  applicationId: string;
  title?: string;
  description?: string;
}

export interface UpdateApplicationRequest {
  applicationId: string;
  name?: string;
  appName?: string;
  description?: string;
  env?: string;
  previewEnv?: string;
  watchPaths?: string[];
  previewBuildArgs?: string;
  previewLabels?: string[];
  previewWildcard?: string;
  previewPort?: number;
  previewHttps?: boolean;
  previewPath?: string;
  previewCertificateType?: string;
  previewCustomCertResolver?: string;
  previewLimit?: number;
  isPreviewDeploymentsActive?: boolean;
  previewRequireCollaboratorPermissions?: boolean;
  rollbackActive?: boolean;
  buildArgs?: string;
  memoryReservation?: string;
  memoryLimit?: string;
  cpuReservation?: string;
  cpuLimit?: string;
  title?: string;
  enabled?: boolean;
  subtitle?: string;
  command?: string;
  refreshToken?: string;
  sourceType?: string;
  cleanCache?: boolean;
  repository?: string;
  owner?: string;
  branch?: string;
  buildPath?: string;
  triggerType?: string;
  autoDeploy?: boolean;
  gitlabProjectId?: number;
  gitlabRepository?: string;
  gitlabOwner?: string;
  gitlabBranch?: string;
  gitlabBuildPath?: string;
  gitlabPathNamespace?: string;
  giteaRepository?: string;
  giteaOwner?: string;
  giteaBranch?: string;
  giteaBuildPath?: string;
  bitbucketRepository?: string;
  bitbucketOwner?: string;
  bitbucketBranch?: string;
  bitbucketBuildPath?: string;
  username?: string;
  password?: string;
  dockerImage?: string;
  registryUrl?: string;
  customGitUrl?: string;
  customGitBranch?: string;
  customGitBuildPath?: string;
  customGitSSHKeyId?: string;
  enableSubmodules?: boolean;
  dockerfile?: string;
  dockerContextPath?: string;
  dockerBuildStage?: string;
  dropBuildPath?: string;
  healthCheckSwarm?: unknown;
  restartPolicySwarm?: unknown;
  placementSwarm?: unknown;
  updateConfigSwarm?: unknown;
  rollbackConfigSwarm?: unknown;
  modeSwarm?: unknown;
  labelsSwarm?: unknown;
  networkSwarm?: string[];
  replicas?: number;
  applicationStatus?: string;
  buildType?: string;
  railpackVersion?: string;
  herokuVersion?: string;
  publishDirectory?: string;
  isStaticSpa?: boolean;
  createdAt?: string;
  registryId?: string;
  environmentId?: string;
  githubId?: string;
  gitlabId?: string;
  giteaId?: string;
  bitbucketId?: string;
}

export interface MarkRunningApplicationRequest {
  applicationId: string;
}

export interface SaveBuildTypeRequest {
  applicationId: string;
  buildType: 'dockerfile' | 'heroku_buildpacks' | 'paketo_buildpacks' | 'nixpacks' | 'static';
  dockerfile?: string;
  dockerContextPath: string;
  dockerBuildStage: string;
  herokuVersion?: string;
  railpackVersion?: string;
  publishDirectory?: string;
  isStaticSpa?: boolean;
}

export interface SaveGithubProviderRequest {
  applicationId: string;
  repository?: string;
  branch?: string;
  owner: string;
  buildPath?: string;
  githubId: string;
  watchPaths?: string[];
  enableSubmodules?: boolean;
  triggerType?: string;
}

export interface SaveGitlabProviderRequest {
  applicationId: string;
  gitlabBranch?: string;
  gitlabBuildPath?: string;
  gitlabOwner?: string;
  gitlabRepository?: string;
  gitlabId: string;
  gitlabProjectId?: number;
  gitlabPathNamespace?: string;
  watchPaths?: string[];
  enableSubmodules?: boolean;
}

export interface SaveBitbucketProviderRequest {
  applicationId: string;
  bitbucketBranch?: string;
  bitbucketBuildPath?: string;
  bitbucketOwner?: string;
  bitbucketRepository?: string;
  bitbucketId: string;
  watchPaths?: string[];
  enableSubmodules?: boolean;
}

export interface SaveGiteaProviderRequest {
  applicationId: string;
  giteaBranch?: string;
  giteaBuildPath?: string;
  giteaOwner?: string;
  giteaRepository?: string;
  giteaId: string;
  watchPaths?: string[];
  enableSubmodules?: boolean;
}

export interface SaveGitProviderRequest {
  applicationId: string;
  customGitBranch?: string;
  customGitBuildPath?: string;
  customGitUrl?: string;
  watchPaths?: string[];
  enableSubmodules?: boolean;
  customGitSSHKeyId?: string;
}

export interface SaveDockerProviderRequest {
  applicationId: string;
  dockerImage?: string;
  username?: string;
  password?: string;
  registryUrl?: string;
  registryId?: string;
}

export interface CancelDeploymentRequest {
  applicationId: string;
}

export interface MoveApplicationRequest {
  applicationId: string;
  targetEnvironmentId: string;
}

export interface CleanQueuesRequest {
  applicationId: string;
}

export interface ReadAppMonitoringRequest {
  appName: string;
}

export interface ReadTraefikConfigRequest {
  applicationId: string;
}

export interface UpdateTraefikConfigRequest {
  applicationId: string;
  traefikConfig: string;
}

export interface RefreshTokenRequest {
  applicationId: string;
}

export interface DisconnectGitProviderRequest {
  applicationId: string;
}
