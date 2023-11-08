/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { adminExecutionSpec } from './adminExecutionSpec';
import type { coreLiteralMap } from './coreLiteralMap';

/**
 * Request to launch an execution with the given project, domain and optionally-assigned name.
 */
export type adminExecutionCreateRequest = {
    project?: string;
    domain?: string;
    name?: string;
    spec?: adminExecutionSpec;
    inputs?: coreLiteralMap;
};

