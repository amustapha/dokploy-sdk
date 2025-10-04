# Dokploy SDK

TypeScript SDK for the Dokploy API.

## Installation

```bash
npm install dokploy-sdk
```

## Usage

```typescript
import { DokploySDK } from 'dokploy-sdk';

const sdk = new DokploySDK({
  baseUrl: 'http://your-dokploy-instance.com/api',
  token: 'your-api-token',
});

// Projects
const project = await sdk.project.create({
  name: 'My Project',
  description: 'Project description',
});
const projects = await sdk.project.getAll();

// Applications
const app = await sdk.application.create({
  name: 'My App',
  projectId: project.projectId,
});
await sdk.application.start({ applicationId: app.applicationId });
await sdk.application.redeploy({ applicationId: app.applicationId });

// Domains
const domain = await sdk.domain.create({
  host: 'example.com',
  applicationId: app.applicationId,
  https: true,
  certificateType: 'letsencrypt',
});

// Docker
const containers = await sdk.docker.getContainers();
await sdk.docker.restartContainer({ containerId: 'container-id' });

// Postgres
const db = await sdk.postgres.create({
  name: 'My Database',
  appName: 'postgres-app',
  databaseName: 'mydb',
  databaseUser: 'user',
  databasePassword: 'password',
  projectId: project.projectId,
});
await sdk.postgres.deploy({ postgresId: db.postgresId });

// Compose
const compose = await sdk.compose.create({
  name: 'My Compose',
  projectId: project.projectId,
  composeType: 'docker-compose',
});
await sdk.compose.deploy({ composeId: compose.composeId });

// Auth
await sdk.auth.login({
  email: 'admin@example.com',
  password: 'password',
});
const currentUser = await sdk.auth.get();
```

## Development

```bash
# Install dependencies
npm install

# Build
npm run build

# Watch mode
npm run dev

# Lint
npm run lint

# Format
npm run format
```

## License

MIT
