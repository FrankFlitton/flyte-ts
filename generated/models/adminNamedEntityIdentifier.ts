/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Encapsulation of fields that identifies a Flyte resource.
 * A Flyte resource can be a task, workflow or launch plan.
 * A resource can internally have multiple versions and is uniquely identified
 * by project, domain, and name.
 */
export type adminNamedEntityIdentifier = {
    /**
     * Name of the project the resource belongs to.
     */
    project?: string;
    /**
     * Name of the domain the resource belongs to.
     * A domain can be considered as a subset within a specific project.
     */
    domain?: string;
    name?: string;
};

