/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { adminWorkflow } from './adminWorkflow';

export type adminWorkflowList = {
    /**
     * A list of workflows returned based on the request.
     */
    workflows?: Array<adminWorkflow>;
    /**
     * In the case of multiple pages of results, the server-provided token can be used to fetch the next page
     * in a query. If there are no more results, this value will be empty.
     */
    token?: string;
};

