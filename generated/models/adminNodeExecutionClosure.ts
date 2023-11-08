/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { coreExecutionError } from './coreExecutionError';
import type { coreLiteralMap } from './coreLiteralMap';
import type { coreNodeExecutionPhase } from './coreNodeExecutionPhase';
import type { flyteidladminTaskNodeMetadata } from './flyteidladminTaskNodeMetadata';
import type { flyteidladminWorkflowNodeMetadata } from './flyteidladminWorkflowNodeMetadata';

/**
 * Container for node execution details and results.
 */
export type adminNodeExecutionClosure = {
    /**
     * Links to a remotely stored, serialized core.LiteralMap of node execution outputs.
     * DEPRECATED. Use GetNodeExecutionData to fetch output data instead.
     */
    output_uri?: string;
    error?: coreExecutionError;
    /**
     * Raw output data produced by this node execution.
     * DEPRECATED. Use GetNodeExecutionData to fetch output data instead.
     */
    output_data?: coreLiteralMap;
    /**
     * The last recorded phase for this node execution.
     */
    phase?: coreNodeExecutionPhase;
    /**
     * Time at which the node execution began running.
     */
    started_at?: string;
    /**
     * The amount of time the node execution spent running.
     */
    duration?: string;
    /**
     * Time at which the node execution was created.
     */
    created_at?: string;
    /**
     * Time at which the node execution was last updated.
     */
    updated_at?: string;
    workflow_node_metadata?: flyteidladminWorkflowNodeMetadata;
    task_node_metadata?: flyteidladminTaskNodeMetadata;
    deck_uri?: string;
    /**
     * dynamic_job_spec_uri is the location of the DynamicJobSpec proto message for a DynamicWorkflow. This is required
     * to correctly recover partially completed executions where the subworkflow has already been compiled.
     */
    dynamic_job_spec_uri?: string;
};

