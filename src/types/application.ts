import {
  SwarmHealthCheck,
  SwarmRestartPolicy,
  SwarmPlacement,
  SwarmUpdateConfig,
  SwarmRollbackConfig,
  SwarmMode,
  SwarmLabels,
  SwarmNetwork,
} from './swarm';

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
  environmentId: string;
  appName?: string;
  description?: string | null;
  serverId?: string | null;
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
  env?: string | null;
  buildArgs?: string | null;
}

export interface DeployApplicationRequest {
  applicationId: string;
  title?: string;
  description?: string;
}

export type SourceType = 'github' | 'docker' | 'git' | 'gitlab' | 'bitbucket' | 'gitea' | 'drop';
export type TriggerType = 'push' | 'tag';
export type BuildType = 'dockerfile' | 'heroku_buildpacks' | 'paketo_buildpacks' | 'nixpacks' | 'static' | 'railpack';
export type ApplicationStatus = 'idle' | 'running' | 'done' | 'error';

export interface UpdateApplicationRequest {
  applicationId: string;
  name?: string;
  appName?: string;
  description?: string | null;
  env?: string | null;
  previewEnv?: string | null;
  watchPaths?: string[] | null;
  previewBuildArgs?: string | null;
  previewLabels?: string[] | null;
  previewWildcard?: string | null;
  previewPort?: number | null;
  previewHttps?: boolean;
  previewPath?: string | null;
  previewCertificateType?: 'letsencrypt' | 'none' | 'custom';
  previewCustomCertResolver?: string | null;
  previewLimit?: number | null;
  isPreviewDeploymentsActive?: boolean | null;
  previewRequireCollaboratorPermissions?: boolean | null;
  rollbackActive?: boolean | null;
  buildArgs?: string | null;
  memoryReservation?: string | null;
  memoryLimit?: string | null;
  cpuReservation?: string | null;
  cpuLimit?: string | null;
  title?: string | null;
  enabled?: boolean | null;
  subtitle?: string | null;
  command?: string | null;
  refreshToken?: string | null;
  sourceType?: SourceType;
  cleanCache?: boolean | null;
  repository?: string | null;
  owner?: string | null;
  branch?: string | null;
  buildPath?: string | null;
  triggerType?: TriggerType | null;
  autoDeploy?: boolean | null;
  gitlabProjectId?: number | null;
  gitlabRepository?: string | null;
  gitlabOwner?: string | null;
  gitlabBranch?: string | null;
  gitlabBuildPath?: string | null;
  gitlabPathNamespace?: string | null;
  giteaRepository?: string | null;
  giteaOwner?: string | null;
  giteaBranch?: string | null;
  giteaBuildPath?: string | null;
  bitbucketRepository?: string | null;
  bitbucketOwner?: string | null;
  bitbucketBranch?: string | null;
  bitbucketBuildPath?: string | null;
  username?: string | null;
  password?: string | null;
  dockerImage?: string | null;
  registryUrl?: string | null;
  customGitUrl?: string | null;
  customGitBranch?: string | null;
  customGitBuildPath?: string | null;
  customGitSSHKeyId?: string | null;
  enableSubmodules?: boolean;
  dockerfile?: string | null;
  dockerContextPath?: string | null;
  dockerBuildStage?: string | null;
  dropBuildPath?: string | null;
  healthCheckSwarm?: SwarmHealthCheck | null;
  restartPolicySwarm?: SwarmRestartPolicy | null;
  placementSwarm?: SwarmPlacement | null;
  updateConfigSwarm?: SwarmUpdateConfig | null;
  rollbackConfigSwarm?: SwarmRollbackConfig | null;
  modeSwarm?: SwarmMode | null;
  labelsSwarm?: SwarmLabels | null;
  networkSwarm?: SwarmNetwork[] | null;
  replicas?: number;
  applicationStatus?: ApplicationStatus;
  buildType?: BuildType;
  railpackVersion?: string | null;
  herokuVersion?: string | null;
  publishDirectory?: string | null;
  isStaticSpa?: boolean | null;
  createdAt?: string;
  registryId?: string | null;
  environmentId?: string;
  githubId?: string | null;
  gitlabId?: string | null;
  giteaId?: string | null;
  bitbucketId?: string | null;
}

export interface MarkRunningApplicationRequest {
  applicationId: string;
}

export interface SaveBuildTypeRequest {
  applicationId: string;
  buildType: BuildType;
  dockerContextPath: string;
  dockerBuildStage: string;
  dockerfile?: string | null;
  herokuVersion?: string | null;
  railpackVersion?: string | null;
  publishDirectory?: string | null;
  isStaticSpa?: boolean | null;
}

export interface SaveGithubProviderRequest {
  applicationId: string;
  owner: string;
  githubId: string;
  enableSubmodules: boolean;
  repository?: string | null;
  branch?: string | null;
  buildPath?: string | null;
  watchPaths?: string[] | null;
  triggerType?: TriggerType;
}

export interface SaveGitlabProviderRequest {
  applicationId: string;
  gitlabBranch: string;
  gitlabBuildPath: string;
  gitlabOwner: string;
  gitlabRepository: string;
  gitlabId: string;
  gitlabProjectId: number;
  gitlabPathNamespace: string;
  enableSubmodules: boolean;
  watchPaths?: string[] | null;
}

export interface SaveBitbucketProviderRequest {
  applicationId: string;
  bitbucketBranch: string;
  bitbucketBuildPath: string;
  bitbucketOwner: string;
  bitbucketRepository: string;
  bitbucketId: string;
  enableSubmodules: boolean;
  watchPaths?: string[] | null;
}

export interface SaveGiteaProviderRequest {
  applicationId: string;
  giteaBranch: string;
  giteaBuildPath: string;
  giteaOwner: string;
  giteaRepository: string;
  giteaId: string;
  enableSubmodules: boolean;
  watchPaths?: string[] | null;
}

export interface SaveGitProviderRequest {
  applicationId: string;
  enableSubmodules: boolean;
  customGitBranch?: string | null;
  customGitBuildPath?: string | null;
  customGitUrl?: string | null;
  watchPaths?: string[] | null;
  customGitSSHKeyId?: string | null;
}

export interface SaveDockerProviderRequest {
  applicationId: string;
  dockerImage?: string | null;
  username?: string | null;
  password?: string | null;
  registryUrl?: string | null;
  registryId?: string | null;
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
