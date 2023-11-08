/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { adminLaunchPlanState } from './adminLaunchPlanState';
import type { coreParameterMap } from './coreParameterMap';
import type { coreVariableMap } from './coreVariableMap';

/**
 * Values computed by the flyte platform after launch plan registration.
 * These include expected_inputs required to be present in a CreateExecutionRequest
 * to launch the reference workflow as well timestamp values associated with the launch plan.
 */
export type adminLaunchPlanClosure = {
    /**
     * Indicate the Launch plan state.
     */
    state?: adminLaunchPlanState;
    expected_inputs?: coreParameterMap;
    expected_outputs?: coreVariableMap;
    /**
     * Time at which the launch plan was created.
     */
    created_at?: string;
    /**
     * Time at which the launch plan was last updated.
     */
    updated_at?: string;
};

