/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CatalogReservationStatus } from './CatalogReservationStatus';
import type { coreCatalogCacheStatus } from './coreCatalogCacheStatus';
import type { coreCatalogMetadata } from './coreCatalogMetadata';
import type { flyteidleventDynamicWorkflowNodeMetadata } from './flyteidleventDynamicWorkflowNodeMetadata';

export type flyteidleventTaskNodeMetadata = {
    /**
     * Captures the status of caching for this execution.
     */
    cache_status?: coreCatalogCacheStatus;
    catalog_key?: coreCatalogMetadata;
    /**
     * Captures the status of cache reservations for this execution.
     */
    reservation_status?: CatalogReservationStatus;
    checkpoint_uri?: string;
    /**
     * In the case this task launched a dynamic workflow we capture its structure here.
     */
    dynamic_workflow?: flyteidleventDynamicWorkflowNodeMetadata;
};

