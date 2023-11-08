/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * By default any launch plan regardless of state can be used to launch a workflow execution.
 * However, at most one version of a launch plan
 * (e.g. a NamedEntityIdentifier set of shared project, domain and name values) can be
 * active at a time in regards to *schedules*. That is, at most one schedule in a NamedEntityIdentifier
 * group will be observed and trigger executions at a defined cadence.
 */
export enum adminLaunchPlanState {
    INACTIVE = 'INACTIVE',
    ACTIVE = 'ACTIVE',
}
