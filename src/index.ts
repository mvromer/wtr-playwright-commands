import { executeServerCommand } from '@web/test-runner-commands';

/**
 * Await the returned Promise to cause the current test to wait for Playwright to receive a network
 * idle load status before resuming.
 */
export function waitForNetworkIdle() {
  return executeServerCommand('wait-for-network-idle');
}
