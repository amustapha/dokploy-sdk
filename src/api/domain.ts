import { HttpClient } from '../client/http-client';
import {
  Domain,
  CreateDomainRequest,
  GetDomainsByApplicationRequest,
  GetDomainsByComposeRequest,
  GenerateDomainRequest,
  UpdateDomainRequest,
  GetDomainRequest,
  DeleteDomainRequest,
} from '../types/domain';

export class DomainApi {
  constructor(private client: HttpClient) {}

  async create(request: CreateDomainRequest): Promise<Domain> {
    return this.client.post<Domain>('/domain.create', request);
  }

  async getByApplication(
    request: GetDomainsByApplicationRequest
  ): Promise<Domain[]> {
    return this.client.get<Domain[]>('/domain.byApplicationId', request);
  }

  async getByCompose(request: GetDomainsByComposeRequest): Promise<Domain[]> {
    return this.client.get<Domain[]>('/domain.byComposeId', request);
  }

  async generate(request: GenerateDomainRequest): Promise<Domain> {
    return this.client.post<Domain>('/domain.generateDomain', request);
  }

  async update(request: UpdateDomainRequest): Promise<void> {
    await this.client.post<void>('/domain.update', request);
  }

  async getOne(request: GetDomainRequest): Promise<Domain> {
    return this.client.get<Domain>('/domain.one', request);
  }

  async delete(request: DeleteDomainRequest): Promise<void> {
    await this.client.post<void>('/domain.delete', request);
  }
}
