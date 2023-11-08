/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { adminWorkflowClosure } from './adminWorkflowClosure';
import type { coreIdentifier } from './coreIdentifier';

/**
 * Represents the workflow structure stored in the Admin
 * A workflow is created by ordering tasks and associating outputs to inputs
 * in order to produce a directed-acyclic execution graph.
 */
export type adminWorkflow = {
    /**
     * id represents the unique identifier of the workflow.
     */
    id?: coreIdentifier;
    /**
     * closure encapsulates all the fields that maps to a compiled version of the workflow.
     */
    closure?: adminWorkflowClosure;
    /**
     * One-liner overview of the entity.
     */
    short_description?: string;
};

