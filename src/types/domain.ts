export type CertificateType = 'letsencrypt' | 'none';
export type DomainType = 'compose' | 'application';

export interface Domain {
  domainId: string;
  host: string;
  path?: string;
  port?: number;
  https?: boolean;
  certificateType?: CertificateType;
  domainType?: DomainType;
  [key: string]: unknown;
}

export interface CreateDomainRequest {
  host: string;
  path?: string;
  port?: number;
  https?: boolean;
  applicationId?: string;
  certificateType?: CertificateType;
  composeId?: string;
  serviceName?: string;
  domainType?: DomainType;
}

export interface GetDomainsByApplicationRequest {
  applicationId: string;
}

export interface GetDomainsByComposeRequest {
  composeId: string;
}

export interface GenerateDomainRequest {
  appName: string;
  serverId?: string;
}

export interface UpdateDomainRequest extends CreateDomainRequest {
  domainId: string;
}

export interface GetDomainRequest {
  domainId: string;
}

export interface DeleteDomainRequest {
  domainId: string;
}
