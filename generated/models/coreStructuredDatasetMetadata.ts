/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { coreStructuredDatasetType } from './coreStructuredDatasetType';

export type coreStructuredDatasetMetadata = {
    /**
     * Bundle the type information along with the literal.
     * This is here because StructuredDatasets can often be more defined at run time than at compile time.
     * That is, at compile time you might only declare a task to return a pandas dataframe or a StructuredDataset,
     * without any column information, but at run time, you might have that column information.
     * flytekit python will copy this type information into the literal, from the type information, if not provided by
     * the various plugins (encoders).
     * Since this field is run time generated, it's not used for any type checking.
     */
    structured_dataset_type?: coreStructuredDatasetType;
};

