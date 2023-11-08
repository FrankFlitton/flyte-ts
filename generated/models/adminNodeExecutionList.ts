/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { flyteidladminNodeExecution } from './flyteidladminNodeExecution';

export type adminNodeExecutionList = {
    node_executions?: Array<flyteidladminNodeExecution>;
    /**
     * In the case of multiple pages of results, the server-provided token can be used to fetch the next page
     * in a query. If there are no more results, this value will be empty.
     */
    token?: string;
};

