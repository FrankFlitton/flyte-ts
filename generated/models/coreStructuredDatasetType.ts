/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { StructuredDatasetTypeDatasetColumn } from './StructuredDatasetTypeDatasetColumn';

export type coreStructuredDatasetType = {
    /**
     * A list of ordered columns this schema comprises of.
     */
    columns?: Array<StructuredDatasetTypeDatasetColumn>;
    /**
     * This is the storage format, the format of the bits at rest
     * parquet, feather, csv, etc.
     * For two types to be compatible, the format will need to be an exact match.
     */
    format?: string;
    /**
     * This is a string representing the type that the bytes in external_schema_bytes are formatted in.
     * This is an optional field that will not be used for type checking.
     */
    external_schema_type?: string;
    /**
     * The serialized bytes of a third-party schema library like Arrow.
     * This is an optional field that will not be used for type checking.
     */
    external_schema_bytes?: string;
};

