export interface Project {
  projectId: string;
  name: string;
  description?: string;
  [key: string]: unknown;
}

export interface CreateProjectRequest {
  name: string;
  description?: string;
}

export interface GetProjectRequest {
  projectId: string;
}

export interface RemoveProjectRequest {
  projectId: string;
}

export interface UpdateProjectRequest {
  projectId: string;
  name: string;
  description?: string;
}
