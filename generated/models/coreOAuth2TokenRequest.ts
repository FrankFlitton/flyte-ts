/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { coreOAuth2Client } from './coreOAuth2Client';
import type { coreOAuth2TokenRequestType } from './coreOAuth2TokenRequestType';

/**
 * OAuth2TokenRequest encapsulates information needed to request an OAuth2 token.
 * FLYTE_TOKENS_ENV_PREFIX will be passed to indicate the prefix of the environment variables that will be present if
 * tokens are passed through environment variables.
 * FLYTE_TOKENS_PATH_PREFIX will be passed to indicate the prefix of the path where secrets will be mounted if tokens
 * are passed through file mounts.
 */
export type coreOAuth2TokenRequest = {
    name?: string;
    type?: coreOAuth2TokenRequestType;
    client?: coreOAuth2Client;
    idp_discovery_endpoint?: string;
    token_endpoint?: string;
};

