/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { coreComparisonExpression } from './coreComparisonExpression';
import type { coreConjunctionExpression } from './coreConjunctionExpression';

/**
 * Defines a boolean expression tree. It can be a simple or a conjunction expression.
 * Multiple expressions can be combined using a conjunction or a disjunction to result in a final boolean result.
 */
export type coreBooleanExpression = {
    conjunction?: coreConjunctionExpression;
    comparison?: coreComparisonExpression;
};

