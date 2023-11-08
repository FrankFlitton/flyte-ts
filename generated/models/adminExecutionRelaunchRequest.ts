/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { coreWorkflowExecutionIdentifier } from './coreWorkflowExecutionIdentifier';

/**
 * Request to relaunch the referenced execution.
 */
export type adminExecutionRelaunchRequest = {
    id?: coreWorkflowExecutionIdentifier;
    name?: string;
    /**
     * Allows for all cached values of a workflow and its tasks to be overwritten for a single execution.
     * If enabled, all calculations are performed even if cached results would be available, overwriting the stored
     * data once execution finishes successfully.
     */
    overwrite_cache?: boolean;
};

