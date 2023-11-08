/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * The state of the project is used to control its visibility in the UI and validity.
 *
 * - ACTIVE: By default, all projects are considered active.
 * - ARCHIVED: Archived projects are no longer visible in the UI and no longer valid.
 * - SYSTEM_GENERATED: System generated projects that aren't explicitly created or managed by a user.
 */
export enum ProjectProjectState {
    ACTIVE = 'ACTIVE',
    ARCHIVED = 'ARCHIVED',
    SYSTEM_GENERATED = 'SYSTEM_GENERATED',
}
