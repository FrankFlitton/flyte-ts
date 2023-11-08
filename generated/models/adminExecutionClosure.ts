/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { adminAbortMetadata } from './adminAbortMetadata';
import type { adminExecutionStateChangeDetails } from './adminExecutionStateChangeDetails';
import type { adminLiteralMapBlob } from './adminLiteralMapBlob';
import type { adminNotification } from './adminNotification';
import type { coreExecutionError } from './coreExecutionError';
import type { coreIdentifier } from './coreIdentifier';
import type { coreLiteralMap } from './coreLiteralMap';
import type { coreWorkflowExecutionPhase } from './coreWorkflowExecutionPhase';

export type adminExecutionClosure = {
    /**
     * Output URI in the case of a successful execution.
     * DEPRECATED. Use GetExecutionData to fetch output data instead.
     */
    outputs?: adminLiteralMapBlob;
    /**
     * Error information in the case of a failed execution.
     */
    error?: coreExecutionError;
    /**
     * In the case of a user-specified abort, this will pass along the user-supplied cause.
     */
    abort_cause?: string;
    /**
     * In the case of a user-specified abort, this will pass along the user and their supplied cause.
     */
    abort_metadata?: adminAbortMetadata;
    /**
     * Raw output data produced by this execution.
     * DEPRECATED. Use GetExecutionData to fetch output data instead.
     */
    output_data?: coreLiteralMap;
    computed_inputs?: coreLiteralMap;
    /**
     * Most recent recorded phase for the execution.
     */
    phase?: coreWorkflowExecutionPhase;
    /**
     * Reported time at which the execution began running.
     */
    started_at?: string;
    /**
     * The amount of time the execution spent running.
     */
    duration?: string;
    /**
     * Reported time at which the execution was created.
     */
    created_at?: string;
    /**
     * Reported time at which the execution was last updated.
     */
    updated_at?: string;
    /**
     * The notification settings to use after merging the CreateExecutionRequest and the launch plan
     * notification settings. An execution launched with notifications will always prefer that definition
     * to notifications defined statically in a launch plan.
     */
    notifications?: Array<adminNotification>;
    /**
     * Identifies the workflow definition for this execution.
     */
    workflow_id?: coreIdentifier;
    state_change_details?: adminExecutionStateChangeDetails;
};

