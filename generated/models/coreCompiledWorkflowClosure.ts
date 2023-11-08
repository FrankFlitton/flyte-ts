/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { coreCompiledTask } from './coreCompiledTask';
import type { coreCompiledWorkflow } from './coreCompiledWorkflow';

/**
 * A Compiled Workflow Closure contains all the information required to start a new execution, or to visualize a workflow
 * and its details. The CompiledWorkflowClosure should always contain a primary workflow, that is the main workflow that
 * will being the execution. All subworkflows are denormalized. WorkflowNodes refer to the workflow identifiers of
 * compiled subworkflows.
 */
export type coreCompiledWorkflowClosure = {
    primary?: coreCompiledWorkflow;
    sub_workflows?: Array<coreCompiledWorkflow>;
    tasks?: Array<coreCompiledTask>;
};

