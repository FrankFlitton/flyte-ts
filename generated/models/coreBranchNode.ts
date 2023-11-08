/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { coreIfElseBlock } from './coreIfElseBlock';

/**
 * BranchNode is a special node that alter the flow of the workflow graph. It allows the control flow to branch at
 * runtime based on a series of conditions that get evaluated on various parameters (e.g. inputs, primitives).
 */
export type coreBranchNode = {
    if_else?: coreIfElseBlock;
};

