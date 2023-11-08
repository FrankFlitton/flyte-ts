/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { adminExecutionClosure } from './adminExecutionClosure';
import type { adminExecutionSpec } from './adminExecutionSpec';
import type { coreWorkflowExecutionIdentifier } from './coreWorkflowExecutionIdentifier';

/**
 * A workflow execution represents an instantiated workflow, including all inputs and additional
 * metadata as well as computed results included state, outputs, and duration-based attributes.
 * Used as a response object used in Get and List execution requests.
 */
export type adminExecution = {
    /**
     * Unique identifier of the workflow execution.
     */
    id?: coreWorkflowExecutionIdentifier;
    /**
     * User-provided configuration and inputs for launching the execution.
     */
    spec?: adminExecutionSpec;
    /**
     * Execution results.
     */
    closure?: adminExecutionClosure;
};

