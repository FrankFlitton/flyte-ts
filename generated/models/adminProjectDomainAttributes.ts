/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { adminMatchingAttributes } from './adminMatchingAttributes';

export type adminProjectDomainAttributes = {
    /**
     * Unique project id for which this set of attributes will be applied.
     */
    project?: string;
    /**
     * Unique domain id for which this set of attributes will be applied.
     */
    domain?: string;
    matching_attributes?: adminMatchingAttributes;
};

