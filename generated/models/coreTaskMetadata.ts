/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { coreRetryStrategy } from './coreRetryStrategy';
import type { coreRuntimeMetadata } from './coreRuntimeMetadata';

export type coreTaskMetadata = {
    /**
     * Indicates whether the system should attempt to lookup this task's output to avoid duplication of work.
     */
    discoverable?: boolean;
    /**
     * Runtime information about the task.
     */
    runtime?: coreRuntimeMetadata;
    /**
     * The overall timeout of a task including user-triggered retries.
     */
    timeout?: string;
    /**
     * Number of retries per task.
     */
    retries?: coreRetryStrategy;
    /**
     * Indicates a logical version to apply to this task for the purpose of discovery.
     */
    discovery_version?: string;
    /**
     * If set, this indicates that this task is deprecated.  This will enable owners of tasks to notify consumers
     * of the ending of support for a given task.
     */
    deprecated_error_message?: string;
    interruptible?: boolean;
    cache_serializable?: boolean;
    /**
     * Indicates whether the task will generate a Deck URI when it finishes executing.
     */
    generates_deck?: boolean;
    tags?: Record<string, string>;
    /**
     * pod_template_name is the unique name of a PodTemplate k8s resource to be used as the base configuration if this
     * task creates a k8s Pod. If this value is set, the specified PodTemplate will be used instead of, but applied
     * identically as, the default PodTemplate configured in FlytePropeller.
     */
    pod_template_name?: string;
};

