/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { coreCompiledTask } from './coreCompiledTask';

/**
 * Compute task attributes which include values derived from the TaskSpec, as well as plugin-specific data
 * and task metadata.
 */
export type adminTaskClosure = {
    /**
     * Represents the compiled representation of the task from the specification provided.
     */
    compiled_task?: coreCompiledTask;
    /**
     * Time at which the task was created.
     */
    created_at?: string;
};

