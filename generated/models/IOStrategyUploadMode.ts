/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * - UPLOAD_ON_EXIT: All data will be uploaded after the main container exits
 * - UPLOAD_EAGER: Data will be uploaded as it appears. Refer to protocol specification for details
 * - DO_NOT_UPLOAD: Data will not be uploaded, only references will be written
 */
export enum IOStrategyUploadMode {
    UPLOAD_ON_EXIT = 'UPLOAD_ON_EXIT',
    UPLOAD_EAGER = 'UPLOAD_EAGER',
    DO_NOT_UPLOAD = 'DO_NOT_UPLOAD',
}
