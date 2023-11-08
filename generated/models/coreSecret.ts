/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SecretMountType } from './SecretMountType';

/**
 * Secret encapsulates information about the secret a task needs to proceed. An environment variable
 * FLYTE_SECRETS_ENV_PREFIX will be passed to indicate the prefix of the environment variables that will be present if
 * secrets are passed through environment variables.
 * FLYTE_SECRETS_DEFAULT_DIR will be passed to indicate the prefix of the path where secrets will be mounted if secrets
 * are passed through file mounts.
 */
export type coreSecret = {
    group?: string;
    group_version?: string;
    key?: string;
    mount_requirement?: SecretMountType;
};

