/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Retry strategy associated with an executable unit.
 */
export type coreRetryStrategy = {
    /**
     * Number of retries. Retries will be consumed when the job fails with a recoverable error.
     * The number of retries must be less than or equals to 10.
     */
    retries?: number;
};

