/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { coreWorkflowExecutionIdentifier } from './coreWorkflowExecutionIdentifier';

/**
 * The unique identifier for a successfully created execution.
 * If the name was *not* specified in the create request, this identifier will include a generated name.
 */
export type adminExecutionCreateResponse = {
    id?: coreWorkflowExecutionIdentifier;
};

