/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { coreError } from './coreError';
import type { coreIfBlock } from './coreIfBlock';
import type { coreNode } from './coreNode';

/**
 * Defines a series of if/else blocks. The first branch whose condition evaluates to true is the one to execute.
 * If no conditions were satisfied, the else_node or the error will execute.
 */
export type coreIfElseBlock = {
    /**
     * +required. First condition to evaluate.
     */
    case?: coreIfBlock;
    /**
     * +optional. Additional branches to evaluate.
     */
    other?: Array<coreIfBlock>;
    /**
     * The node to execute in case none of the branches were taken.
     */
    else_node?: coreNode;
    /**
     * An error to throw in case none of the branches were taken.
     */
    error?: coreError;
};

