/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { eventTaskExecutionEvent } from './eventTaskExecutionEvent';

/**
 * Request to send a notification that a task execution event has occurred.
 */
export type adminTaskExecutionEventRequest = {
    request_id?: string;
    /**
     * Details about the event that occurred.
     */
    event?: eventTaskExecutionEvent;
};

