/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { adminMatchingAttributes } from './adminMatchingAttributes';

export type adminWorkflowAttributes = {
    /**
     * Unique project id for which this set of attributes will be applied.
     */
    project?: string;
    /**
     * Unique domain id for which this set of attributes will be applied.
     */
    domain?: string;
    /**
     * Workflow name for which this set of attributes will be applied.
     */
    workflow?: string;
    matching_attributes?: adminMatchingAttributes;
};

