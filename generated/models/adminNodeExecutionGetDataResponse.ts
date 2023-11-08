/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { adminFlyteURLs } from './adminFlyteURLs';
import type { adminUrlBlob } from './adminUrlBlob';
import type { coreLiteralMap } from './coreLiteralMap';
import type { flyteidladminDynamicWorkflowNodeMetadata } from './flyteidladminDynamicWorkflowNodeMetadata';

/**
 * Response structure for NodeExecutionGetDataRequest which contains inputs and outputs for a node execution.
 */
export type adminNodeExecutionGetDataResponse = {
    /**
     * Signed url to fetch a core.LiteralMap of node execution inputs.
     * Deprecated: Please use full_inputs instead.
     */
    inputs?: adminUrlBlob;
    /**
     * Signed url to fetch a core.LiteralMap of node execution outputs.
     * Deprecated: Please use full_outputs instead.
     */
    outputs?: adminUrlBlob;
    /**
     * Full_inputs will only be populated if they are under a configured size threshold.
     */
    full_inputs?: coreLiteralMap;
    /**
     * Full_outputs will only be populated if they are under a configured size threshold.
     */
    full_outputs?: coreLiteralMap;
    /**
     * Optional Workflow closure for a dynamically generated workflow, in the case this node yields a dynamic workflow we return its structure here.
     */
    dynamic_workflow?: flyteidladminDynamicWorkflowNodeMetadata;
    flyte_urls?: adminFlyteURLs;
};

