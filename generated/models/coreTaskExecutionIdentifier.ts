/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { coreIdentifier } from './coreIdentifier';
import type { coreNodeExecutionIdentifier } from './coreNodeExecutionIdentifier';

/**
 * Encapsulation of fields that identify a Flyte task execution entity.
 */
export type coreTaskExecutionIdentifier = {
    task_id?: coreIdentifier;
    node_execution_id?: coreNodeExecutionIdentifier;
    retry_attempt?: number;
};

