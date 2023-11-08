/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { adminAnnotations } from './adminAnnotations';
import type { adminEnvs } from './adminEnvs';
import type { adminLabels } from './adminLabels';
import type { adminRawOutputDataConfig } from './adminRawOutputDataConfig';
import type { coreSecurityContext } from './coreSecurityContext';

/**
 * Adds defaults for customizable workflow-execution specifications and overrides.
 */
export type adminWorkflowExecutionConfig = {
    /**
     * Can be used to control the number of parallel nodes to run within the workflow. This is useful to achieve fairness.
     */
    max_parallelism?: number;
    /**
     * Indicates security context permissions for executions triggered with this matchable attribute.
     */
    security_context?: coreSecurityContext;
    /**
     * Encapsulates user settings pertaining to offloaded data (i.e. Blobs, Schema, query data, etc.).
     */
    raw_output_data_config?: adminRawOutputDataConfig;
    /**
     * Custom labels to be applied to a triggered execution resource.
     */
    labels?: adminLabels;
    /**
     * Custom annotations to be applied to a triggered execution resource.
     */
    annotations?: adminAnnotations;
    /**
     * Allows for the interruptible flag of a workflow to be overwritten for a single execution.
     * Omitting this field uses the workflow's value as a default.
     * As we need to distinguish between the field not being provided and its default value false, we have to use a wrapper
     * around the bool field.
     */
    interruptible?: boolean;
    /**
     * Allows for all cached values of a workflow and its tasks to be overwritten for a single execution.
     * If enabled, all calculations are performed even if cached results would be available, overwriting the stored
     * data once execution finishes successfully.
     */
    overwrite_cache?: boolean;
    /**
     * Environment variables to be set for the execution.
     */
    envs?: adminEnvs;
};

