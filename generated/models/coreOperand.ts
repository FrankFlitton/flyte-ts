/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { corePrimitive } from './corePrimitive';
import type { coreScalar } from './coreScalar';

/**
 * Defines an operand to a comparison expression.
 */
export type coreOperand = {
    primitive?: corePrimitive;
    var?: string;
    scalar?: coreScalar;
};

