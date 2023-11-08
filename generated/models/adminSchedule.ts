/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { adminCronSchedule } from './adminCronSchedule';
import type { adminFixedRate } from './adminFixedRate';

/**
 * Defines complete set of information required to trigger an execution on a schedule.
 */
export type adminSchedule = {
    cron_expression?: string;
    rate?: adminFixedRate;
    cron_schedule?: adminCronSchedule;
    /**
     * Name of the input variable that the kickoff time will be supplied to when the workflow is kicked off.
     */
    kickoff_time_input_arg?: string;
};

