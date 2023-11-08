/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { adminNamedEntityState } from './adminNamedEntityState';

/**
 * Additional metadata around a named entity.
 */
export type adminNamedEntityMetadata = {
    description?: string;
    /**
     * Shared state across all version of the entity
     * At this point in time, only workflow entities can have their state archived.
     */
    state?: adminNamedEntityState;
};

