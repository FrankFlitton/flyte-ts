/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ResourcesResourceEntry } from './ResourcesResourceEntry';

/**
 * A customizable interface to convey resources requested for a container. This can be interpreted differently for different
 * container engines.
 */
export type coreResources = {
    /**
     * The desired set of resources requested. ResourceNames must be unique within the list.
     */
    requests?: Array<ResourcesResourceEntry>;
    /**
     * Defines a set of bounds (e.g. min/max) within which the task can reliably run. ResourceNames must be unique
     * within the list.
     */
    limits?: Array<ResourcesResourceEntry>;
};

