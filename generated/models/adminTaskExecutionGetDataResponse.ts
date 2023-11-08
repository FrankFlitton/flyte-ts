/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { adminFlyteURLs } from './adminFlyteURLs';
import type { adminUrlBlob } from './adminUrlBlob';
import type { coreLiteralMap } from './coreLiteralMap';

/**
 * Response structure for TaskExecutionGetDataRequest which contains inputs and outputs for a task execution.
 */
export type adminTaskExecutionGetDataResponse = {
    /**
     * Signed url to fetch a core.LiteralMap of task execution inputs.
     * Deprecated: Please use full_inputs instead.
     */
    inputs?: adminUrlBlob;
    /**
     * Signed url to fetch a core.LiteralMap of task execution outputs.
     * Deprecated: Please use full_outputs instead.
     */
    outputs?: adminUrlBlob;
    /**
     * Full_inputs will only be populated if they are under a configured size threshold.
     */
    full_inputs?: coreLiteralMap;
    /**
     * Full_outputs will only be populated if they are under a configured size threshold.
     */
    full_outputs?: coreLiteralMap;
    flyte_urls?: adminFlyteURLs;
};

