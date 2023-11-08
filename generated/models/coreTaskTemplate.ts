/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { coreContainer } from './coreContainer';
import type { coreExtendedResources } from './coreExtendedResources';
import type { coreIdentifier } from './coreIdentifier';
import type { coreK8sPod } from './coreK8sPod';
import type { coreSecurityContext } from './coreSecurityContext';
import type { coreSql } from './coreSql';
import type { coreTaskMetadata } from './coreTaskMetadata';
import type { coreTypedInterface } from './coreTypedInterface';
import type { protobufStruct } from './protobufStruct';

/**
 * A Task structure that uniquely identifies a task in the system
 * Tasks are registered as a first step in the system.
 */
export type coreTaskTemplate = {
    /**
     * Auto generated taskId by the system. Task Id uniquely identifies this task globally.
     */
    id?: coreIdentifier;
    /**
     * A predefined yet extensible Task type identifier. This can be used to customize any of the components. If no
     * extensions are provided in the system, Flyte will resolve the this task to its TaskCategory and default the
     * implementation registered for the TaskCategory.
     */
    type?: string;
    /**
     * Extra metadata about the task.
     */
    metadata?: coreTaskMetadata;
    /**
     * A strongly typed interface for the task. This enables others to use this task within a workflow and guarantees
     * compile-time validation of the workflow to avoid costly runtime failures.
     */
    interface?: coreTypedInterface;
    /**
     * Custom data about the task. This is extensible to allow various plugins in the system.
     */
    custom?: protobufStruct;
    container?: coreContainer;
    k8s_pod?: coreK8sPod;
    sql?: coreSql;
    /**
     * This can be used to customize task handling at execution time for the same task type.
     */
    task_type_version?: number;
    /**
     * security_context encapsulates security attributes requested to run this task.
     */
    security_context?: coreSecurityContext;
    /**
     * Encapsulates all non-standard resources, not captured by
     * v1.ResourceRequirements, to allocate to a task.
     */
    extended_resources?: coreExtendedResources;
    config?: Record<string, string>;
};

