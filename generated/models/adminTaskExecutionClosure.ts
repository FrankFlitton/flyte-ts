/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { adminReason } from './adminReason';
import type { coreExecutionError } from './coreExecutionError';
import type { coreLiteralMap } from './coreLiteralMap';
import type { coreTaskExecutionPhase } from './coreTaskExecutionPhase';
import type { coreTaskLog } from './coreTaskLog';
import type { flyteidleventTaskExecutionMetadata } from './flyteidleventTaskExecutionMetadata';
import type { protobufStruct } from './protobufStruct';

/**
 * Container for task execution details and results.
 */
export type adminTaskExecutionClosure = {
    /**
     * Path to remote data store where output blob is stored if the execution succeeded (and produced outputs).
     * DEPRECATED. Use GetTaskExecutionData to fetch output data instead.
     */
    output_uri?: string;
    /**
     * Error information for the task execution. Populated if the execution failed.
     */
    error?: coreExecutionError;
    /**
     * Raw output data produced by this task execution.
     * DEPRECATED. Use GetTaskExecutionData to fetch output data instead.
     */
    output_data?: coreLiteralMap;
    /**
     * The last recorded phase for this task execution.
     */
    phase?: coreTaskExecutionPhase;
    /**
     * Detailed log information output by the task execution.
     */
    logs?: Array<coreTaskLog>;
    /**
     * Time at which the task execution began running.
     */
    started_at?: string;
    /**
     * The amount of time the task execution spent running.
     */
    duration?: string;
    /**
     * Time at which the task execution was created.
     */
    created_at?: string;
    /**
     * Time at which the task execution was last updated.
     */
    updated_at?: string;
    /**
     * Custom data specific to the task plugin.
     */
    custom_info?: protobufStruct;
    /**
     * If there is an explanation for the most recent phase transition, the reason will capture it.
     */
    reason?: string;
    /**
     * A predefined yet extensible Task type identifier.
     */
    task_type?: string;
    /**
     * Metadata around how a task was executed.
     */
    metadata?: flyteidleventTaskExecutionMetadata;
    /**
     * The event version is used to indicate versioned changes in how data is maintained using this
     * proto message. For example, event_verison > 0 means that maps tasks logs use the
     * TaskExecutionMetadata ExternalResourceInfo fields for each subtask rather than the TaskLog
     * in this message.
     */
    event_version?: number;
    /**
     * A time-series of the phase transition or update explanations. This, when compared to storing a singular reason
     * as previously done, is much more valuable in visualizing and understanding historical evaluations.
     */
    reasons?: Array<adminReason>;
};

