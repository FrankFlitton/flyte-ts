/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ExecutionErrorErrorKind } from './ExecutionErrorErrorKind';

/**
 * Represents the error message from the execution.
 */
export type coreExecutionError = {
    code?: string;
    /**
     * Detailed description of the error - including stack trace.
     */
    message?: string;
    error_uri?: string;
    kind?: ExecutionErrorErrorKind;
};

