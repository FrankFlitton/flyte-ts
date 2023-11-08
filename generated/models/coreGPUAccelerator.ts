/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Metadata associated with the GPU accelerator to allocate to a task. Contains
 * information about device type, and for multi-instance GPUs, the partition size to
 * use.
 */
export type coreGPUAccelerator = {
    /**
     * This can be any arbitrary string, and should be informed by the labels or taints
     * associated with the nodes in question. Default cloud provider labels typically
     * use the following values: `nvidia-tesla-t4`, `nvidia-tesla-a100`, etc.
     */
    device?: string;
    unpartitioned?: boolean;
    /**
     * Like `device`, this can be any arbitrary string, and should be informed by
     * the labels or taints associated with the nodes in question. Default cloud
     * provider labels typically use the following values: `1g.5gb`, `2g.10gb`, etc.
     */
    partition_size?: string;
};

