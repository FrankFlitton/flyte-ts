/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { adminAnnotations } from './adminAnnotations';
import type { adminAuth } from './adminAuth';
import type { adminAuthRole } from './adminAuthRole';
import type { adminEnvs } from './adminEnvs';
import type { adminLabels } from './adminLabels';
import type { adminLaunchPlanMetadata } from './adminLaunchPlanMetadata';
import type { adminRawOutputDataConfig } from './adminRawOutputDataConfig';
import type { coreIdentifier } from './coreIdentifier';
import type { coreLiteralMap } from './coreLiteralMap';
import type { coreParameterMap } from './coreParameterMap';
import type { coreQualityOfService } from './coreQualityOfService';
import type { coreSecurityContext } from './coreSecurityContext';

/**
 * User-provided launch plan definition and configuration values.
 */
export type adminLaunchPlanSpec = {
    workflow_id?: coreIdentifier;
    entity_metadata?: adminLaunchPlanMetadata;
    /**
     * Input values to be passed for the execution.
     * These can be overridden when an execution is created with this launch plan.
     */
    default_inputs?: coreParameterMap;
    /**
     * Fixed, non-overridable inputs for the Launch Plan.
     * These can not be overridden when an execution is created with this launch plan.
     */
    fixed_inputs?: coreLiteralMap;
    role?: string;
    /**
     * Custom labels to be applied to the execution resource.
     */
    labels?: adminLabels;
    /**
     * Custom annotations to be applied to the execution resource.
     */
    annotations?: adminAnnotations;
    /**
     * Indicates the permission associated with workflow executions triggered with this launch plan.
     */
    auth?: adminAuth;
    auth_role?: adminAuthRole;
    security_context?: coreSecurityContext;
    /**
     * Indicates the runtime priority of the execution.
     */
    quality_of_service?: coreQualityOfService;
    /**
     * Encapsulates user settings pertaining to offloaded data (i.e. Blobs, Schema, query data, etc.).
     */
    raw_output_data_config?: adminRawOutputDataConfig;
    /**
     * Controls the maximum number of tasknodes that can be run in parallel for the entire workflow.
     * This is useful to achieve fairness. Note: MapTasks are regarded as one unit,
     * and parallelism/concurrency of MapTasks is independent from this.
     */
    max_parallelism?: number;
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

