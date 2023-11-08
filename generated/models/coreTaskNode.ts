/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { coreIdentifier } from './coreIdentifier';
import type { coreTaskNodeOverrides } from './coreTaskNodeOverrides';

/**
 * Refers to the task that the Node is to execute.
 */
export type coreTaskNode = {
    /**
     * A globally unique identifier for the task.
     */
    reference_id?: coreIdentifier;
    /**
     * Optional overrides applied at task execution time.
     */
    overrides?: coreTaskNodeOverrides;
};

