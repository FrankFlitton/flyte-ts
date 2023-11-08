/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { coreNodeExecutionIdentifier } from './coreNodeExecutionIdentifier';
import type { coreTaskExecutionIdentifier } from './coreTaskExecutionIdentifier';
import type { coreWorkflowExecutionIdentifier } from './coreWorkflowExecutionIdentifier';

/**
 * Span represents a duration trace of Flyte execution. The id field denotes a Flyte execution entity or an operation
 * which uniquely identifies the Span. The spans attribute allows this Span to be further broken down into more
 * precise definitions.
 */
export type coreSpan = {
    /**
     * start_time defines the instance this span began.
     */
    start_time?: string;
    /**
     * end_time defines the instance this span completed.
     */
    end_time?: string;
    /**
     * workflow_id is the id of the workflow execution this Span represents.
     */
    workflow_id?: coreWorkflowExecutionIdentifier;
    /**
     * node_id is the id of the node execution this Span represents.
     */
    node_id?: coreNodeExecutionIdentifier;
    /**
     * task_id is the id of the task execution this Span represents.
     */
    task_id?: coreTaskExecutionIdentifier;
    /**
     * operation_id is the id of a unique operation that this Span represents.
     */
    operation_id?: string;
    /**
     * spans defines a collection of Spans that breakdown this execution.
     */
    spans?: Array<coreSpan>;
};

