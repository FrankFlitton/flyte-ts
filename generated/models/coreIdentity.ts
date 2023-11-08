/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { coreOAuth2Client } from './coreOAuth2Client';

/**
 * Identity encapsulates the various security identities a task can run as. It's up to the underlying plugin to pick the
 * right identity for the execution environment.
 */
export type coreIdentity = {
    /**
     * iam_role references the fully qualified name of Identity & Access Management role to impersonate.
     */
    iam_role?: string;
    /**
     * k8s_service_account references a kubernetes service account to impersonate.
     */
    k8s_service_account?: string;
    /**
     * oauth2_client references an oauth2 client. Backend plugins can use this information to impersonate the client when
     * making external calls.
     */
    oauth2_client?: coreOAuth2Client;
    execution_identity?: string;
};

