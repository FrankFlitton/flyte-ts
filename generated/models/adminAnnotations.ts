/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Annotation values to be applied to an execution resource.
 * In the future a mode (e.g. OVERRIDE, APPEND, etc) can be defined
 * to specify how to merge annotations defined at registration and execution time.
 */
export type adminAnnotations = {
    /**
     * Map of custom annotations to be applied to the execution resource.
     */
    values?: Record<string, string>;
};

