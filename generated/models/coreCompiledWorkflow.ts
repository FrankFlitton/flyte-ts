/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { coreConnectionSet } from './coreConnectionSet';
import type { coreWorkflowTemplate } from './coreWorkflowTemplate';

export type coreCompiledWorkflow = {
    template?: coreWorkflowTemplate;
    /**
     * For internal use only! This field is used by the system and must not be filled in. Any values set will be ignored.
     */
    connections?: coreConnectionSet;
};

