/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { coreBlobType } from './coreBlobType';
import type { coreEnumType } from './coreEnumType';
import type { coreSchemaType } from './coreSchemaType';
import type { coreSimpleType } from './coreSimpleType';
import type { coreStructuredDatasetType } from './coreStructuredDatasetType';
import type { coreTypeAnnotation } from './coreTypeAnnotation';
import type { coreTypeStructure } from './coreTypeStructure';
import type { coreUnionType } from './coreUnionType';
import type { protobufStruct } from './protobufStruct';

/**
 * Defines a strong type to allow type checking between interfaces.
 */
export type coreLiteralType = {
    /**
     * A simple type that can be compared one-to-one with another.
     */
    simple?: coreSimpleType;
    /**
     * A complex type that requires matching of inner fields.
     */
    schema?: coreSchemaType;
    /**
     * Defines the type of the value of a collection. Only homogeneous collections are allowed.
     */
    collection_type?: coreLiteralType;
    /**
     * Defines the type of the value of a map type. The type of the key is always a string.
     */
    map_value_type?: coreLiteralType;
    /**
     * A blob might have specialized implementation details depending on associated metadata.
     */
    blob?: coreBlobType;
    /**
     * Defines an enum with pre-defined string values.
     */
    enum_type?: coreEnumType;
    structured_dataset_type?: coreStructuredDatasetType;
    /**
     * Defines an union type with pre-defined LiteralTypes.
     */
    union_type?: coreUnionType;
    /**
     * This field contains type metadata that is descriptive of the type, but is NOT considered in type-checking.  This might be used by
     * consumers to identify special behavior or display extended information for the type.
     */
    metadata?: protobufStruct;
    /**
     * This field contains arbitrary data that might have special semantic
     * meaning for the client but does not effect internal flyte behavior.
     */
    annotation?: coreTypeAnnotation;
    /**
     * Hints to improve type matching.
     */
    structure?: coreTypeStructure;
};

