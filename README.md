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

// Get admin information
const admin = await sdk.admin.getAdmin();

// Create user invitation
await sdk.admin.createUserInvitation({ email: 'user@example.com' });

// Remove user
await sdk.admin.removeUser({ authId: 'user-auth-id' });

// Get user by token
const user = await sdk.admin.getUserByToken({ token: 'user-token' });
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
