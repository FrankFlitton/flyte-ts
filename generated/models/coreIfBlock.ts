/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { coreBooleanExpression } from './coreBooleanExpression';
import type { coreNode } from './coreNode';

/**
 * Defines a condition and the execution unit that should be executed if the condition is satisfied.
 */
export type coreIfBlock = {
    condition?: coreBooleanExpression;
    then_node?: coreNode;
};

