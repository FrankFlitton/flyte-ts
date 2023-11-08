/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { adminMatchingAttributes } from './adminMatchingAttributes';

/**
 * Represents a custom set of attributes applied for either a domain; a domain and project; or
 * domain, project and workflow name.
 * These are used to override system level defaults for kubernetes cluster resource management,
 * default execution values, and more all across different levels of specificity.
 */
export type adminMatchableAttributesConfiguration = {
    attributes?: adminMatchingAttributes;
    domain?: string;
    project?: string;
    workflow?: string;
    launch_plan?: string;
};

