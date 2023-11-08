/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { adminDescriptionEntity } from './adminDescriptionEntity';
import type { coreWorkflowTemplate } from './coreWorkflowTemplate';

/**
 * Represents a structure that encapsulates the specification of the workflow.
 */
export type adminWorkflowSpec = {
    /**
     * Template of the task that encapsulates all the metadata of the workflow.
     */
    template?: coreWorkflowTemplate;
    /**
     * Workflows that are embedded into other workflows need to be passed alongside the parent workflow to the
     * propeller compiler (since the compiler doesn't have any knowledge of other workflows - ie, it doesn't reach out
     * to Admin to see other registered workflows).  In fact, subworkflows do not even need to be registered.
     */
    sub_workflows?: Array<coreWorkflowTemplate>;
    /**
     * Represents the specification for description entity.
     */
    description?: adminDescriptionEntity;
};

