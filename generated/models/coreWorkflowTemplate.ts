/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { coreBinding } from './coreBinding';
import type { coreIdentifier } from './coreIdentifier';
import type { coreNode } from './coreNode';
import type { coreTypedInterface } from './coreTypedInterface';
import type { coreWorkflowMetadata } from './coreWorkflowMetadata';
import type { coreWorkflowMetadataDefaults } from './coreWorkflowMetadataDefaults';

/**
 * Flyte Workflow Structure that encapsulates task, branch and subworkflow nodes to form a statically analyzable,
 * directed acyclic graph.
 */
export type coreWorkflowTemplate = {
    /**
     * A globally unique identifier for the workflow.
     */
    id?: coreIdentifier;
    /**
     * Extra metadata about the workflow.
     */
    metadata?: coreWorkflowMetadata;
    /**
     * Defines a strongly typed interface for the Workflow. This can include some optional parameters.
     */
    interface?: coreTypedInterface;
    /**
     * A list of nodes. In addition, 'globals' is a special reserved node id that can be used to consume workflow inputs.
     */
    nodes?: Array<coreNode>;
    /**
     * A list of output bindings that specify how to construct workflow outputs. Bindings can pull node outputs or
     * specify literals. All workflow outputs specified in the interface field must be bound in order for the workflow
     * to be validated. A workflow has an implicit dependency on all of its nodes to execute successfully in order to
     * bind final outputs.
     * Most of these outputs will be Binding's with a BindingData of type OutputReference.  That is, your workflow can
     * just have an output of some constant (`Output(5)`), but usually, the workflow will be pulling
     * outputs from the output of a task.
     */
    outputs?: Array<coreBinding>;
    /**
     * +optional A catch-all node. This node is executed whenever the execution engine determines the workflow has failed.
     * The interface of this node must match the Workflow interface with an additional input named 'error' of type
     * pb.lyft.flyte.core.Error.
     */
    failure_node?: coreNode;
    metadata_defaults?: coreWorkflowMetadataDefaults;
};

