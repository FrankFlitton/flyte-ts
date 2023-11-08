/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type adminClusterResourceAttributes = {
    /**
     * Custom resource attributes which will be applied in cluster resource creation (e.g. quotas).
     * Map keys are the *case-sensitive* names of variables in templatized resource files.
     * Map values should be the custom values which get substituted during resource creation.
     */
    attributes?: Record<string, string>;
};

