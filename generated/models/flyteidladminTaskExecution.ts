/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { adminTaskExecutionClosure } from './adminTaskExecutionClosure';
import type { coreTaskExecutionIdentifier } from './coreTaskExecutionIdentifier';

/**
 * Encapsulates all details for a single task execution entity.
 * A task execution represents an instantiated task, including all inputs and additional
 * metadata as well as computed results included state, outputs, and duration-based attributes.
 */
export type flyteidladminTaskExecution = {
    /**
     * Unique identifier for the task execution.
     */
    id?: coreTaskExecutionIdentifier;
    /**
     * Path to remote data store where input blob is stored.
     */
    input_uri?: string;
    /**
     * Task execution details and results.
     */
    closure?: adminTaskExecutionClosure;
    /**
     * Whether this task spawned nodes.
     */
    is_parent?: boolean;
};

