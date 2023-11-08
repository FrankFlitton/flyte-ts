/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { adminDescriptionEntity } from './adminDescriptionEntity';
import type { coreTaskTemplate } from './coreTaskTemplate';

/**
 * Represents a structure that encapsulates the user-configured specification of the task.
 */
export type adminTaskSpec = {
    /**
     * Template of the task that encapsulates all the metadata of the task.
     */
    template?: coreTaskTemplate;
    /**
     * Represents the specification for description entity.
     */
    description?: adminDescriptionEntity;
};

