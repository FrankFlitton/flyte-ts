/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { coreBindingDataCollection } from './coreBindingDataCollection';
import type { coreBindingDataMap } from './coreBindingDataMap';
import type { coreOutputReference } from './coreOutputReference';
import type { coreScalar } from './coreScalar';
import type { coreUnionInfo } from './coreUnionInfo';

/**
 * Specifies either a simple value or a reference to another output.
 */
export type coreBindingData = {
    /**
     * A simple scalar value.
     */
    scalar?: coreScalar;
    /**
     * A collection of binding data. This allows nesting of binding data to any number
     * of levels.
     */
    collection?: coreBindingDataCollection;
    /**
     * References an output promised by another node.
     */
    promise?: coreOutputReference;
    /**
     * A map of bindings. The key is always a string.
     */
    map?: coreBindingDataMap;
    union?: coreUnionInfo;
};

