/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { corePromiseAttribute } from './corePromiseAttribute';

/**
 * A reference to an output produced by a node. The type can be retrieved -and validated- from
 * the underlying interface of the node.
 */
export type coreOutputReference = {
    /**
     * Node id must exist at the graph layer.
     */
    node_id?: string;
    /**
     * Variable name must refer to an output variable for the node.
     */
    var?: string;
    attr_path?: Array<corePromiseAttribute>;
};

