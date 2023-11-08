/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { coreRetryStrategy } from './coreRetryStrategy';

/**
 * Defines extra information about the Node.
 */
export type coreNodeMetadata = {
    name?: string;
    /**
     * The overall timeout of a task.
     */
    timeout?: string;
    /**
     * Number of retries per task.
     */
    retries?: coreRetryStrategy;
    interruptible?: boolean;
};

