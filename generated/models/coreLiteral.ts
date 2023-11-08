/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { coreLiteralCollection } from './coreLiteralCollection';
import type { coreLiteralMap } from './coreLiteralMap';
import type { coreScalar } from './coreScalar';

/**
 * A simple value. This supports any level of nesting (e.g. array of array of array of Blobs) as well as simple primitives.
 */
export type coreLiteral = {
    /**
     * A simple value.
     */
    scalar?: coreScalar;
    /**
     * A collection of literals to allow nesting.
     */
    collection?: coreLiteralCollection;
    /**
     * A map of strings to literals.
     */
    map?: coreLiteralMap;
    hash?: string;
};

