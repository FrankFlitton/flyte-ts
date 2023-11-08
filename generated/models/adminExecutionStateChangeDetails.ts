/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { adminExecutionState } from './adminExecutionState';

export type adminExecutionStateChangeDetails = {
    /**
     * The state of the execution is used to control its visibility in the UI/CLI.
     */
    state?: adminExecutionState;
    /**
     * This timestamp represents when the state changed.
     */
    occurred_at?: string;
    principal?: string;
};

