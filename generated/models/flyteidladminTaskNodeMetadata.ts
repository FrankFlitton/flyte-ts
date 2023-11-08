/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { coreCatalogCacheStatus } from './coreCatalogCacheStatus';
import type { coreCatalogMetadata } from './coreCatalogMetadata';

export type flyteidladminTaskNodeMetadata = {
    /**
     * Captures the status of caching for this execution.
     */
    cache_status?: coreCatalogCacheStatus;
    catalog_key?: coreCatalogMetadata;
    checkpoint_uri?: string;
};

