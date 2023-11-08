/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { coreQualityOfService } from './coreQualityOfService';
import type { WorkflowMetadataOnFailurePolicy } from './WorkflowMetadataOnFailurePolicy';

/**
 * This is workflow layer metadata. These settings are only applicable to the workflow as a whole, and do not
 * percolate down to child entities (like tasks) launched by the workflow.
 */
export type coreWorkflowMetadata = {
    /**
     * Indicates the runtime priority of workflow executions.
     */
    quality_of_service?: coreQualityOfService;
    /**
     * Defines how the system should behave when a failure is detected in the workflow execution.
     */
    on_failure?: WorkflowMetadataOnFailurePolicy;
    tags?: Record<string, string>;
};

