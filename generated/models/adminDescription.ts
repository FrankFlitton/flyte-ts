/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { adminDescriptionFormat } from './adminDescriptionFormat';

/**
 * Full user description with formatting preserved. This can be rendered
 * by clients, such as the console or command line tools with in-tact
 * formatting.
 */
export type adminDescription = {
    value?: string;
    uri?: string;
    format?: adminDescriptionFormat;
    icon_link?: string;
};

