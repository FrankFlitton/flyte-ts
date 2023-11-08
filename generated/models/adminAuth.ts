/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Defines permissions associated with executions created by this launch plan spec.
 * Use either of these roles when they have permissions required by your workflow execution.
 * Deprecated.
 */
export type adminAuth = {
    /**
     * Defines an optional iam role which will be used for tasks run in executions created with this launch plan.
     */
    assumable_iam_role?: string;
    /**
     * Defines an optional kubernetes service account which will be used for tasks run in executions created with this launch plan.
     */
    kubernetes_service_account?: string;
};

