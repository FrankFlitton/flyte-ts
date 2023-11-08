/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { adminNodeExecutionClosure } from './adminNodeExecutionClosure';
import type { adminNodeExecutionMetaData } from './adminNodeExecutionMetaData';
import type { coreNodeExecutionIdentifier } from './coreNodeExecutionIdentifier';

/**
 * Encapsulates all details for a single node execution entity.
 * A node represents a component in the overall workflow graph. A node launch a task, multiple tasks, an entire nested
 * sub-workflow, or even a separate child-workflow execution.
 * The same task can be called repeatedly in a single workflow but each node is unique.
 */
export type flyteidladminNodeExecution = {
    /**
     * Uniquely identifies an individual node execution.
     */
    id?: coreNodeExecutionIdentifier;
    /**
     * Path to remote data store where input blob is stored.
     */
    input_uri?: string;
    /**
     * Computed results associated with this node execution.
     */
    closure?: adminNodeExecutionClosure;
    metadata?: adminNodeExecutionMetaData;
};

