# growthbook-client Provider

## Installation

```
$ npm install @openfeature/growthbook-client-provider
```

## Example Setup

```typescript
import { GrowthBook, Context, InitOptions } from '@growthbook/growthbook';
import { GrowthbookClientProvider } from '@openfeature/growthbook-client-provider';

/*
 * Configure your GrowthBook instance with GrowthBook context
 * @see https://docs.growthbook.io/lib/js#step-1-configure-your-app
 */
const gbContext: Context = {
  apiHost: 'https://cdn.growthbook.io',
  clientKey: 'sdk-abc123',
  // Only required if you have feature encryption enabled in GrowthBook
  decryptionKey: 'key_abc123',
};

/*
 * optional init options
 * @see https://docs.growthbook.io/lib/js#switching-to-init
 */
const initOptions: InitOptions = {
  timeout: 2000,
  streaming: true,
};

OpenFeature.setProvider(new GrowthbookClientProvider(gbContext, initOptions));
```

## Building

Run `nx package providers-growthbook-client` to build the library.

## Running unit tests

Run `nx test providers-growthbook-client` to execute the unit tests via [Jest](https://jestjs.io).
