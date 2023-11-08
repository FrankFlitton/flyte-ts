/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { coreWorkflowExecutionIdentifier } from './coreWorkflowExecutionIdentifier';

/**
 * Request to terminate an in-progress execution.  This action is irreversible.
 * If an execution is already terminated, this request will simply be a no-op.
 * This request will fail if it references a non-existent execution.
 * If the request succeeds the phase "ABORTED" will be recorded for the termination
 * with the optional cause added to the output_result.
 */
export type adminExecutionTerminateRequest = {
    /**
     * Uniquely identifies the individual workflow execution to be terminated.
     */
    id?: coreWorkflowExecutionIdentifier;
    /**
     * Optional reason for aborting.
     */
    cause?: string;
};

