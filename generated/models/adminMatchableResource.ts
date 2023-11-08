/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Defines a resource that can be configured by customizable Project-, ProjectDomain- or WorkflowAttributes
 * based on matching tags.
 *
 * - TASK_RESOURCE: Applies to customizable task resource requests and limits.
 * - CLUSTER_RESOURCE: Applies to configuring templated kubernetes cluster resources.
 * - EXECUTION_QUEUE: Configures task and dynamic task execution queue assignment.
 * - EXECUTION_CLUSTER_LABEL: Configures the K8s cluster label to be used for execution to be run
 * - QUALITY_OF_SERVICE_SPECIFICATION: Configures default quality of service when undefined in an execution spec.
 * - PLUGIN_OVERRIDE: Selects configurable plugin implementation behavior for a given task type.
 * - WORKFLOW_EXECUTION_CONFIG: Adds defaults for customizable workflow-execution specifications and overrides.
 * - CLUSTER_ASSIGNMENT: Controls how to select an available cluster on which this execution should run.
 */
export enum adminMatchableResource {
    TASK_RESOURCE = 'TASK_RESOURCE',
    CLUSTER_RESOURCE = 'CLUSTER_RESOURCE',
    EXECUTION_QUEUE = 'EXECUTION_QUEUE',
    EXECUTION_CLUSTER_LABEL = 'EXECUTION_CLUSTER_LABEL',
    QUALITY_OF_SERVICE_SPECIFICATION = 'QUALITY_OF_SERVICE_SPECIFICATION',
    PLUGIN_OVERRIDE = 'PLUGIN_OVERRIDE',
    WORKFLOW_EXECUTION_CONFIG = 'WORKFLOW_EXECUTION_CONFIG',
    CLUSTER_ASSIGNMENT = 'CLUSTER_ASSIGNMENT',
}
