/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { coreLiteral } from './coreLiteral';
import type { coreVariable } from './coreVariable';

/**
 * A parameter is used as input to a launch plan and has
 * the special ability to have a default value or mark itself as required.
 */
export type coreParameter = {
    /**
     * +required Variable. Defines the type of the variable backing this parameter.
     */
    var?: coreVariable;
    /**
     * Defines a default value that has to match the variable type defined.
     */
    default?: coreLiteral;
    /**
     * +optional, is this value required to be filled.
     */
    required?: boolean;
};

