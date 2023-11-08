/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { adminNamedEntityIdentifier } from './adminNamedEntityIdentifier';
import type { adminNamedEntityMetadata } from './adminNamedEntityMetadata';
import type { coreResourceType } from './coreResourceType';

/**
 * Request to set the referenced named entity state to the configured value.
 */
export type adminNamedEntityUpdateRequest = {
    resource_type?: coreResourceType;
    id?: adminNamedEntityIdentifier;
    metadata?: adminNamedEntityMetadata;
};

