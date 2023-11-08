/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Links a variable to an alias.
 */
export type coreAlias = {
    /**
     * Must match one of the output variable names on a node.
     */
    var?: string;
    /**
     * A workflow-level unique alias that downstream nodes can refer to in their input.
     */
    alias?: string;
};

