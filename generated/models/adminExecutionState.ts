/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * The state of the execution is used to control its visibility in the UI/CLI.
 *
 * - EXECUTION_ACTIVE: By default, all executions are considered active.
 * - EXECUTION_ARCHIVED: Archived executions are no longer visible in the UI.
 */
export enum adminExecutionState {
    EXECUTION_ACTIVE = 'EXECUTION_ACTIVE',
    EXECUTION_ARCHIVED = 'EXECUTION_ARCHIVED',
}
