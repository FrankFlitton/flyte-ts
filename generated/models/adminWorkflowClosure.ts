/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { coreCompiledWorkflowClosure } from './coreCompiledWorkflowClosure';

/**
 * A container holding the compiled workflow produced from the WorkflowSpec and additional metadata.
 */
export type adminWorkflowClosure = {
    /**
     * Represents the compiled representation of the workflow from the specification provided.
     */
    compiled_workflow?: coreCompiledWorkflowClosure;
    /**
     * Time at which the workflow was created.
     */
    created_at?: string;
};

