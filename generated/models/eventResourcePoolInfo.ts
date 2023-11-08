/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * This message holds task execution metadata specific to resource allocation used to manage concurrent
 * executions for a project namespace.
 */
export type eventResourcePoolInfo = {
    /**
     * Unique resource ID used to identify this execution when allocating a token.
     */
    allocation_token?: string;
    /**
     * Namespace under which this task execution requested an allocation token.
     */
    namespace?: string;
};

