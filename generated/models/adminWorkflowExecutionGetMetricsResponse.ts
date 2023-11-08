/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { coreSpan } from './coreSpan';

/**
 * WorkflowExecutionGetMetricsResponse represents the response containing metrics for the specified workflow execution.
 */
export type adminWorkflowExecutionGetMetricsResponse = {
    /**
     * Span defines the top-level breakdown of the workflows execution. More precise information is nested in a
     * hierarchical structure using Flyte entity references.
     */
    span?: coreSpan;
};

