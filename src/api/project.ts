import { HttpClient } from '../client/http-client';
import {
  Project,
  CreateProjectRequest,
  GetProjectRequest,
  RemoveProjectRequest,
  UpdateProjectRequest,
} from '../types/project';

export class ProjectApi {
  constructor(private client: HttpClient) {}

  async create(request: CreateProjectRequest): Promise<Project> {
    return this.client.post<Project>('/project.create', request);
  }

  async getOne(request: GetProjectRequest): Promise<Project> {
    return this.client.get<Project>('/project.one', request);
  }

  async getAll(): Promise<Project[]> {
    return this.client.get<Project[]>('/project.all');
  }

  async remove(request: RemoveProjectRequest): Promise<void> {
    await this.client.post<void>('/project.remove', request);
  }

  async update(request: UpdateProjectRequest): Promise<void> {
    await this.client.post<void>('/project.update', request);
  }
}
