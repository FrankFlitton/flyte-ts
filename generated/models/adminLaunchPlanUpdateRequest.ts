/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { adminLaunchPlanState } from './adminLaunchPlanState';
import type { coreIdentifier } from './coreIdentifier';

export type adminLaunchPlanUpdateRequest = {
    /**
     * Identifier of launch plan for which to change state.
     * +required.
     */
    id?: coreIdentifier;
    /**
     * Desired state to apply to the launch plan.
     * +required.
     */
    state?: adminLaunchPlanState;
};

