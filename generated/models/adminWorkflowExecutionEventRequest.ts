/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { eventWorkflowExecutionEvent } from './eventWorkflowExecutionEvent';

/**
 * Request to send a notification that a workflow execution event has occurred.
 */
export type adminWorkflowExecutionEventRequest = {
    request_id?: string;
    /**
     * Details about the event that occurred.
     */
    event?: eventWorkflowExecutionEvent;
};

