/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Reason is a single message annotated with a timestamp to indicate the instant the reason occurred.
 */
export type adminReason = {
    /**
     * occurred_at is the timestamp indicating the instant that this reason happened.
     */
    occurred_at?: string;
    /**
     * message is the explanation for the most recent phase transition or status update.
     */
    message?: string;
};

