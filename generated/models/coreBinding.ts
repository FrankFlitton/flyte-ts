/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { coreBindingData } from './coreBindingData';

/**
 * An input/output binding of a variable to either static value or a node output.
 */
export type coreBinding = {
    /**
     * Variable name must match an input/output variable of the node.
     */
    var?: string;
    /**
     * Data to use to bind this variable.
     */
    binding?: coreBindingData;
};

