/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * - DOWNLOAD_EAGER: All data will be downloaded before the main container is executed
 * - DOWNLOAD_STREAM: Data will be downloaded as a stream and an End-Of-Stream marker will be written to indicate all data has been downloaded. Refer to protocol for details
 * - DO_NOT_DOWNLOAD: Large objects (offloaded) will not be downloaded
 */
export enum IOStrategyDownloadMode {
    DOWNLOAD_EAGER = 'DOWNLOAD_EAGER',
    DOWNLOAD_STREAM = 'DOWNLOAD_STREAM',
    DO_NOT_DOWNLOAD = 'DO_NOT_DOWNLOAD',
}
