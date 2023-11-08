/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { adminUrlBlob } from './adminUrlBlob';
import type { coreLiteralMap } from './coreLiteralMap';

/**
 * Response structure for WorkflowExecutionGetDataRequest which contains inputs and outputs for an execution.
 */
export type adminWorkflowExecutionGetDataResponse = {
    /**
     * Signed url to fetch a core.LiteralMap of execution outputs.
     * Deprecated: Please use full_outputs instead.
     */
    outputs?: adminUrlBlob;
    /**
     * Signed url to fetch a core.LiteralMap of execution inputs.
     * Deprecated: Please use full_inputs instead.
     */
    inputs?: adminUrlBlob;
    /**
     * Full_inputs will only be populated if they are under a configured size threshold.
     */
    full_inputs?: coreLiteralMap;
    /**
     * Full_outputs will only be populated if they are under a configured size threshold.
     */
    full_outputs?: coreLiteralMap;
};

