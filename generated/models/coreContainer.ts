/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ContainerArchitecture } from './ContainerArchitecture';
import type { coreContainerPort } from './coreContainerPort';
import type { coreDataLoadingConfig } from './coreDataLoadingConfig';
import type { coreKeyValuePair } from './coreKeyValuePair';
import type { coreResources } from './coreResources';

export type coreContainer = {
    image?: string;
    /**
     * Command to be executed, if not provided, the default entrypoint in the container image will be used.
     */
    command?: Array<string>;
    /**
     * These will default to Flyte given paths. If provided, the system will not append known paths. If the task still
     * needs flyte's inputs and outputs path, add $(FLYTE_INPUT_FILE), $(FLYTE_OUTPUT_FILE) wherever makes sense and the
     * system will populate these before executing the container.
     */
    args?: Array<string>;
    /**
     * Container resources requirement as specified by the container engine.
     */
    resources?: coreResources;
    /**
     * Environment variables will be set as the container is starting up.
     */
    env?: Array<coreKeyValuePair>;
    /**
     * Allows extra configs to be available for the container.
     * TODO: elaborate on how configs will become available.
     * Deprecated, please use TaskTemplate.config instead.
     */
    config?: Array<coreKeyValuePair>;
    ports?: Array<coreContainerPort>;
    data_config?: coreDataLoadingConfig;
    architecture?: ContainerArchitecture;
};

