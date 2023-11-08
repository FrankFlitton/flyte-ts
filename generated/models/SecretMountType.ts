/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 *  - ANY: Default case, indicates the client can tolerate either mounting options.
 * - ENV_VAR: ENV_VAR indicates the secret needs to be mounted as an environment variable.
 * - FILE: FILE indicates the secret needs to be mounted as a file.
 */
export enum SecretMountType {
    ANY = 'ANY',
    ENV_VAR = 'ENV_VAR',
    FILE = 'FILE',
}
