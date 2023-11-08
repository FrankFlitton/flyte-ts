/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { adminDomain } from './adminDomain';
import type { adminLabels } from './adminLabels';
import type { ProjectProjectState } from './ProjectProjectState';

/**
 * Top-level namespace used to classify different entities like workflows and executions.
 */
export type adminProject = {
    /**
     * Globally unique project name.
     */
    id?: string;
    /**
     * Display name.
     */
    name?: string;
    domains?: Array<adminDomain>;
    description?: string;
    /**
     * Leverage Labels from flyteidl.admin.common.proto to
     * tag projects with ownership information.
     */
    labels?: adminLabels;
    state?: ProjectProjectState;
};

