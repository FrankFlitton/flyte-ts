/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { adminLaunchPlanSpec } from './adminLaunchPlanSpec';
import type { coreIdentifier } from './coreIdentifier';

/**
 * Request to register a launch plan. The included LaunchPlanSpec may have a complete or incomplete set of inputs required
 * to launch a workflow execution. By default all launch plans are registered in state INACTIVE. If you wish to
 * set the state to ACTIVE, you must submit a LaunchPlanUpdateRequest, after you have successfully created a launch plan.
 */
export type adminLaunchPlanCreateRequest = {
    /**
     * Uniquely identifies a launch plan entity.
     */
    id?: coreIdentifier;
    /**
     * User-provided launch plan details, including reference workflow, inputs and other metadata.
     */
    spec?: adminLaunchPlanSpec;
};

