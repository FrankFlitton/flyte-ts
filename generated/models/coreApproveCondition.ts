/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * ApproveCondition represents a dependency on an external approval. During execution, this will manifest as a boolean
 * signal with the provided signal_id.
 */
export type coreApproveCondition = {
    /**
     * A unique identifier for the requested boolean signal.
     */
    signal_id?: string;
};

