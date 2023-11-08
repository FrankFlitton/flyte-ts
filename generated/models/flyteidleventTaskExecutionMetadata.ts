/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { eventExternalResourceInfo } from './eventExternalResourceInfo';
import type { eventResourcePoolInfo } from './eventResourcePoolInfo';
import type { TaskExecutionMetadataInstanceClass } from './TaskExecutionMetadataInstanceClass';

/**
 * Holds metadata around how a task was executed.
 * As a task transitions across event phases during execution some attributes, such its generated name, generated external resources,
 * and more may grow in size but not change necessarily based on the phase transition that sparked the event update.
 * Metadata is a container for these attributes across the task execution lifecycle.
 */
export type flyteidleventTaskExecutionMetadata = {
    /**
     * Unique, generated name for this task execution used by the backend.
     */
    generated_name?: string;
    /**
     * Additional data on external resources on other back-ends or platforms (e.g. Hive, Qubole, etc) launched by this task execution.
     */
    external_resources?: Array<eventExternalResourceInfo>;
    /**
     * Includes additional data on concurrent resource management used during execution..
     * This is a repeated field because a plugin can request multiple resource allocations during execution.
     */
    resource_pool_info?: Array<eventResourcePoolInfo>;
    /**
     * The identifier of the plugin used to execute this task.
     */
    plugin_identifier?: string;
    instance_class?: TaskExecutionMetadataInstanceClass;
};

