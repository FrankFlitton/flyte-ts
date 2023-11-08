/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { coreExecutionError } from './coreExecutionError';
import type { coreIdentifier } from './coreIdentifier';
import type { coreLiteralMap } from './coreLiteralMap';
import type { coreNodeExecutionIdentifier } from './coreNodeExecutionIdentifier';
import type { coreTaskExecutionPhase } from './coreTaskExecutionPhase';
import type { coreTaskLog } from './coreTaskLog';
import type { eventEventReason } from './eventEventReason';
import type { flyteidleventTaskExecutionMetadata } from './flyteidleventTaskExecutionMetadata';
import type { protobufStruct } from './protobufStruct';

/**
 * Plugin specific execution event information. For tasks like Python, Hive, Spark, DynamicJob.
 */
export type eventTaskExecutionEvent = {
    /**
     * ID of the task. In combination with the retryAttempt this will indicate
     * the task execution uniquely for a given parent node execution.
     */
    task_id?: coreIdentifier;
    parent_node_execution_id?: coreNodeExecutionIdentifier;
    retry_attempt?: number;
    phase?: coreTaskExecutionPhase;
    producer_id?: string;
    logs?: Array<coreTaskLog>;
    /**
     * This timestamp represents when the original event occurred, it is generated
     * by the executor of the task.
     */
    occurred_at?: string;
    /**
     * URI of the input file, it encodes all the information
     * including Cloud source provider. ie., s3://...
     */
    input_uri?: string;
    /**
     * Raw input data consumed by this task execution.
     */
    input_data?: coreLiteralMap;
    /**
     * URI to the output of the execution, it will be in a format that encodes all the information
     * including Cloud source provider. ie., s3://...
     */
    output_uri?: string;
    error?: coreExecutionError;
    /**
     * Raw output data produced by this task execution.
     */
    output_data?: coreLiteralMap;
    /**
     * Custom data that the task plugin sends back. This is extensible to allow various plugins in the system.
     */
    custom_info?: protobufStruct;
    /**
     * Some phases, like RUNNING, can send multiple events with changed metadata (new logs, additional custom_info, etc)
     * that should be recorded regardless of the lack of phase change.
     * The version field should be incremented when metadata changes across the duration of an individual phase.
     */
    phase_version?: number;
    /**
     * An optional explanation for the phase transition.
     * Deprecated: Use reasons instead.
     */
    reason?: string;
    /**
     * An optional list of explanations for the phase transition.
     */
    reasons?: Array<eventEventReason>;
    /**
     * A predefined yet extensible Task type identifier. If the task definition is already registered in flyte admin
     * this type will be identical, but not all task executions necessarily use pre-registered definitions and this
     * type is useful to render the task in the UI, filter task executions, etc.
     */
    task_type?: string;
    /**
     * Metadata around how a task was executed.
     */
    metadata?: flyteidleventTaskExecutionMetadata;
    /**
     * The event version is used to indicate versioned changes in how data is reported using this
     * proto message. For example, event_verison > 0 means that maps tasks report logs using the
     * TaskExecutionMetadata ExternalResourceInfo fields for each subtask rather than the TaskLog
     * in this message.
     */
    event_version?: number;
    /**
     * This timestamp represents the instant when the event was reported by the executing framework. For example, a k8s
     * pod task may be marked completed at (ie. `occurred_at`) the instant the container running user code completes,
     * but this event will not be reported until the pod is marked as completed. Extracting both of these timestamps
     * facilitates a more accurate portrayal of the evaluation time-series.
     */
    reported_at?: string;
};

