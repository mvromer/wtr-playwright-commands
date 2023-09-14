# Playwright Commands for Web Test Runner

This contains custom commands you can register with [Web Test Runner (WTR)](https://modern-web.dev/docs/test-runner/overview/)
for interacting with Playwright's page object models. This assumes you are using
[@web/test-runner-playwright](https://www.npmjs.com/package/@web/test-runner-playwright) for
launching your browser via Playwright and running your tests within the page it creates.

## Installation

```sh
npm install --save-dev wtr-playwright-commands
```

## Command Usages

Each command can be registered separately with WTR. Details on each supported command are given
below.

### waitForNetworkIdle

Use this to have a test wait for Playwright to receive its network idle load status before resuming.

#### Configuration

```javascript
import { waitForNetworkIdlePlugin } from 'wtr-playwright-commands/plugin.js';

export default {
  plugins: [waitForNetworkIdlePlugin()],
  // ... rest of config ...
}
```

#### Usage

```javascript
import { fixture, html } from '@open-wc/testing';
import { waitForNetworkIdle } from 'wtr-playwright-commands';

import '../src/my-element.js';

describe('MyElement', () => {
  it('can wait for network idle', async () => {
    const el = await fixture(html`<my-element></my-element>`);
    await waitForNetworkIdle();

    // ... do assertions that require network activity to complete ...
  });
});
```
