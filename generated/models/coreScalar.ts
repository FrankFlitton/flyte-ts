/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { coreBinary } from './coreBinary';
import type { coreBlob } from './coreBlob';
import type { coreError } from './coreError';
import type { corePrimitive } from './corePrimitive';
import type { coreSchema } from './coreSchema';
import type { coreStructuredDataset } from './coreStructuredDataset';
import type { coreUnion } from './coreUnion';
import type { coreVoid } from './coreVoid';
import type { protobufStruct } from './protobufStruct';

export type coreScalar = {
    primitive?: corePrimitive;
    blob?: coreBlob;
    binary?: coreBinary;
    schema?: coreSchema;
    none_type?: coreVoid;
    error?: coreError;
    generic?: protobufStruct;
    structured_dataset?: coreStructuredDataset;
    union?: coreUnion;
};

