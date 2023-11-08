/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Indicates a resource type within Flyte.
 *
 * - DATASET: A dataset represents an entity modeled in Flyte DataCatalog. A Dataset is also a versioned entity and can be a compilation of multiple individual objects.
 * Eventually all Catalog objects should be modeled similar to Flyte Objects. The Dataset entities makes it possible for the UI  and CLI to act on the objects
 * in a similar manner to other Flyte objects
 */
export enum coreResourceType {
    UNSPECIFIED = 'UNSPECIFIED',
    TASK = 'TASK',
    WORKFLOW = 'WORKFLOW',
    LAUNCH_PLAN = 'LAUNCH_PLAN',
    DATASET = 'DATASET',
}
