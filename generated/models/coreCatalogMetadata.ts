/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { coreCatalogArtifactTag } from './coreCatalogArtifactTag';
import type { coreIdentifier } from './coreIdentifier';
import type { coreTaskExecutionIdentifier } from './coreTaskExecutionIdentifier';

export type coreCatalogMetadata = {
    dataset_id?: coreIdentifier;
    artifact_tag?: coreCatalogArtifactTag;
    source_task_execution?: coreTaskExecutionIdentifier;
};

