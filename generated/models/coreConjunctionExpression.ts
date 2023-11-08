/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ConjunctionExpressionLogicalOperator } from './ConjunctionExpressionLogicalOperator';
import type { coreBooleanExpression } from './coreBooleanExpression';

/**
 * Defines a conjunction expression of two boolean expressions.
 */
export type coreConjunctionExpression = {
    operator?: ConjunctionExpressionLogicalOperator;
    left_expression?: coreBooleanExpression;
    right_expression?: coreBooleanExpression;
};

