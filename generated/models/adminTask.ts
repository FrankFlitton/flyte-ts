/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { adminTaskClosure } from './adminTaskClosure';
import type { coreIdentifier } from './coreIdentifier';

/**
 * Flyte workflows are composed of many ordered tasks. That is small, reusable, self-contained logical blocks
 * arranged to process workflow inputs and produce a deterministic set of outputs.
 * Tasks can come in many varieties tuned for specialized behavior.
 */
export type adminTask = {
    /**
     * id represents the unique identifier of the task.
     */
    id?: coreIdentifier;
    /**
     * closure encapsulates all the fields that maps to a compiled version of the task.
     */
    closure?: adminTaskClosure;
    /**
     * One-liner overview of the entity.
     */
    short_description?: string;
};

