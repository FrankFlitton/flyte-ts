/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RuntimeMetadataRuntimeType } from './RuntimeMetadataRuntimeType';

/**
 * Runtime information. This is loosely defined to allow for extensibility.
 */
export type coreRuntimeMetadata = {
    /**
     * Type of runtime.
     */
    type?: RuntimeMetadataRuntimeType;
    /**
     * Version of the runtime. All versions should be backward compatible. However, certain cases call for version
     * checks to ensure tighter validation or setting expectations.
     */
    version?: string;
    /**
     * +optional It can be used to provide extra information about the runtime (e.g. python, golang... etc.).
     */
    flavor?: string;
};

