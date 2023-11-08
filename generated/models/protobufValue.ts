/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { protobufListValue } from './protobufListValue';
import type { protobufNullValue } from './protobufNullValue';
import type { protobufStruct } from './protobufStruct';

/**
 * `Value` represents a dynamically typed value which can be either
 * null, a number, a string, a boolean, a recursive struct value, or a
 * list of values. A producer of value is expected to set one of that
 * variants, absence of any variant indicates an error.
 *
 * The JSON representation for `Value` is JSON value.
 */
export type protobufValue = {
    /**
     * Represents a null value.
     */
    null_value?: protobufNullValue;
    /**
     * Represents a double value.
     */
    number_value?: number;
    /**
     * Represents a string value.
     */
    string_value?: string;
    /**
     * Represents a boolean value.
     */
    bool_value?: boolean;
    /**
     * Represents a structured value.
     */
    struct_value?: protobufStruct;
    /**
     * Represents a repeated `Value`.
     */
    list_value?: protobufListValue;
};

