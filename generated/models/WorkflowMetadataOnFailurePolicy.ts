/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * - FAIL_IMMEDIATELY: FAIL_IMMEDIATELY instructs the system to fail as soon as a node fails in the workflow. It'll automatically
 * abort all currently running nodes and clean up resources before finally marking the workflow executions as
 * failed.
 * - FAIL_AFTER_EXECUTABLE_NODES_COMPLETE: FAIL_AFTER_EXECUTABLE_NODES_COMPLETE instructs the system to make as much progress as it can. The system will
 * not alter the dependencies of the execution graph so any node that depend on the failed node will not be run.
 * Other nodes that will be executed to completion before cleaning up resources and marking the workflow
 * execution as failed.
 */
export enum WorkflowMetadataOnFailurePolicy {
    FAIL_IMMEDIATELY = 'FAIL_IMMEDIATELY',
    FAIL_AFTER_EXECUTABLE_NODES_COMPLETE = 'FAIL_AFTER_EXECUTABLE_NODES_COMPLETE',
}
