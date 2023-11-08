/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { coreCompiledWorkflowClosure } from './coreCompiledWorkflowClosure';
import type { coreIdentifier } from './coreIdentifier';

/**
 * For dynamic workflow nodes we capture information about the dynamic workflow definition that gets generated.
 */
export type flyteidladminDynamicWorkflowNodeMetadata = {
    /**
     * id represents the unique identifier of the workflow.
     */
    id?: coreIdentifier;
    /**
     * Represents the compiled representation of the embedded dynamic workflow.
     */
    compiled_workflow?: coreCompiledWorkflowClosure;
    /**
     * dynamic_job_spec_uri is the location of the DynamicJobSpec proto message for this DynamicWorkflow. This is
     * required to correctly recover partially completed executions where the subworkflow has already been compiled.
     */
    dynamic_job_spec_uri?: string;
};

