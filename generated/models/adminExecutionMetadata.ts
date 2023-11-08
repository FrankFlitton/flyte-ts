/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { adminSystemMetadata } from './adminSystemMetadata';
import type { coreNodeExecutionIdentifier } from './coreNodeExecutionIdentifier';
import type { coreWorkflowExecutionIdentifier } from './coreWorkflowExecutionIdentifier';
import type { ExecutionMetadataExecutionMode } from './ExecutionMetadataExecutionMode';

/**
 * Represents attributes about an execution which are not required to launch the execution but are useful to record.
 * These attributes are assigned at launch time and do not change.
 */
export type adminExecutionMetadata = {
    mode?: ExecutionMetadataExecutionMode;
    /**
     * Identifier of the entity that triggered this execution.
     * For systems using back-end authentication any value set here will be discarded in favor of the
     * authenticated user context.
     */
    principal?: string;
    /**
     * Indicates the nestedness of this execution.
     * If a user launches a workflow execution, the default nesting is 0.
     * If this execution further launches a workflow (child workflow), the nesting level is incremented by 0 => 1
     * Generally, if workflow at nesting level k launches a workflow then the child workflow will have
     * nesting = k + 1.
     */
    nesting?: number;
    /**
     * For scheduled executions, the requested time for execution for this specific schedule invocation.
     */
    scheduled_at?: string;
    parent_node_execution?: coreNodeExecutionIdentifier;
    /**
     * Optional, a reference workflow execution related to this execution.
     * In the case of a relaunch, this references the original workflow execution.
     */
    reference_execution?: coreWorkflowExecutionIdentifier;
    /**
     * Optional, platform-specific metadata about the execution.
     * In this the future this may be gated behind an ACL or some sort of authorization.
     */
    system_metadata?: adminSystemMetadata;
};

