/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { protobufStruct } from './protobufStruct';

/**
 * TypeAnnotation encapsulates registration time information about a type. This can be used for various control-plane operations. TypeAnnotation will not be available at runtime when a task runs.
 */
export type coreTypeAnnotation = {
    /**
     * A arbitrary JSON payload to describe a type.
     */
    annotations?: protobufStruct;
};

