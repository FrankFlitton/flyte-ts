/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { coreDataLoadingConfig } from './coreDataLoadingConfig';
import type { coreK8sObjectMetadata } from './coreK8sObjectMetadata';
import type { protobufStruct } from './protobufStruct';

/**
 * Defines a pod spec and additional pod metadata that is created when a task is executed.
 */
export type coreK8sPod = {
    /**
     * Contains additional metadata for building a kubernetes pod.
     */
    metadata?: coreK8sObjectMetadata;
    pod_spec?: protobufStruct;
    data_config?: coreDataLoadingConfig;
};

