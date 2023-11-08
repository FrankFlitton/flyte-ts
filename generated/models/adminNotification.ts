/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { adminEmailNotification } from './adminEmailNotification';
import type { adminPagerDutyNotification } from './adminPagerDutyNotification';
import type { adminSlackNotification } from './adminSlackNotification';
import type { coreWorkflowExecutionPhase } from './coreWorkflowExecutionPhase';

/**
 * Represents a structure for notifications based on execution status.
 * The notification content is configured within flyte admin but can be templatized.
 * Future iterations could expose configuring notifications with custom content.
 */
export type adminNotification = {
    phases?: Array<coreWorkflowExecutionPhase>;
    email?: adminEmailNotification;
    pager_duty?: adminPagerDutyNotification;
    slack?: adminSlackNotification;
};

