/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { coreIdentifier } from './coreIdentifier';

/**
 * Refers to a the workflow the node is to execute.
 */
export type coreWorkflowNode = {
    /**
     * A globally unique identifier for the launch plan.
     */
    launchplan_ref?: coreIdentifier;
    sub_workflow_ref?: coreIdentifier;
};

