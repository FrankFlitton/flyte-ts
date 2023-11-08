/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { adminAnnotations } from './adminAnnotations';
import type { adminAuthRole } from './adminAuthRole';
import type { adminClusterAssignment } from './adminClusterAssignment';
import type { adminEnvs } from './adminEnvs';
import type { adminExecutionMetadata } from './adminExecutionMetadata';
import type { adminLabels } from './adminLabels';
import type { adminNotificationList } from './adminNotificationList';
import type { adminRawOutputDataConfig } from './adminRawOutputDataConfig';
import type { coreIdentifier } from './coreIdentifier';
import type { coreLiteralMap } from './coreLiteralMap';
import type { coreQualityOfService } from './coreQualityOfService';
import type { coreSecurityContext } from './coreSecurityContext';

/**
 * An ExecutionSpec encompasses all data used to launch this execution. The Spec does not change over the lifetime
 * of an execution as it progresses across phase changes.
 */
export type adminExecutionSpec = {
    launch_plan?: coreIdentifier;
    inputs?: coreLiteralMap;
    metadata?: adminExecutionMetadata;
    /**
     * List of notifications based on Execution status transitions
     * When this list is not empty it is used rather than any notifications defined in the referenced launch plan.
     * When this list is empty, the notifications defined for the launch plan will be applied.
     */
    notifications?: adminNotificationList;
    /**
     * This should be set to true if all notifications are intended to be disabled for this execution.
     */
    disable_all?: boolean;
    /**
     * Labels to apply to the execution resource.
     */
    labels?: adminLabels;
    /**
     * Annotations to apply to the execution resource.
     */
    annotations?: adminAnnotations;
    /**
     * Optional: security context override to apply this execution.
     */
    security_context?: coreSecurityContext;
    /**
     * Optional: auth override to apply this execution.
     */
    auth_role?: adminAuthRole;
    /**
     * Indicates the runtime priority of the execution.
     */
    quality_of_service?: coreQualityOfService;
    /**
     * Controls the maximum number of task nodes that can be run in parallel for the entire workflow.
     * This is useful to achieve fairness. Note: MapTasks are regarded as one unit,
     * and parallelism/concurrency of MapTasks is independent from this.
     */
    max_parallelism?: number;
    raw_output_data_config?: adminRawOutputDataConfig;
    /**
     * Controls how to select an available cluster on which this execution should run.
     */
    cluster_assignment?: adminClusterAssignment;
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
    /**
     * Tags to be set for the execution.
     */
    tags?: Array<string>;
};

