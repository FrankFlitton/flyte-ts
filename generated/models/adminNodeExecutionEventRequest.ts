/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { eventNodeExecutionEvent } from './eventNodeExecutionEvent';

/**
 * Request to send a notification that a node execution event has occurred.
 */
export type adminNodeExecutionEventRequest = {
    request_id?: string;
    /**
     * Details about the event that occurred.
     */
    event?: eventNodeExecutionEvent;
};

