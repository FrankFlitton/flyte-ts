/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { coreCatalogCacheStatus } from './coreCatalogCacheStatus';
import type { coreTaskExecutionPhase } from './coreTaskExecutionPhase';
import type { coreTaskLog } from './coreTaskLog';

/**
 * This message contains metadata about external resources produced or used by a specific task execution.
 */
export type eventExternalResourceInfo = {
    /**
     * Identifier for an external resource created by this task execution, for example Qubole query ID or presto query ids.
     */
    external_id?: string;
    /**
     * A unique index for the external resource with respect to all external resources for this task. Although the
     * identifier may change between task reporting events or retries, this will remain the same to enable aggregating
     * information from multiple reports.
     */
    index?: number;
    retry_attempt?: number;
    phase?: coreTaskExecutionPhase;
    /**
     * Captures the status of caching for this external resource execution.
     */
    cache_status?: coreCatalogCacheStatus;
    logs?: Array<coreTaskLog>;
};

