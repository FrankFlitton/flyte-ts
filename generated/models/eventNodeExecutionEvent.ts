/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { coreExecutionError } from './coreExecutionError';
import type { coreLiteralMap } from './coreLiteralMap';
import type { coreNodeExecutionIdentifier } from './coreNodeExecutionIdentifier';
import type { coreNodeExecutionPhase } from './coreNodeExecutionPhase';
import type { eventParentNodeExecutionMetadata } from './eventParentNodeExecutionMetadata';
import type { eventParentTaskExecutionMetadata } from './eventParentTaskExecutionMetadata';
import type { flyteidleventTaskNodeMetadata } from './flyteidleventTaskNodeMetadata';
import type { flyteidleventWorkflowNodeMetadata } from './flyteidleventWorkflowNodeMetadata';

export type eventNodeExecutionEvent = {
    id?: coreNodeExecutionIdentifier;
    producer_id?: string;
    phase?: coreNodeExecutionPhase;
    /**
     * This timestamp represents when the original event occurred, it is generated
     * by the executor of the node.
     */
    occurred_at?: string;
    input_uri?: string;
    /**
     * Raw input data consumed by this node execution.
     */
    input_data?: coreLiteralMap;
    /**
     * URL to the output of the execution, it encodes all the information
     * including Cloud source provider. ie., s3://...
     */
    output_uri?: string;
    error?: coreExecutionError;
    /**
     * Raw output data produced by this node execution.
     */
    output_data?: coreLiteralMap;
    workflow_node_metadata?: flyteidleventWorkflowNodeMetadata;
    task_node_metadata?: flyteidleventTaskNodeMetadata;
    /**
     * [To be deprecated] Specifies which task (if any) launched this node.
     */
    parent_task_metadata?: eventParentTaskExecutionMetadata;
    /**
     * Specifies the parent node of the current node execution. Node executions at level zero will not have a parent node.
     */
    parent_node_metadata?: eventParentNodeExecutionMetadata;
    retry_group?: string;
    spec_node_id?: string;
    node_name?: string;
    event_version?: number;
    /**
     * Whether this node launched a subworkflow.
     */
    is_parent?: boolean;
    /**
     * Whether this node yielded a dynamic workflow.
     */
    is_dynamic?: boolean;
    deck_uri?: string;
    /**
     * This timestamp represents the instant when the event was reported by the executing framework. For example,
     * when first processing a node the `occurred_at` timestamp should be the instant propeller makes progress, so when
     * literal inputs are initially copied. The event however will not be sent until after the copy completes.
     * Extracting both of these timestamps facilitates a more accurate portrayal of the evaluation time-series.
     */
    reported_at?: string;
    /**
     * Indicates if this node is an ArrayNode.
     */
    is_array?: boolean;
};

