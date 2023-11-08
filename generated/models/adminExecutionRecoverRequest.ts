/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { adminExecutionMetadata } from './adminExecutionMetadata';
import type { coreWorkflowExecutionIdentifier } from './coreWorkflowExecutionIdentifier';

/**
 * Request to recover the referenced execution.
 */
export type adminExecutionRecoverRequest = {
    /**
     * Identifier of the workflow execution to recover.
     */
    id?: coreWorkflowExecutionIdentifier;
    name?: string;
    /**
     * Additional metadata which will be used to overwrite any metadata in the reference execution when triggering a recovery execution.
     */
    metadata?: adminExecutionMetadata;
};

