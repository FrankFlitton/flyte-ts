/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * The difference between these settings and the WorkflowMetadata ones is that these are meant to be passed down to
 * a workflow's underlying entities (like tasks). For instance, 'interruptible' has no meaning at the workflow layer, it
 * is only relevant when a task executes. The settings here are the defaults that are passed to all nodes
 * unless explicitly overridden at the node layer.
 * If you are adding a setting that applies to both the Workflow itself, and everything underneath it, it should be
 * added to both this object and the WorkflowMetadata object above.
 */
export type coreWorkflowMetadataDefaults = {
    /**
     * Whether child nodes of the workflow are interruptible.
     */
    interruptible?: boolean;
};

