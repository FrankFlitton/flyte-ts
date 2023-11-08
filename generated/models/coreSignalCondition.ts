/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { coreLiteralType } from './coreLiteralType';

/**
 * SignalCondition represents a dependency on an signal.
 */
export type coreSignalCondition = {
    /**
     * A unique identifier for the requested signal.
     */
    signal_id?: string;
    /**
     * A type denoting the required value type for this signal.
     */
    type?: coreLiteralType;
    /**
     * The variable name for the signal value in this nodes outputs.
     */
    output_variable_name?: string;
};

