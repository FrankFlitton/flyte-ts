/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { adminDescription } from './adminDescription';
import type { adminSourceCode } from './adminSourceCode';
import type { coreIdentifier } from './coreIdentifier';

/**
 * DescriptionEntity contains detailed description for the task/workflow.
 * Documentation could provide insight into the algorithms, business use case, etc.
 */
export type adminDescriptionEntity = {
    /**
     * id represents the unique identifier of the description entity.
     */
    id?: coreIdentifier;
    /**
     * One-liner overview of the entity.
     */
    short_description?: string;
    /**
     * Full user description with formatting preserved.
     */
    long_description?: adminDescription;
    /**
     * Optional link to source code used to define this entity.
     */
    source_code?: adminSourceCode;
    /**
     * User-specified tags. These are arbitrary and can be used for searching
     * filtering and discovering tasks.
     */
    tags?: Array<string>;
};

