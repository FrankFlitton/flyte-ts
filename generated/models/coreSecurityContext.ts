/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { coreIdentity } from './coreIdentity';
import type { coreOAuth2TokenRequest } from './coreOAuth2TokenRequest';
import type { coreSecret } from './coreSecret';

/**
 * SecurityContext holds security attributes that apply to tasks.
 */
export type coreSecurityContext = {
    /**
     * run_as encapsulates the identity a pod should run as. If the task fills in multiple fields here, it'll be up to the
     * backend plugin to choose the appropriate identity for the execution engine the task will run on.
     */
    run_as?: coreIdentity;
    /**
     * secrets indicate the list of secrets the task needs in order to proceed. Secrets will be mounted/passed to the
     * pod as it starts. If the plugin responsible for kicking of the task will not run it on a flyte cluster (e.g. AWS
     * Batch), it's the responsibility of the plugin to fetch the secret (which means propeller identity will need access
     * to the secret) and to pass it to the remote execution engine.
     */
    secrets?: Array<coreSecret>;
    /**
     * tokens indicate the list of token requests the task needs in order to proceed. Tokens will be mounted/passed to the
     * pod as it starts. If the plugin responsible for kicking of the task will not run it on a flyte cluster (e.g. AWS
     * Batch), it's the responsibility of the plugin to fetch the secret (which means propeller identity will need access
     * to the secret) and to pass it to the remote execution engine.
     */
    tokens?: Array<coreOAuth2TokenRequest>;
};

