/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { coreAlias } from './coreAlias';
import type { coreArrayNode } from './coreArrayNode';
import type { coreBinding } from './coreBinding';
import type { coreBranchNode } from './coreBranchNode';
import type { coreGateNode } from './coreGateNode';
import type { coreNodeMetadata } from './coreNodeMetadata';
import type { coreTaskNode } from './coreTaskNode';
import type { coreWorkflowNode } from './coreWorkflowNode';

/**
 * A Workflow graph Node. One unit of execution in the graph. Each node can be linked to a Task, a Workflow or a branch
 * node.
 */
export type coreNode = {
    /**
     * A workflow-level unique identifier that identifies this node in the workflow. 'inputs' and 'outputs' are reserved
     * node ids that cannot be used by other nodes.
     */
    id?: string;
    /**
     * Extra metadata about the node.
     */
    metadata?: coreNodeMetadata;
    /**
     * Specifies how to bind the underlying interface's inputs. All required inputs specified in the underlying interface
     * must be fulfilled.
     */
    inputs?: Array<coreBinding>;
    /**
     * +optional Specifies execution dependency for this node ensuring it will only get scheduled to run after all its
     * upstream nodes have completed. This node will have an implicit dependency on any node that appears in inputs
     * field.
     */
    upstream_node_ids?: Array<string>;
    /**
     * +optional. A node can define aliases for a subset of its outputs. This is particularly useful if different nodes
     * need to conform to the same interface (e.g. all branches in a branch node). Downstream nodes must refer to this
     * nodes outputs using the alias if one's specified.
     */
    output_aliases?: Array<coreAlias>;
    /**
     * Information about the Task to execute in this node.
     */
    task_node?: coreTaskNode;
    /**
     * Information about the Workflow to execute in this mode.
     */
    workflow_node?: coreWorkflowNode;
    /**
     * Information about the branch node to evaluate in this node.
     */
    branch_node?: coreBranchNode;
    /**
     * Information about the condition to evaluate in this node.
     */
    gate_node?: coreGateNode;
    /**
     * Information about the sub-node executions for each value in the list of this nodes
     * inputs values.
     */
    array_node?: coreArrayNode;
};

