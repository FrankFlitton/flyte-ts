/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { coreWorkflowExecutionIdentifier } from './coreWorkflowExecutionIdentifier';

/**
 * Encapsulation of fields that identify a Flyte node execution entity.
 */
export type coreNodeExecutionIdentifier = {
    node_id?: string;
    execution_id?: coreWorkflowExecutionIdentifier;
};

