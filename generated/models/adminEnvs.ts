/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { coreKeyValuePair } from './coreKeyValuePair';

/**
 * Environment variable values to be applied to an execution resource.
 * In the future a mode (e.g. OVERRIDE, APPEND, etc) can be defined
 * to specify how to merge environment variables defined at registration and execution time.
 */
export type adminEnvs = {
    /**
     * Map of custom environment variables to be applied to the execution resource.
     */
    values?: Array<coreKeyValuePair>;
};

