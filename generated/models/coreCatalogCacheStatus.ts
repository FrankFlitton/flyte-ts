/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * - CACHE_DISABLED: Used to indicate that caching was disabled
 * - CACHE_MISS: Used to indicate that the cache lookup resulted in no matches
 * - CACHE_HIT: used to indicate that the associated artifact was a result of a previous execution
 * - CACHE_POPULATED: used to indicate that the resultant artifact was added to the cache
 * - CACHE_LOOKUP_FAILURE: Used to indicate that cache lookup failed because of an error
 * - CACHE_PUT_FAILURE: Used to indicate that cache lookup failed because of an error
 * - CACHE_SKIPPED: Used to indicate the cache lookup was skipped
 */
export enum coreCatalogCacheStatus {
    CACHE_DISABLED = 'CACHE_DISABLED',
    CACHE_MISS = 'CACHE_MISS',
    CACHE_HIT = 'CACHE_HIT',
    CACHE_POPULATED = 'CACHE_POPULATED',
    CACHE_LOOKUP_FAILURE = 'CACHE_LOOKUP_FAILURE',
    CACHE_PUT_FAILURE = 'CACHE_PUT_FAILURE',
    CACHE_SKIPPED = 'CACHE_SKIPPED',
}
