/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { adminNamedEntityIdentifier } from './adminNamedEntityIdentifier';
import type { adminNamedEntityMetadata } from './adminNamedEntityMetadata';
import type { coreResourceType } from './coreResourceType';

/**
 * Encapsulates information common to a NamedEntity, a Flyte resource such as a task,
 * workflow or launch plan. A NamedEntity is exclusively identified by its resource type
 * and identifier.
 */
export type adminNamedEntity = {
    /**
     * Resource type of the named entity. One of Task, Workflow or LaunchPlan.
     */
    resource_type?: coreResourceType;
    id?: adminNamedEntityIdentifier;
    /**
     * Additional metadata around a named entity.
     */
    metadata?: adminNamedEntityMetadata;
};

