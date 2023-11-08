/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { coreExecutionError } from './coreExecutionError';
import type { coreLiteralMap } from './coreLiteralMap';
import type { coreWorkflowExecutionIdentifier } from './coreWorkflowExecutionIdentifier';
import type { coreWorkflowExecutionPhase } from './coreWorkflowExecutionPhase';

export type eventWorkflowExecutionEvent = {
    execution_id?: coreWorkflowExecutionIdentifier;
    producer_id?: string;
    phase?: coreWorkflowExecutionPhase;
    /**
     * This timestamp represents when the original event occurred, it is generated
     * by the executor of the workflow.
     */
    occurred_at?: string;
    /**
     * URL to the output of the execution, it encodes all the information
     * including Cloud source provider. ie., s3://...
     */
    output_uri?: string;
    error?: coreExecutionError;
    /**
     * Raw output data produced by this workflow execution.
     */
    output_data?: coreLiteralMap;
};

