/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { coreExtendedResources } from './coreExtendedResources';
import type { coreResources } from './coreResources';

/**
 * Optional task node overrides that will be applied at task execution time.
 */
export type coreTaskNodeOverrides = {
    /**
     * A customizable interface to convey resources requested for a task container.
     */
    resources?: coreResources;
    /**
     * Overrides for all non-standard resources, not captured by
     * v1.ResourceRequirements, to allocate to a task.
     */
    extended_resources?: coreExtendedResources;
};

