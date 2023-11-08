/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { coreApproveCondition } from './coreApproveCondition';
import type { coreSignalCondition } from './coreSignalCondition';
import type { coreSleepCondition } from './coreSleepCondition';

/**
 * GateNode refers to the condition that is required for the gate to successfully complete.
 */
export type coreGateNode = {
    /**
     * ApproveCondition represents a dependency on an external approval provided by a boolean signal.
     */
    approve?: coreApproveCondition;
    /**
     * SignalCondition represents a dependency on an signal.
     */
    signal?: coreSignalCondition;
    /**
     * SleepCondition represents a dependency on waiting for the specified duration.
     */
    sleep?: coreSleepCondition;
};

