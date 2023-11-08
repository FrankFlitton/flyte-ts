/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * The status of the named entity is used to control its visibility in the UI.
 *
 * - NAMED_ENTITY_ACTIVE: By default, all named entities are considered active and under development.
 * - NAMED_ENTITY_ARCHIVED: Archived named entities are no longer visible in the UI.
 * - SYSTEM_GENERATED: System generated entities that aren't explicitly created or managed by a user.
 */
export enum adminNamedEntityState {
    NAMED_ENTITY_ACTIVE = 'NAMED_ENTITY_ACTIVE',
    NAMED_ENTITY_ARCHIVED = 'NAMED_ENTITY_ARCHIVED',
    SYSTEM_GENERATED = 'SYSTEM_GENERATED',
}
