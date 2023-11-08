/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type adminNodeExecutionMetaData = {
    /**
     * Node executions are grouped depending on retries of the parent
     * Retry group is unique within the context of a parent node.
     */
    retry_group?: string;
    /**
     * Boolean flag indicating if the node has child nodes under it
     * This can be true when a node contains a dynamic workflow which then produces
     * child nodes.
     */
    is_parent_node?: boolean;
    spec_node_id?: string;
    /**
     * Boolean flag indicating if the node has contains a dynamic workflow which then produces child nodes.
     * This is to distinguish between subworkflows and dynamic workflows which can both have is_parent_node as true.
     */
    is_dynamic?: boolean;
    /**
     * Boolean flag indicating if the node is an array node. This is intended to uniquely identify
     * array nodes from other nodes which can have is_parent_node as true.
     */
    is_array?: boolean;
};

