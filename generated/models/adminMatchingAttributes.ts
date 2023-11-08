/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { adminClusterAssignment } from './adminClusterAssignment';
import type { adminClusterResourceAttributes } from './adminClusterResourceAttributes';
import type { adminExecutionClusterLabel } from './adminExecutionClusterLabel';
import type { adminExecutionQueueAttributes } from './adminExecutionQueueAttributes';
import type { adminPluginOverrides } from './adminPluginOverrides';
import type { adminTaskResourceAttributes } from './adminTaskResourceAttributes';
import type { adminWorkflowExecutionConfig } from './adminWorkflowExecutionConfig';
import type { coreQualityOfService } from './coreQualityOfService';

/**
 * Generic container for encapsulating all types of the above attributes messages.
 */
export type adminMatchingAttributes = {
    task_resource_attributes?: adminTaskResourceAttributes;
    cluster_resource_attributes?: adminClusterResourceAttributes;
    execution_queue_attributes?: adminExecutionQueueAttributes;
    execution_cluster_label?: adminExecutionClusterLabel;
    quality_of_service?: coreQualityOfService;
    plugin_overrides?: adminPluginOverrides;
    workflow_execution_config?: adminWorkflowExecutionConfig;
    cluster_assignment?: adminClusterAssignment;
};

