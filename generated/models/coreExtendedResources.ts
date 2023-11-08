/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { coreGPUAccelerator } from './coreGPUAccelerator';

/**
 * Encapsulates all non-standard resources, not captured by v1.ResourceRequirements, to
 * allocate to a task.
 */
export type coreExtendedResources = {
    /**
     * GPU accelerator to select for task. Contains information about device type, and
     * for multi-instance GPUs, the partition size to use.
     */
    gpu_accelerator?: coreGPUAccelerator;
};

