/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { coreBlobMetadata } from './coreBlobMetadata';

/**
 * Refers to an offloaded set of files. It encapsulates the type of the store and a unique uri for where the data is.
 * There are no restrictions on how the uri is formatted since it will depend on how to interact with the store.
 */
export type coreBlob = {
    metadata?: coreBlobMetadata;
    uri?: string;
};

