/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ComparisonExpressionOperator } from './ComparisonExpressionOperator';
import type { coreOperand } from './coreOperand';

/**
 * Defines a 2-level tree where the root is a comparison operator and Operands are primitives or known variables.
 * Each expression results in a boolean result.
 */
export type coreComparisonExpression = {
    operator?: ComparisonExpressionOperator;
    left_value?: coreOperand;
    right_value?: coreOperand;
};

