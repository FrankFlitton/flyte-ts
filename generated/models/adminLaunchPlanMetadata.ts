/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { adminNotification } from './adminNotification';
import type { adminSchedule } from './adminSchedule';

/**
 * Additional launch plan attributes included in the LaunchPlanSpec not strictly required to launch
 * the reference workflow.
 */
export type adminLaunchPlanMetadata = {
    schedule?: adminSchedule;
    notifications?: Array<adminNotification>;
};

