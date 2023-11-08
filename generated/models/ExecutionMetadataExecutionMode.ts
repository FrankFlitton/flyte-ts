/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * The method by which this execution was launched.
 *
 * - MANUAL: The default execution mode, MANUAL implies that an execution was launched by an individual.
 * - SCHEDULED: A schedule triggered this execution launch.
 * - SYSTEM: A system process was responsible for launching this execution rather an individual.
 * - RELAUNCH: This execution was launched with identical inputs as a previous execution.
 * - CHILD_WORKFLOW: This execution was triggered by another execution.
 * - RECOVERED: This execution was recovered from another execution.
 */
export enum ExecutionMetadataExecutionMode {
    MANUAL = 'MANUAL',
    SCHEDULED = 'SCHEDULED',
    SYSTEM = 'SYSTEM',
    RELAUNCH = 'RELAUNCH',
    CHILD_WORKFLOW = 'CHILD_WORKFLOW',
    RECOVERED = 'RECOVERED',
}
