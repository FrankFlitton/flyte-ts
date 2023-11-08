/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { adminLaunchPlanClosure } from './adminLaunchPlanClosure';
import type { adminLaunchPlanSpec } from './adminLaunchPlanSpec';
import type { coreIdentifier } from './coreIdentifier';

/**
 * A LaunchPlan provides the capability to templatize workflow executions.
 * Launch plans simplify associating one or more schedules, inputs and notifications with your workflows.
 * Launch plans can be shared and used to trigger executions with predefined inputs even when a workflow
 * definition doesn't necessarily have a default value for said input.
 */
export type adminLaunchPlan = {
    /**
     * Uniquely identifies a launch plan entity.
     */
    id?: coreIdentifier;
    /**
     * User-provided launch plan details, including reference workflow, inputs and other metadata.
     */
    spec?: adminLaunchPlanSpec;
    /**
     * Values computed by the flyte platform after launch plan registration.
     */
    closure?: adminLaunchPlanClosure;
};

