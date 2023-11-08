/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { coreLiteralType } from './coreLiteralType';

/**
 * Defines a tagged union type, also known as a variant (and formally as the sum type).
 *
 * A sum type S is defined by a sequence of types (A, B, C, ...), each tagged by a string tag
 * A value of type S is constructed from a value of any of the variant types. The specific choice of type is recorded by
 * storing the varaint's tag with the literal value and can be examined in runtime.
 *
 * Type S is typically written as
 * S := Apple A | Banana B | Cantaloupe C | ...
 *
 * Notably, a nullable (optional) type is a sum type between some type X and the singleton type representing a null-value:
 * Optional X := X | Null
 *
 * See also: https://en.wikipedia.org/wiki/Tagged_union
 */
export type coreUnionType = {
    /**
     * Predefined set of variants in union.
     */
    variants?: Array<coreLiteralType>;
};

