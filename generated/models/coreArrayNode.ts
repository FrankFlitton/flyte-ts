/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { coreNode } from './coreNode';

/**
 * ArrayNode is a Flyte node type that simplifies the execution of a sub-node over a list of input
 * values. An ArrayNode can be executed with configurable parallelism (separate from the parent
 * workflow) and can be configured to succeed when a certain number of sub-nodes succeed.
 */
export type coreArrayNode = {
    /**
     * node is the sub-node that will be executed for each element in the array.
     */
    node?: coreNode;
    /**
     * parallelism defines the minimum number of instances to bring up concurrently at any given
     * point. Note that this is an optimistic restriction and that, due to network partitioning or
     * other failures, the actual number of currently running instances might be more. This has to
     * be a positive number if assigned. Default value is size.
     */
    parallelism?: number;
    /**
     * min_successes is an absolute number of the minimum number of successful completions of
     * sub-nodes. As soon as this criteria is met, the ArrayNode will be marked as successful
     * and outputs will be computed. This has to be a non-negative number if assigned. Default
     * value is size (if specified).
     */
    min_successes?: number;
    /**
     * If the array job size is not known beforehand, the min_success_ratio can instead be used
     * to determine when an ArrayNode can be marked successful.
     */
    min_success_ratio?: number;
};

