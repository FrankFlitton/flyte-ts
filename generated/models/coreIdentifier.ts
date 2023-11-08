/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { coreResourceType } from './coreResourceType';

/**
 * Encapsulation of fields that uniquely identifies a Flyte resource.
 */
export type coreIdentifier = {
    /**
     * Identifies the specific type of resource that this identifier corresponds to.
     */
    resource_type?: coreResourceType;
    /**
     * Name of the project the resource belongs to.
     */
    project?: string;
    /**
     * Name of the domain the resource belongs to.
     * A domain can be considered as a subset within a specific project.
     */
    domain?: string;
    /**
     * User provided value for the resource.
     */
    name?: string;
    /**
     * Specific version of the resource.
     */
    version?: string;
};

