/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { adminDescriptionEntity } from '../models/adminDescriptionEntity';
import type { adminDescriptionEntityList } from '../models/adminDescriptionEntityList';
import type { adminExecution } from '../models/adminExecution';
import type { adminExecutionCreateRequest } from '../models/adminExecutionCreateRequest';
import type { adminExecutionCreateResponse } from '../models/adminExecutionCreateResponse';
import type { adminExecutionList } from '../models/adminExecutionList';
import type { adminExecutionRecoverRequest } from '../models/adminExecutionRecoverRequest';
import type { adminExecutionRelaunchRequest } from '../models/adminExecutionRelaunchRequest';
import type { adminExecutionTerminateRequest } from '../models/adminExecutionTerminateRequest';
import type { adminExecutionTerminateResponse } from '../models/adminExecutionTerminateResponse';
import type { adminExecutionUpdateRequest } from '../models/adminExecutionUpdateRequest';
import type { adminExecutionUpdateResponse } from '../models/adminExecutionUpdateResponse';
import type { adminGetVersionResponse } from '../models/adminGetVersionResponse';
import type { adminLaunchPlan } from '../models/adminLaunchPlan';
import type { adminLaunchPlanCreateRequest } from '../models/adminLaunchPlanCreateRequest';
import type { adminLaunchPlanCreateResponse } from '../models/adminLaunchPlanCreateResponse';
import type { adminLaunchPlanList } from '../models/adminLaunchPlanList';
import type { adminLaunchPlanUpdateRequest } from '../models/adminLaunchPlanUpdateRequest';
import type { adminLaunchPlanUpdateResponse } from '../models/adminLaunchPlanUpdateResponse';
import type { adminListMatchableAttributesResponse } from '../models/adminListMatchableAttributesResponse';
import type { adminNamedEntity } from '../models/adminNamedEntity';
import type { adminNamedEntityIdentifierList } from '../models/adminNamedEntityIdentifierList';
import type { adminNamedEntityList } from '../models/adminNamedEntityList';
import type { adminNamedEntityUpdateRequest } from '../models/adminNamedEntityUpdateRequest';
import type { adminNamedEntityUpdateResponse } from '../models/adminNamedEntityUpdateResponse';
import type { adminNodeExecutionEventRequest } from '../models/adminNodeExecutionEventRequest';
import type { adminNodeExecutionEventResponse } from '../models/adminNodeExecutionEventResponse';
import type { adminNodeExecutionGetDataResponse } from '../models/adminNodeExecutionGetDataResponse';
import type { adminNodeExecutionList } from '../models/adminNodeExecutionList';
import type { adminProject } from '../models/adminProject';
import type { adminProjectAttributesDeleteRequest } from '../models/adminProjectAttributesDeleteRequest';
import type { adminProjectAttributesDeleteResponse } from '../models/adminProjectAttributesDeleteResponse';
import type { adminProjectAttributesGetResponse } from '../models/adminProjectAttributesGetResponse';
import type { adminProjectAttributesUpdateRequest } from '../models/adminProjectAttributesUpdateRequest';
import type { adminProjectAttributesUpdateResponse } from '../models/adminProjectAttributesUpdateResponse';
import type { adminProjectDomainAttributesDeleteRequest } from '../models/adminProjectDomainAttributesDeleteRequest';
import type { adminProjectDomainAttributesDeleteResponse } from '../models/adminProjectDomainAttributesDeleteResponse';
import type { adminProjectDomainAttributesGetResponse } from '../models/adminProjectDomainAttributesGetResponse';
import type { adminProjectDomainAttributesUpdateRequest } from '../models/adminProjectDomainAttributesUpdateRequest';
import type { adminProjectDomainAttributesUpdateResponse } from '../models/adminProjectDomainAttributesUpdateResponse';
import type { adminProjectRegisterRequest } from '../models/adminProjectRegisterRequest';
import type { adminProjectRegisterResponse } from '../models/adminProjectRegisterResponse';
import type { adminProjects } from '../models/adminProjects';
import type { adminProjectUpdateResponse } from '../models/adminProjectUpdateResponse';
import type { adminTask } from '../models/adminTask';
import type { adminTaskExecutionEventRequest } from '../models/adminTaskExecutionEventRequest';
import type { adminTaskExecutionEventResponse } from '../models/adminTaskExecutionEventResponse';
import type { adminTaskExecutionGetDataResponse } from '../models/adminTaskExecutionGetDataResponse';
import type { adminTaskExecutionList } from '../models/adminTaskExecutionList';
import type { adminTaskList } from '../models/adminTaskList';
import type { adminWorkflow } from '../models/adminWorkflow';
import type { adminWorkflowAttributesDeleteRequest } from '../models/adminWorkflowAttributesDeleteRequest';
import type { adminWorkflowAttributesDeleteResponse } from '../models/adminWorkflowAttributesDeleteResponse';
import type { adminWorkflowAttributesGetResponse } from '../models/adminWorkflowAttributesGetResponse';
import type { adminWorkflowAttributesUpdateRequest } from '../models/adminWorkflowAttributesUpdateRequest';
import type { adminWorkflowAttributesUpdateResponse } from '../models/adminWorkflowAttributesUpdateResponse';
import type { adminWorkflowCreateRequest } from '../models/adminWorkflowCreateRequest';
import type { adminWorkflowCreateResponse } from '../models/adminWorkflowCreateResponse';
import type { adminWorkflowExecutionEventRequest } from '../models/adminWorkflowExecutionEventRequest';
import type { adminWorkflowExecutionEventResponse } from '../models/adminWorkflowExecutionEventResponse';
import type { adminWorkflowExecutionGetDataResponse } from '../models/adminWorkflowExecutionGetDataResponse';
import type { adminWorkflowExecutionGetMetricsResponse } from '../models/adminWorkflowExecutionGetMetricsResponse';
import type { adminWorkflowList } from '../models/adminWorkflowList';
import type { flyteidladminNodeExecution } from '../models/flyteidladminNodeExecution';
import type { flyteidladminTaskCreateRequest } from '../models/flyteidladminTaskCreateRequest';
import type { flyteidladminTaskCreateResponse } from '../models/flyteidladminTaskCreateResponse';
import type { flyteidladminTaskExecution } from '../models/flyteidladminTaskExecution';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AdminServiceService {

    /**
     * Fetch the active version of a :ref:`ref_flyteidl.admin.LaunchPlan`.
     * @param idProject Name of the project the resource belongs to.
     * @param idDomain Name of the domain the resource belongs to.
     * A domain can be considered as a subset within a specific project.
     * @param idName User provided value for the resource.
     * The combination of project + domain + name uniquely identifies the resource.
     * +optional - in certain contexts - like 'List API', 'Launch plans'
     * @returns adminLaunchPlan A successful response.
     * @throws ApiError
     */
    public static getActiveLaunchPlan(
        idProject: string,
        idDomain: string,
        idName: string,
    ): CancelablePromise<adminLaunchPlan> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/active_launch_plans/{id.project}/{id.domain}/{id.name}',
            path: {
                'id.project': idProject,
                'id.domain': idDomain,
                'id.name': idName,
            },
        });
    }

    /**
     * List active versions of :ref:`ref_flyteidl.admin.LaunchPlan`.
     * @param project Name of the project that contains the identifiers.
     * +required.
     * @param domain Name of the domain the identifiers belongs to within the project.
     * +required.
     * @param limit Indicates the number of resources to be returned.
     * +required.
     * @param token In the case of multiple pages of results, the server-provided token can be used to fetch the next page
     * in a query.
     * +optional.
     * @param sortByKey Indicates an attribute to sort the response values.
     * +required.
     * @param sortByDirection Indicates the direction to apply sort key for response values.
     * +optional.
     *
     * - DESCENDING: By default, fields are sorted in descending order.
     * @returns adminLaunchPlanList A successful response.
     * @throws ApiError
     */
    public static listActiveLaunchPlans(
        project: string,
        domain: string,
        limit?: number,
        token?: string,
        sortByKey?: string,
        sortByDirection: 'DESCENDING' | 'ASCENDING' = 'DESCENDING',
    ): CancelablePromise<adminLaunchPlanList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/active_launch_plans/{project}/{domain}',
            path: {
                'project': project,
                'domain': domain,
            },
            query: {
                'limit': limit,
                'token': token,
                'sort_by.key': sortByKey,
                'sort_by.direction': sortByDirection,
            },
        });
    }

    /**
     * Fetch a list of :ref:`ref_flyteidl.admin.NodeExecution` launched by the reference :ref:`ref_flyteidl.admin.TaskExecution`.
     * @param taskExecutionIdNodeExecutionIdExecutionIdProject Name of the project the resource belongs to.
     * @param taskExecutionIdNodeExecutionIdExecutionIdDomain Name of the domain the resource belongs to.
     * A domain can be considered as a subset within a specific project.
     * @param taskExecutionIdNodeExecutionIdExecutionIdName User or system provided value for the resource.
     * @param taskExecutionIdNodeExecutionIdNodeId
     * @param taskExecutionIdTaskIdProject Name of the project the resource belongs to.
     * @param taskExecutionIdTaskIdDomain Name of the domain the resource belongs to.
     * A domain can be considered as a subset within a specific project.
     * @param taskExecutionIdTaskIdName User provided value for the resource.
     * @param taskExecutionIdTaskIdVersion Specific version of the resource.
     * @param taskExecutionIdRetryAttempt
     * @param taskExecutionIdTaskIdResourceType Identifies the specific type of resource that this identifier corresponds to.
     *
     * - DATASET: A dataset represents an entity modeled in Flyte DataCatalog. A Dataset is also a versioned entity and can be a compilation of multiple individual objects.
     * Eventually all Catalog objects should be modeled similar to Flyte Objects. The Dataset entities makes it possible for the UI  and CLI to act on the objects
     * in a similar manner to other Flyte objects
     * @param limit Indicates the number of resources to be returned.
     * +required.
     * @param token In the case of multiple pages of results, the, server-provided token can be used to fetch the next page
     * in a query.
     * +optional.
     * @param filters Indicates a list of filters passed as string.
     * More info on constructing filters : <Link>
     * +optional.
     * @param sortByKey Indicates an attribute to sort the response values.
     * +required.
     * @param sortByDirection Indicates the direction to apply sort key for response values.
     * +optional.
     *
     * - DESCENDING: By default, fields are sorted in descending order.
     * @returns adminNodeExecutionList A successful response.
     * @throws ApiError
     */
    public static listNodeExecutionsForTask(
        taskExecutionIdNodeExecutionIdExecutionIdProject: string,
        taskExecutionIdNodeExecutionIdExecutionIdDomain: string,
        taskExecutionIdNodeExecutionIdExecutionIdName: string,
        taskExecutionIdNodeExecutionIdNodeId: string,
        taskExecutionIdTaskIdProject: string,
        taskExecutionIdTaskIdDomain: string,
        taskExecutionIdTaskIdName: string,
        taskExecutionIdTaskIdVersion: string,
        taskExecutionIdRetryAttempt: number,
        taskExecutionIdTaskIdResourceType: 'UNSPECIFIED' | 'TASK' | 'WORKFLOW' | 'LAUNCH_PLAN' | 'DATASET' = 'UNSPECIFIED',
        limit?: number,
        token?: string,
        filters?: string,
        sortByKey?: string,
        sortByDirection: 'DESCENDING' | 'ASCENDING' = 'DESCENDING',
    ): CancelablePromise<adminNodeExecutionList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/children/task_executions/{task_execution_id.node_execution_id.execution_id.project}/{task_execution_id.node_execution_id.execution_id.domain}/{task_execution_id.node_execution_id.execution_id.name}/{task_execution_id.node_execution_id.node_id}/{task_execution_id.task_id.project}/{task_execution_id.task_id.domain}/{task_execution_id.task_id.name}/{task_execution_id.task_id.version}/{task_execution_id.retry_attempt}',
            path: {
                'task_execution_id.node_execution_id.execution_id.project': taskExecutionIdNodeExecutionIdExecutionIdProject,
                'task_execution_id.node_execution_id.execution_id.domain': taskExecutionIdNodeExecutionIdExecutionIdDomain,
                'task_execution_id.node_execution_id.execution_id.name': taskExecutionIdNodeExecutionIdExecutionIdName,
                'task_execution_id.node_execution_id.node_id': taskExecutionIdNodeExecutionIdNodeId,
                'task_execution_id.task_id.project': taskExecutionIdTaskIdProject,
                'task_execution_id.task_id.domain': taskExecutionIdTaskIdDomain,
                'task_execution_id.task_id.name': taskExecutionIdTaskIdName,
                'task_execution_id.task_id.version': taskExecutionIdTaskIdVersion,
                'task_execution_id.retry_attempt': taskExecutionIdRetryAttempt,
            },
            query: {
                'task_execution_id.task_id.resource_type': taskExecutionIdTaskIdResourceType,
                'limit': limit,
                'token': token,
                'filters': filters,
                'sort_by.key': sortByKey,
                'sort_by.direction': sortByDirection,
            },
        });
    }

    /**
     * Fetches input and output data for a :ref:`ref_flyteidl.admin.Execution`.
     * @param idProject Name of the project the resource belongs to.
     * @param idDomain Name of the domain the resource belongs to.
     * A domain can be considered as a subset within a specific project.
     * @param idName User or system provided value for the resource.
     * @returns adminWorkflowExecutionGetDataResponse A successful response.
     * @throws ApiError
     */
    public static getExecutionData(
        idProject: string,
        idDomain: string,
        idName: string,
    ): CancelablePromise<adminWorkflowExecutionGetDataResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/data/executions/{id.project}/{id.domain}/{id.name}',
            path: {
                'id.project': idProject,
                'id.domain': idDomain,
                'id.name': idName,
            },
        });
    }

    /**
     * Fetches input and output data for a :ref:`ref_flyteidl.admin.NodeExecution`.
     * @param idExecutionIdProject Name of the project the resource belongs to.
     * @param idExecutionIdDomain Name of the domain the resource belongs to.
     * A domain can be considered as a subset within a specific project.
     * @param idExecutionIdName User or system provided value for the resource.
     * @param idNodeId
     * @returns adminNodeExecutionGetDataResponse A successful response.
     * @throws ApiError
     */
    public static getNodeExecutionData(
        idExecutionIdProject: string,
        idExecutionIdDomain: string,
        idExecutionIdName: string,
        idNodeId: string,
    ): CancelablePromise<adminNodeExecutionGetDataResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/data/node_executions/{id.execution_id.project}/{id.execution_id.domain}/{id.execution_id.name}/{id.node_id}',
            path: {
                'id.execution_id.project': idExecutionIdProject,
                'id.execution_id.domain': idExecutionIdDomain,
                'id.execution_id.name': idExecutionIdName,
                'id.node_id': idNodeId,
            },
        });
    }

    /**
     * Fetches input and output data for a :ref:`ref_flyteidl.admin.TaskExecution`.
     * @param idNodeExecutionIdExecutionIdProject Name of the project the resource belongs to.
     * @param idNodeExecutionIdExecutionIdDomain Name of the domain the resource belongs to.
     * A domain can be considered as a subset within a specific project.
     * @param idNodeExecutionIdExecutionIdName User or system provided value for the resource.
     * @param idNodeExecutionIdNodeId
     * @param idTaskIdProject Name of the project the resource belongs to.
     * @param idTaskIdDomain Name of the domain the resource belongs to.
     * A domain can be considered as a subset within a specific project.
     * @param idTaskIdName User provided value for the resource.
     * @param idTaskIdVersion Specific version of the resource.
     * @param idRetryAttempt
     * @param idTaskIdResourceType Identifies the specific type of resource that this identifier corresponds to.
     *
     * - DATASET: A dataset represents an entity modeled in Flyte DataCatalog. A Dataset is also a versioned entity and can be a compilation of multiple individual objects.
     * Eventually all Catalog objects should be modeled similar to Flyte Objects. The Dataset entities makes it possible for the UI  and CLI to act on the objects
     * in a similar manner to other Flyte objects
     * @returns adminTaskExecutionGetDataResponse A successful response.
     * @throws ApiError
     */
    public static getTaskExecutionData(
        idNodeExecutionIdExecutionIdProject: string,
        idNodeExecutionIdExecutionIdDomain: string,
        idNodeExecutionIdExecutionIdName: string,
        idNodeExecutionIdNodeId: string,
        idTaskIdProject: string,
        idTaskIdDomain: string,
        idTaskIdName: string,
        idTaskIdVersion: string,
        idRetryAttempt: number,
        idTaskIdResourceType: 'UNSPECIFIED' | 'TASK' | 'WORKFLOW' | 'LAUNCH_PLAN' | 'DATASET' = 'UNSPECIFIED',
    ): CancelablePromise<adminTaskExecutionGetDataResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/data/task_executions/{id.node_execution_id.execution_id.project}/{id.node_execution_id.execution_id.domain}/{id.node_execution_id.execution_id.name}/{id.node_execution_id.node_id}/{id.task_id.project}/{id.task_id.domain}/{id.task_id.name}/{id.task_id.version}/{id.retry_attempt}',
            path: {
                'id.node_execution_id.execution_id.project': idNodeExecutionIdExecutionIdProject,
                'id.node_execution_id.execution_id.domain': idNodeExecutionIdExecutionIdDomain,
                'id.node_execution_id.execution_id.name': idNodeExecutionIdExecutionIdName,
                'id.node_execution_id.node_id': idNodeExecutionIdNodeId,
                'id.task_id.project': idTaskIdProject,
                'id.task_id.domain': idTaskIdDomain,
                'id.task_id.name': idTaskIdName,
                'id.task_id.version': idTaskIdVersion,
                'id.retry_attempt': idRetryAttempt,
            },
            query: {
                'id.task_id.resource_type': idTaskIdResourceType,
            },
        });
    }

    /**
     * Fetch a :ref:`ref_flyteidl.admin.DescriptionEntity` object.
     * @param idResourceType Identifies the specific type of resource that this identifier corresponds to.
     * @param idProject Name of the project the resource belongs to.
     * @param idDomain Name of the domain the resource belongs to.
     * A domain can be considered as a subset within a specific project.
     * @param idName User provided value for the resource.
     * @param idVersion Specific version of the resource.
     * @returns adminDescriptionEntity A successful response.
     * @throws ApiError
     */
    public static getDescriptionEntity(
        idResourceType: 'UNSPECIFIED' | 'TASK' | 'WORKFLOW' | 'LAUNCH_PLAN' | 'DATASET',
        idProject: string,
        idDomain: string,
        idName: string,
        idVersion: string,
    ): CancelablePromise<adminDescriptionEntity> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/description_entities/{id.resource_type}/{id.project}/{id.domain}/{id.name}/{id.version}',
            path: {
                'id.resource_type': idResourceType,
                'id.project': idProject,
                'id.domain': idDomain,
                'id.name': idName,
                'id.version': idVersion,
            },
        });
    }

    /**
     * Fetch a list of :ref:`ref_flyteidl.admin.DescriptionEntity` definitions.
     * @param resourceType Identifies the specific type of resource that this identifier corresponds to.
     * @param idProject Name of the project the resource belongs to.
     * @param idDomain Name of the domain the resource belongs to.
     * A domain can be considered as a subset within a specific project.
     * @param idName User provided value for the resource.
     * The combination of project + domain + name uniquely identifies the resource.
     * +optional - in certain contexts - like 'List API', 'Launch plans'.
     * @param limit Indicates the number of resources to be returned.
     * +required.
     * @param token In the case of multiple pages of results, the server-provided token can be used to fetch the next page
     * in a query.
     * +optional.
     * @param filters Indicates a list of filters passed as string.
     * More info on constructing filters : <Link>
     * +optional.
     * @param sortByKey Indicates an attribute to sort the response values.
     * +required.
     * @param sortByDirection Indicates the direction to apply sort key for response values.
     * +optional.
     *
     * - DESCENDING: By default, fields are sorted in descending order.
     * @returns adminDescriptionEntityList A successful response.
     * @throws ApiError
     */
    public static listDescriptionEntities2(
        resourceType: 'UNSPECIFIED' | 'TASK' | 'WORKFLOW' | 'LAUNCH_PLAN' | 'DATASET',
        idProject: string,
        idDomain: string,
        idName?: string,
        limit?: number,
        token?: string,
        filters?: string,
        sortByKey?: string,
        sortByDirection: 'DESCENDING' | 'ASCENDING' = 'DESCENDING',
    ): CancelablePromise<adminDescriptionEntityList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/description_entities/{resource_type}/{id.project}/{id.domain}',
            path: {
                'resource_type': resourceType,
                'id.project': idProject,
                'id.domain': idDomain,
            },
            query: {
                'id.name': idName,
                'limit': limit,
                'token': token,
                'filters': filters,
                'sort_by.key': sortByKey,
                'sort_by.direction': sortByDirection,
            },
        });
    }

    /**
     * Fetch a list of :ref:`ref_flyteidl.admin.DescriptionEntity` definitions.
     * @param resourceType Identifies the specific type of resource that this identifier corresponds to.
     * @param idProject Name of the project the resource belongs to.
     * @param idDomain Name of the domain the resource belongs to.
     * A domain can be considered as a subset within a specific project.
     * @param idName User provided value for the resource.
     * The combination of project + domain + name uniquely identifies the resource.
     * +optional - in certain contexts - like 'List API', 'Launch plans'
     * @param limit Indicates the number of resources to be returned.
     * +required.
     * @param token In the case of multiple pages of results, the server-provided token can be used to fetch the next page
     * in a query.
     * +optional.
     * @param filters Indicates a list of filters passed as string.
     * More info on constructing filters : <Link>
     * +optional.
     * @param sortByKey Indicates an attribute to sort the response values.
     * +required.
     * @param sortByDirection Indicates the direction to apply sort key for response values.
     * +optional.
     *
     * - DESCENDING: By default, fields are sorted in descending order.
     * @returns adminDescriptionEntityList A successful response.
     * @throws ApiError
     */
    public static listDescriptionEntities(
        resourceType: 'UNSPECIFIED' | 'TASK' | 'WORKFLOW' | 'LAUNCH_PLAN' | 'DATASET',
        idProject: string,
        idDomain: string,
        idName: string,
        limit?: number,
        token?: string,
        filters?: string,
        sortByKey?: string,
        sortByDirection: 'DESCENDING' | 'ASCENDING' = 'DESCENDING',
    ): CancelablePromise<adminDescriptionEntityList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/description_entities/{resource_type}/{id.project}/{id.domain}/{id.name}',
            path: {
                'resource_type': resourceType,
                'id.project': idProject,
                'id.domain': idDomain,
                'id.name': idName,
            },
            query: {
                'limit': limit,
                'token': token,
                'filters': filters,
                'sort_by.key': sortByKey,
                'sort_by.direction': sortByDirection,
            },
        });
    }

    /**
     * Indicates a :ref:`ref_flyteidl.event.NodeExecutionEvent` has occurred.
     * @param body
     * @returns adminNodeExecutionEventResponse A successful response.
     * @throws ApiError
     */
    public static createNodeEvent(
        body: adminNodeExecutionEventRequest,
    ): CancelablePromise<adminNodeExecutionEventResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/events/nodes',
            body: body,
        });
    }

    /**
     * Indicates a :ref:`ref_flyteidl.event.TaskExecutionEvent` has occurred.
     * @param body
     * @returns adminTaskExecutionEventResponse A successful response.
     * @throws ApiError
     */
    public static createTaskEvent(
        body: adminTaskExecutionEventRequest,
    ): CancelablePromise<adminTaskExecutionEventResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/events/tasks',
            body: body,
        });
    }

    /**
     * Indicates a :ref:`ref_flyteidl.event.WorkflowExecutionEvent` has occurred.
     * @param body
     * @returns adminWorkflowExecutionEventResponse A successful response.
     * @throws ApiError
     */
    public static createWorkflowEvent(
        body: adminWorkflowExecutionEventRequest,
    ): CancelablePromise<adminWorkflowExecutionEventResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/events/workflows',
            body: body,
        });
    }

    /**
     * Triggers the creation of a :ref:`ref_flyteidl.admin.Execution`
     * @param body
     * @returns adminExecutionCreateResponse A successful response.
     * @throws ApiError
     */
    public static createExecution(
        body: adminExecutionCreateRequest,
    ): CancelablePromise<adminExecutionCreateResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/executions',
            body: body,
        });
    }

    /**
     * Recreates a previously-run workflow execution that will only start executing from the last known failure point.
     * In Recover mode, users cannot change any input parameters or update the version of the execution.
     * This is extremely useful to recover from system errors and byzantine faults like - Loss of K8s cluster, bugs in platform or instability, machine failures,
     * downstream system failures (downstream services), or simply to recover executions that failed because of retry exhaustion and should complete if tried again.
     * See :ref:`ref_flyteidl.admin.ExecutionRecoverRequest` for more details.
     * @param body
     * @returns adminExecutionCreateResponse A successful response.
     * @throws ApiError
     */
    public static recoverExecution(
        body: adminExecutionRecoverRequest,
    ): CancelablePromise<adminExecutionCreateResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/executions/recover',
            body: body,
        });
    }

    /**
     * Triggers the creation of an identical :ref:`ref_flyteidl.admin.Execution`
     * @param body
     * @returns adminExecutionCreateResponse A successful response.
     * @throws ApiError
     */
    public static relaunchExecution(
        body: adminExecutionRelaunchRequest,
    ): CancelablePromise<adminExecutionCreateResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/executions/relaunch',
            body: body,
        });
    }

    /**
     * Fetch a list of :ref:`ref_flyteidl.admin.Execution`.
     * @param idProject Name of the project the resource belongs to.
     * @param idDomain Name of the domain the resource belongs to.
     * A domain can be considered as a subset within a specific project.
     * @param idName User provided value for the resource.
     * The combination of project + domain + name uniquely identifies the resource.
     * +optional - in certain contexts - like 'List API', 'Launch plans'.
     * @param limit Indicates the number of resources to be returned.
     * +required.
     * @param token In the case of multiple pages of results, this server-provided token can be used to fetch the next page
     * in a query.
     * +optional.
     * @param filters Indicates a list of filters passed as string.
     * More info on constructing filters : <Link>
     * +optional.
     * @param sortByKey Indicates an attribute to sort the response values.
     * +required.
     * @param sortByDirection Indicates the direction to apply sort key for response values.
     * +optional.
     *
     * - DESCENDING: By default, fields are sorted in descending order.
     * @returns adminExecutionList A successful response.
     * @throws ApiError
     */
    public static listExecutions(
        idProject: string,
        idDomain: string,
        idName?: string,
        limit?: number,
        token?: string,
        filters?: string,
        sortByKey?: string,
        sortByDirection: 'DESCENDING' | 'ASCENDING' = 'DESCENDING',
    ): CancelablePromise<adminExecutionList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/executions/{id.project}/{id.domain}',
            path: {
                'id.project': idProject,
                'id.domain': idDomain,
            },
            query: {
                'id.name': idName,
                'limit': limit,
                'token': token,
                'filters': filters,
                'sort_by.key': sortByKey,
                'sort_by.direction': sortByDirection,
            },
        });
    }

    /**
     * Fetches a :ref:`ref_flyteidl.admin.Execution`.
     * @param idProject Name of the project the resource belongs to.
     * @param idDomain Name of the domain the resource belongs to.
     * A domain can be considered as a subset within a specific project.
     * @param idName User or system provided value for the resource.
     * @returns adminExecution A successful response.
     * @throws ApiError
     */
    public static getExecution(
        idProject: string,
        idDomain: string,
        idName: string,
    ): CancelablePromise<adminExecution> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/executions/{id.project}/{id.domain}/{id.name}',
            path: {
                'id.project': idProject,
                'id.domain': idDomain,
                'id.name': idName,
            },
        });
    }

    /**
     * Terminates an in-progress :ref:`ref_flyteidl.admin.Execution`.
     * @param idProject Name of the project the resource belongs to.
     * @param idDomain Name of the domain the resource belongs to.
     * A domain can be considered as a subset within a specific project.
     * @param idName User or system provided value for the resource.
     * @param body
     * @returns adminExecutionTerminateResponse A successful response.
     * @throws ApiError
     */
    public static terminateExecution(
        idProject: string,
        idDomain: string,
        idName: string,
        body: adminExecutionTerminateRequest,
    ): CancelablePromise<adminExecutionTerminateResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/executions/{id.project}/{id.domain}/{id.name}',
            path: {
                'id.project': idProject,
                'id.domain': idDomain,
                'id.name': idName,
            },
            body: body,
        });
    }

    /**
     * Update execution belonging to project domain :ref:`ref_flyteidl.admin.Execution`.
     * @param idProject Name of the project the resource belongs to.
     * @param idDomain Name of the domain the resource belongs to.
     * A domain can be considered as a subset within a specific project.
     * @param idName User or system provided value for the resource.
     * @param body
     * @returns adminExecutionUpdateResponse A successful response.
     * @throws ApiError
     */
    public static updateExecution(
        idProject: string,
        idDomain: string,
        idName: string,
        body: adminExecutionUpdateRequest,
    ): CancelablePromise<adminExecutionUpdateResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/executions/{id.project}/{id.domain}/{id.name}',
            path: {
                'id.project': idProject,
                'id.domain': idDomain,
                'id.name': idName,
            },
            body: body,
        });
    }

    /**
     * Fetch a list of :ref:`ref_flyteidl.admin.NamedEntityIdentifier` of launch plan objects.
     * @param project Name of the project that contains the identifiers.
     * +required
     * @param domain Name of the domain the identifiers belongs to within the project.
     * +required
     * @param limit Indicates the number of resources to be returned.
     * +required.
     * @param token In the case of multiple pages of results, the server-provided token can be used to fetch the next page
     * in a query.
     * +optional.
     * @param sortByKey Indicates an attribute to sort the response values.
     * +required.
     * @param sortByDirection Indicates the direction to apply sort key for response values.
     * +optional.
     *
     * - DESCENDING: By default, fields are sorted in descending order.
     * @param filters Indicates a list of filters passed as string.
     * +optional.
     * @returns adminNamedEntityIdentifierList A successful response.
     * @throws ApiError
     */
    public static listLaunchPlanIds(
        project: string,
        domain: string,
        limit?: number,
        token?: string,
        sortByKey?: string,
        sortByDirection: 'DESCENDING' | 'ASCENDING' = 'DESCENDING',
        filters?: string,
    ): CancelablePromise<adminNamedEntityIdentifierList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/launch_plan_ids/{project}/{domain}',
            path: {
                'project': project,
                'domain': domain,
            },
            query: {
                'limit': limit,
                'token': token,
                'sort_by.key': sortByKey,
                'sort_by.direction': sortByDirection,
                'filters': filters,
            },
        });
    }

    /**
     * Create and upload a :ref:`ref_flyteidl.admin.LaunchPlan` definition
     * @param body
     * @returns adminLaunchPlanCreateResponse A successful response.
     * @throws ApiError
     */
    public static createLaunchPlan(
        body: adminLaunchPlanCreateRequest,
    ): CancelablePromise<adminLaunchPlanCreateResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/launch_plans',
            body: body,
        });
    }

    /**
     * Fetch a list of :ref:`ref_flyteidl.admin.LaunchPlan` definitions.
     * @param idProject Name of the project the resource belongs to.
     * @param idDomain Name of the domain the resource belongs to.
     * A domain can be considered as a subset within a specific project.
     * @param idName User provided value for the resource.
     * The combination of project + domain + name uniquely identifies the resource.
     * +optional - in certain contexts - like 'List API', 'Launch plans'.
     * @param limit Indicates the number of resources to be returned.
     * +required.
     * @param token In the case of multiple pages of results, this server-provided token can be used to fetch the next page
     * in a query.
     * +optional.
     * @param filters Indicates a list of filters passed as string.
     * More info on constructing filters : <Link>
     * +optional.
     * @param sortByKey Indicates an attribute to sort the response values.
     * +required.
     * @param sortByDirection Indicates the direction to apply sort key for response values.
     * +optional.
     *
     * - DESCENDING: By default, fields are sorted in descending order.
     * @returns adminLaunchPlanList A successful response.
     * @throws ApiError
     */
    public static listLaunchPlans2(
        idProject: string,
        idDomain: string,
        idName?: string,
        limit?: number,
        token?: string,
        filters?: string,
        sortByKey?: string,
        sortByDirection: 'DESCENDING' | 'ASCENDING' = 'DESCENDING',
    ): CancelablePromise<adminLaunchPlanList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/launch_plans/{id.project}/{id.domain}',
            path: {
                'id.project': idProject,
                'id.domain': idDomain,
            },
            query: {
                'id.name': idName,
                'limit': limit,
                'token': token,
                'filters': filters,
                'sort_by.key': sortByKey,
                'sort_by.direction': sortByDirection,
            },
        });
    }

    /**
     * Fetch a list of :ref:`ref_flyteidl.admin.LaunchPlan` definitions.
     * @param idProject Name of the project the resource belongs to.
     * @param idDomain Name of the domain the resource belongs to.
     * A domain can be considered as a subset within a specific project.
     * @param idName User provided value for the resource.
     * The combination of project + domain + name uniquely identifies the resource.
     * +optional - in certain contexts - like 'List API', 'Launch plans'
     * @param limit Indicates the number of resources to be returned.
     * +required.
     * @param token In the case of multiple pages of results, this server-provided token can be used to fetch the next page
     * in a query.
     * +optional.
     * @param filters Indicates a list of filters passed as string.
     * More info on constructing filters : <Link>
     * +optional.
     * @param sortByKey Indicates an attribute to sort the response values.
     * +required.
     * @param sortByDirection Indicates the direction to apply sort key for response values.
     * +optional.
     *
     * - DESCENDING: By default, fields are sorted in descending order.
     * @returns adminLaunchPlanList A successful response.
     * @throws ApiError
     */
    public static listLaunchPlans(
        idProject: string,
        idDomain: string,
        idName: string,
        limit?: number,
        token?: string,
        filters?: string,
        sortByKey?: string,
        sortByDirection: 'DESCENDING' | 'ASCENDING' = 'DESCENDING',
    ): CancelablePromise<adminLaunchPlanList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/launch_plans/{id.project}/{id.domain}/{id.name}',
            path: {
                'id.project': idProject,
                'id.domain': idDomain,
                'id.name': idName,
            },
            query: {
                'limit': limit,
                'token': token,
                'filters': filters,
                'sort_by.key': sortByKey,
                'sort_by.direction': sortByDirection,
            },
        });
    }

    /**
     * Fetch a :ref:`ref_flyteidl.admin.LaunchPlan` definition.
     * @param idProject Name of the project the resource belongs to.
     * @param idDomain Name of the domain the resource belongs to.
     * A domain can be considered as a subset within a specific project.
     * @param idName User provided value for the resource.
     * @param idVersion Specific version of the resource.
     * @param idResourceType Identifies the specific type of resource that this identifier corresponds to.
     *
     * - DATASET: A dataset represents an entity modeled in Flyte DataCatalog. A Dataset is also a versioned entity and can be a compilation of multiple individual objects.
     * Eventually all Catalog objects should be modeled similar to Flyte Objects. The Dataset entities makes it possible for the UI  and CLI to act on the objects
     * in a similar manner to other Flyte objects
     * @returns adminLaunchPlan A successful response.
     * @throws ApiError
     */
    public static getLaunchPlan(
        idProject: string,
        idDomain: string,
        idName: string,
        idVersion: string,
        idResourceType: 'UNSPECIFIED' | 'TASK' | 'WORKFLOW' | 'LAUNCH_PLAN' | 'DATASET' = 'UNSPECIFIED',
    ): CancelablePromise<adminLaunchPlan> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/launch_plans/{id.project}/{id.domain}/{id.name}/{id.version}',
            path: {
                'id.project': idProject,
                'id.domain': idDomain,
                'id.name': idName,
                'id.version': idVersion,
            },
            query: {
                'id.resource_type': idResourceType,
            },
        });
    }

    /**
     * Updates the status of a registered :ref:`ref_flyteidl.admin.LaunchPlan`.
     * @param idProject Name of the project the resource belongs to.
     * @param idDomain Name of the domain the resource belongs to.
     * A domain can be considered as a subset within a specific project.
     * @param idName User provided value for the resource.
     * @param idVersion Specific version of the resource.
     * @param body
     * @returns adminLaunchPlanUpdateResponse A successful response.
     * @throws ApiError
     */
    public static updateLaunchPlan(
        idProject: string,
        idDomain: string,
        idName: string,
        idVersion: string,
        body: adminLaunchPlanUpdateRequest,
    ): CancelablePromise<adminLaunchPlanUpdateResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/launch_plans/{id.project}/{id.domain}/{id.name}/{id.version}',
            path: {
                'id.project': idProject,
                'id.domain': idDomain,
                'id.name': idName,
                'id.version': idVersion,
            },
            body: body,
        });
    }

    /**
     * Lists custom :ref:`ref_flyteidl.admin.MatchableAttributesConfiguration` for a specific resource type.
     * @param resourceType +required.
     *
     * - TASK_RESOURCE: Applies to customizable task resource requests and limits.
     * - CLUSTER_RESOURCE: Applies to configuring templated kubernetes cluster resources.
     * - EXECUTION_QUEUE: Configures task and dynamic task execution queue assignment.
     * - EXECUTION_CLUSTER_LABEL: Configures the K8s cluster label to be used for execution to be run
     * - QUALITY_OF_SERVICE_SPECIFICATION: Configures default quality of service when undefined in an execution spec.
     * - PLUGIN_OVERRIDE: Selects configurable plugin implementation behavior for a given task type.
     * - WORKFLOW_EXECUTION_CONFIG: Adds defaults for customizable workflow-execution specifications and overrides.
     * - CLUSTER_ASSIGNMENT: Controls how to select an available cluster on which this execution should run.
     * @returns adminListMatchableAttributesResponse A successful response.
     * @throws ApiError
     */
    public static listMatchableAttributes(
        resourceType: 'TASK_RESOURCE' | 'CLUSTER_RESOURCE' | 'EXECUTION_QUEUE' | 'EXECUTION_CLUSTER_LABEL' | 'QUALITY_OF_SERVICE_SPECIFICATION' | 'PLUGIN_OVERRIDE' | 'WORKFLOW_EXECUTION_CONFIG' | 'CLUSTER_ASSIGNMENT' = 'TASK_RESOURCE',
    ): CancelablePromise<adminListMatchableAttributesResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/matchable_attributes',
            query: {
                'resource_type': resourceType,
            },
        });
    }

    /**
     * Fetches runtime metrics for a :ref:`ref_flyteidl.admin.Execution`.
     * @param idProject Name of the project the resource belongs to.
     * @param idDomain Name of the domain the resource belongs to.
     * A domain can be considered as a subset within a specific project.
     * @param idName User or system provided value for the resource.
     * @param depth depth defines the number of Flyte entity levels to traverse when breaking down execution details.
     * @returns adminWorkflowExecutionGetMetricsResponse A successful response.
     * @throws ApiError
     */
    public static getExecutionMetrics(
        idProject: string,
        idDomain: string,
        idName: string,
        depth?: number,
    ): CancelablePromise<adminWorkflowExecutionGetMetricsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/metrics/executions/{id.project}/{id.domain}/{id.name}',
            path: {
                'id.project': idProject,
                'id.domain': idDomain,
                'id.name': idName,
            },
            query: {
                'depth': depth,
            },
        });
    }

    /**
     * Returns a :ref:`ref_flyteidl.admin.NamedEntity` object.
     * @param resourceType Resource type of the metadata to get. One of Task, Workflow or LaunchPlan.
     * +required
     * @param idProject Name of the project the resource belongs to.
     * @param idDomain Name of the domain the resource belongs to.
     * A domain can be considered as a subset within a specific project.
     * @param idName User provided value for the resource.
     * The combination of project + domain + name uniquely identifies the resource.
     * +optional - in certain contexts - like 'List API', 'Launch plans'
     * @returns adminNamedEntity A successful response.
     * @throws ApiError
     */
    public static getNamedEntity(
        resourceType: 'UNSPECIFIED' | 'TASK' | 'WORKFLOW' | 'LAUNCH_PLAN' | 'DATASET',
        idProject: string,
        idDomain: string,
        idName: string,
    ): CancelablePromise<adminNamedEntity> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/named_entities/{resource_type}/{id.project}/{id.domain}/{id.name}',
            path: {
                'resource_type': resourceType,
                'id.project': idProject,
                'id.domain': idDomain,
                'id.name': idName,
            },
        });
    }

    /**
     * Updates a :ref:`ref_flyteidl.admin.NamedEntity` object.
     * @param resourceType Resource type of the metadata to update
     * +required
     * @param idProject Name of the project the resource belongs to.
     * @param idDomain Name of the domain the resource belongs to.
     * A domain can be considered as a subset within a specific project.
     * @param idName User provided value for the resource.
     * The combination of project + domain + name uniquely identifies the resource.
     * +optional - in certain contexts - like 'List API', 'Launch plans'
     * @param body
     * @returns adminNamedEntityUpdateResponse A successful response.
     * @throws ApiError
     */
    public static updateNamedEntity(
        resourceType: 'UNSPECIFIED' | 'TASK' | 'WORKFLOW' | 'LAUNCH_PLAN' | 'DATASET',
        idProject: string,
        idDomain: string,
        idName: string,
        body: adminNamedEntityUpdateRequest,
    ): CancelablePromise<adminNamedEntityUpdateResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/named_entities/{resource_type}/{id.project}/{id.domain}/{id.name}',
            path: {
                'resource_type': resourceType,
                'id.project': idProject,
                'id.domain': idDomain,
                'id.name': idName,
            },
            body: body,
        });
    }

    /**
     * Returns a list of :ref:`ref_flyteidl.admin.NamedEntity` objects.
     * @param resourceType Resource type of the metadata to query. One of Task, Workflow or LaunchPlan.
     * +required
     * @param project Name of the project that contains the identifiers.
     * +required
     * @param domain Name of the domain the identifiers belongs to within the project.
     * @param limit Indicates the number of resources to be returned.
     * @param token In the case of multiple pages of results, the server-provided token can be used to fetch the next page
     * in a query.
     * +optional.
     * @param sortByKey Indicates an attribute to sort the response values.
     * +required.
     * @param sortByDirection Indicates the direction to apply sort key for response values.
     * +optional.
     *
     * - DESCENDING: By default, fields are sorted in descending order.
     * @param filters Indicates a list of filters passed as string.
     * +optional.
     * @returns adminNamedEntityList A successful response.
     * @throws ApiError
     */
    public static listNamedEntities(
        resourceType: 'UNSPECIFIED' | 'TASK' | 'WORKFLOW' | 'LAUNCH_PLAN' | 'DATASET',
        project: string,
        domain: string,
        limit?: number,
        token?: string,
        sortByKey?: string,
        sortByDirection: 'DESCENDING' | 'ASCENDING' = 'DESCENDING',
        filters?: string,
    ): CancelablePromise<adminNamedEntityList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/named_entities/{resource_type}/{project}/{domain}',
            path: {
                'resource_type': resourceType,
                'project': project,
                'domain': domain,
            },
            query: {
                'limit': limit,
                'token': token,
                'sort_by.key': sortByKey,
                'sort_by.direction': sortByDirection,
                'filters': filters,
            },
        });
    }

    /**
     * Fetches a :ref:`ref_flyteidl.admin.NodeExecution`.
     * @param idExecutionIdProject Name of the project the resource belongs to.
     * @param idExecutionIdDomain Name of the domain the resource belongs to.
     * A domain can be considered as a subset within a specific project.
     * @param idExecutionIdName User or system provided value for the resource.
     * @param idNodeId
     * @returns flyteidladminNodeExecution A successful response.
     * @throws ApiError
     */
    public static getNodeExecution(
        idExecutionIdProject: string,
        idExecutionIdDomain: string,
        idExecutionIdName: string,
        idNodeId: string,
    ): CancelablePromise<flyteidladminNodeExecution> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/node_executions/{id.execution_id.project}/{id.execution_id.domain}/{id.execution_id.name}/{id.node_id}',
            path: {
                'id.execution_id.project': idExecutionIdProject,
                'id.execution_id.domain': idExecutionIdDomain,
                'id.execution_id.name': idExecutionIdName,
                'id.node_id': idNodeId,
            },
        });
    }

    /**
     * Fetch a list of :ref:`ref_flyteidl.admin.NodeExecution`.
     * @param workflowExecutionIdProject Name of the project the resource belongs to.
     * @param workflowExecutionIdDomain Name of the domain the resource belongs to.
     * A domain can be considered as a subset within a specific project.
     * @param workflowExecutionIdName User or system provided value for the resource.
     * @param limit Indicates the number of resources to be returned.
     * +required.
     * @param token
     * @param filters Indicates a list of filters passed as string.
     * More info on constructing filters : <Link>
     * +optional.
     * @param sortByKey Indicates an attribute to sort the response values.
     * +required.
     * @param sortByDirection Indicates the direction to apply sort key for response values.
     * +optional.
     *
     * - DESCENDING: By default, fields are sorted in descending order.
     * @param uniqueParentId Unique identifier of the parent node in the execution
     * +optional.
     * @returns adminNodeExecutionList A successful response.
     * @throws ApiError
     */
    public static listNodeExecutions(
        workflowExecutionIdProject: string,
        workflowExecutionIdDomain: string,
        workflowExecutionIdName: string,
        limit?: number,
        token?: string,
        filters?: string,
        sortByKey?: string,
        sortByDirection: 'DESCENDING' | 'ASCENDING' = 'DESCENDING',
        uniqueParentId?: string,
    ): CancelablePromise<adminNodeExecutionList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/node_executions/{workflow_execution_id.project}/{workflow_execution_id.domain}/{workflow_execution_id.name}',
            path: {
                'workflow_execution_id.project': workflowExecutionIdProject,
                'workflow_execution_id.domain': workflowExecutionIdDomain,
                'workflow_execution_id.name': workflowExecutionIdName,
            },
            query: {
                'limit': limit,
                'token': token,
                'filters': filters,
                'sort_by.key': sortByKey,
                'sort_by.direction': sortByDirection,
                'unique_parent_id': uniqueParentId,
            },
        });
    }

    /**
     * Creates or updates custom :ref:`ref_flyteidl.admin.MatchableAttributesConfiguration` at the project level
     * @param attributesProject Unique project id for which this set of attributes will be applied.
     * @param body
     * @returns adminProjectAttributesUpdateResponse A successful response.
     * @throws ApiError
     */
    public static updateProjectAttributes(
        attributesProject: string,
        body: adminProjectAttributesUpdateRequest,
    ): CancelablePromise<adminProjectAttributesUpdateResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/project_attributes/{attributes.project}',
            path: {
                'attributes.project': attributesProject,
            },
            body: body,
        });
    }

    /**
     * Fetches custom :ref:`ref_flyteidl.admin.MatchableAttributesConfiguration` for a project and domain.
     * @param project Unique project id which this set of attributes references.
     * +required
     * @param resourceType Which type of matchable attributes to return.
     * +required.
     *
     * - TASK_RESOURCE: Applies to customizable task resource requests and limits.
     * - CLUSTER_RESOURCE: Applies to configuring templated kubernetes cluster resources.
     * - EXECUTION_QUEUE: Configures task and dynamic task execution queue assignment.
     * - EXECUTION_CLUSTER_LABEL: Configures the K8s cluster label to be used for execution to be run
     * - QUALITY_OF_SERVICE_SPECIFICATION: Configures default quality of service when undefined in an execution spec.
     * - PLUGIN_OVERRIDE: Selects configurable plugin implementation behavior for a given task type.
     * - WORKFLOW_EXECUTION_CONFIG: Adds defaults for customizable workflow-execution specifications and overrides.
     * - CLUSTER_ASSIGNMENT: Controls how to select an available cluster on which this execution should run.
     * @returns adminProjectAttributesGetResponse A successful response.
     * @throws ApiError
     */
    public static getProjectAttributes(
        project: string,
        resourceType: 'TASK_RESOURCE' | 'CLUSTER_RESOURCE' | 'EXECUTION_QUEUE' | 'EXECUTION_CLUSTER_LABEL' | 'QUALITY_OF_SERVICE_SPECIFICATION' | 'PLUGIN_OVERRIDE' | 'WORKFLOW_EXECUTION_CONFIG' | 'CLUSTER_ASSIGNMENT' = 'TASK_RESOURCE',
    ): CancelablePromise<adminProjectAttributesGetResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/project_attributes/{project}',
            path: {
                'project': project,
            },
            query: {
                'resource_type': resourceType,
            },
        });
    }

    /**
     * Deletes custom :ref:`ref_flyteidl.admin.MatchableAttributesConfiguration` for a project and domain.
     * @param project Unique project id which this set of attributes references.
     * +required
     * @param body
     * @returns adminProjectAttributesDeleteResponse A successful response.
     * @throws ApiError
     */
    public static deleteProjectAttributes(
        project: string,
        body: adminProjectAttributesDeleteRequest,
    ): CancelablePromise<adminProjectAttributesDeleteResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/project_attributes/{project}',
            path: {
                'project': project,
            },
            body: body,
        });
    }

    /**
     * Creates or updates custom :ref:`ref_flyteidl.admin.MatchableAttributesConfiguration` for a project and domain.
     * @param attributesProject Unique project id for which this set of attributes will be applied.
     * @param attributesDomain Unique domain id for which this set of attributes will be applied.
     * @param body
     * @returns adminProjectDomainAttributesUpdateResponse A successful response.
     * @throws ApiError
     */
    public static updateProjectDomainAttributes(
        attributesProject: string,
        attributesDomain: string,
        body: adminProjectDomainAttributesUpdateRequest,
    ): CancelablePromise<adminProjectDomainAttributesUpdateResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/project_domain_attributes/{attributes.project}/{attributes.domain}',
            path: {
                'attributes.project': attributesProject,
                'attributes.domain': attributesDomain,
            },
            body: body,
        });
    }

    /**
     * Fetches custom :ref:`ref_flyteidl.admin.MatchableAttributesConfiguration` for a project and domain.
     * @param project Unique project id which this set of attributes references.
     * +required
     * @param domain Unique domain id which this set of attributes references.
     * +required
     * @param resourceType Which type of matchable attributes to return.
     * +required.
     *
     * - TASK_RESOURCE: Applies to customizable task resource requests and limits.
     * - CLUSTER_RESOURCE: Applies to configuring templated kubernetes cluster resources.
     * - EXECUTION_QUEUE: Configures task and dynamic task execution queue assignment.
     * - EXECUTION_CLUSTER_LABEL: Configures the K8s cluster label to be used for execution to be run
     * - QUALITY_OF_SERVICE_SPECIFICATION: Configures default quality of service when undefined in an execution spec.
     * - PLUGIN_OVERRIDE: Selects configurable plugin implementation behavior for a given task type.
     * - WORKFLOW_EXECUTION_CONFIG: Adds defaults for customizable workflow-execution specifications and overrides.
     * - CLUSTER_ASSIGNMENT: Controls how to select an available cluster on which this execution should run.
     * @returns adminProjectDomainAttributesGetResponse A successful response.
     * @throws ApiError
     */
    public static getProjectDomainAttributes(
        project: string,
        domain: string,
        resourceType: 'TASK_RESOURCE' | 'CLUSTER_RESOURCE' | 'EXECUTION_QUEUE' | 'EXECUTION_CLUSTER_LABEL' | 'QUALITY_OF_SERVICE_SPECIFICATION' | 'PLUGIN_OVERRIDE' | 'WORKFLOW_EXECUTION_CONFIG' | 'CLUSTER_ASSIGNMENT' = 'TASK_RESOURCE',
    ): CancelablePromise<adminProjectDomainAttributesGetResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/project_domain_attributes/{project}/{domain}',
            path: {
                'project': project,
                'domain': domain,
            },
            query: {
                'resource_type': resourceType,
            },
        });
    }

    /**
     * Deletes custom :ref:`ref_flyteidl.admin.MatchableAttributesConfiguration` for a project and domain.
     * @param project Unique project id which this set of attributes references.
     * +required
     * @param domain Unique domain id which this set of attributes references.
     * +required
     * @param body
     * @returns adminProjectDomainAttributesDeleteResponse A successful response.
     * @throws ApiError
     */
    public static deleteProjectDomainAttributes(
        project: string,
        domain: string,
        body: adminProjectDomainAttributesDeleteRequest,
    ): CancelablePromise<adminProjectDomainAttributesDeleteResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/project_domain_attributes/{project}/{domain}',
            path: {
                'project': project,
                'domain': domain,
            },
            body: body,
        });
    }

    /**
     * Fetches a list of :ref:`ref_flyteidl.admin.Project`
     * @param limit Indicates the number of projects to be returned.
     * +required.
     * @param token In the case of multiple pages of results, this server-provided token can be used to fetch the next page
     * in a query.
     * +optional.
     * @param filters Indicates a list of filters passed as string.
     * More info on constructing filters : <Link>
     * +optional.
     * @param sortByKey Indicates an attribute to sort the response values.
     * +required.
     * @param sortByDirection Indicates the direction to apply sort key for response values.
     * +optional.
     *
     * - DESCENDING: By default, fields are sorted in descending order.
     * @returns adminProjects A successful response.
     * @throws ApiError
     */
    public static listProjects(
        limit?: number,
        token?: string,
        filters?: string,
        sortByKey?: string,
        sortByDirection: 'DESCENDING' | 'ASCENDING' = 'DESCENDING',
    ): CancelablePromise<adminProjects> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/projects',
            query: {
                'limit': limit,
                'token': token,
                'filters': filters,
                'sort_by.key': sortByKey,
                'sort_by.direction': sortByDirection,
            },
        });
    }

    /**
     * Registers a :ref:`ref_flyteidl.admin.Project` with the Flyte deployment.
     * @param body
     * @returns adminProjectRegisterResponse A successful response.
     * @throws ApiError
     */
    public static registerProject(
        body: adminProjectRegisterRequest,
    ): CancelablePromise<adminProjectRegisterResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/projects',
            body: body,
        });
    }

    /**
     * Updates an existing :ref:`ref_flyteidl.admin.Project`
     * flyteidl.admin.Project should be passed but the domains property should be empty;
     * it will be ignored in the handler as domains cannot be updated via this API.
     * @param id Globally unique project name.
     * @param body
     * @returns adminProjectUpdateResponse A successful response.
     * @throws ApiError
     */
    public static updateProject(
        id: string,
        body: adminProject,
    ): CancelablePromise<adminProjectUpdateResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/projects/{id}',
            path: {
                'id': id,
            },
            body: body,
        });
    }

    /**
     * Fetches a :ref:`ref_flyteidl.admin.TaskExecution`.
     * @param idNodeExecutionIdExecutionIdProject Name of the project the resource belongs to.
     * @param idNodeExecutionIdExecutionIdDomain Name of the domain the resource belongs to.
     * A domain can be considered as a subset within a specific project.
     * @param idNodeExecutionIdExecutionIdName User or system provided value for the resource.
     * @param idNodeExecutionIdNodeId
     * @param idTaskIdProject Name of the project the resource belongs to.
     * @param idTaskIdDomain Name of the domain the resource belongs to.
     * A domain can be considered as a subset within a specific project.
     * @param idTaskIdName User provided value for the resource.
     * @param idTaskIdVersion Specific version of the resource.
     * @param idRetryAttempt
     * @param idTaskIdResourceType Identifies the specific type of resource that this identifier corresponds to.
     *
     * - DATASET: A dataset represents an entity modeled in Flyte DataCatalog. A Dataset is also a versioned entity and can be a compilation of multiple individual objects.
     * Eventually all Catalog objects should be modeled similar to Flyte Objects. The Dataset entities makes it possible for the UI  and CLI to act on the objects
     * in a similar manner to other Flyte objects
     * @returns flyteidladminTaskExecution A successful response.
     * @throws ApiError
     */
    public static getTaskExecution(
        idNodeExecutionIdExecutionIdProject: string,
        idNodeExecutionIdExecutionIdDomain: string,
        idNodeExecutionIdExecutionIdName: string,
        idNodeExecutionIdNodeId: string,
        idTaskIdProject: string,
        idTaskIdDomain: string,
        idTaskIdName: string,
        idTaskIdVersion: string,
        idRetryAttempt: number,
        idTaskIdResourceType: 'UNSPECIFIED' | 'TASK' | 'WORKFLOW' | 'LAUNCH_PLAN' | 'DATASET' = 'UNSPECIFIED',
    ): CancelablePromise<flyteidladminTaskExecution> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/task_executions/{id.node_execution_id.execution_id.project}/{id.node_execution_id.execution_id.domain}/{id.node_execution_id.execution_id.name}/{id.node_execution_id.node_id}/{id.task_id.project}/{id.task_id.domain}/{id.task_id.name}/{id.task_id.version}/{id.retry_attempt}',
            path: {
                'id.node_execution_id.execution_id.project': idNodeExecutionIdExecutionIdProject,
                'id.node_execution_id.execution_id.domain': idNodeExecutionIdExecutionIdDomain,
                'id.node_execution_id.execution_id.name': idNodeExecutionIdExecutionIdName,
                'id.node_execution_id.node_id': idNodeExecutionIdNodeId,
                'id.task_id.project': idTaskIdProject,
                'id.task_id.domain': idTaskIdDomain,
                'id.task_id.name': idTaskIdName,
                'id.task_id.version': idTaskIdVersion,
                'id.retry_attempt': idRetryAttempt,
            },
            query: {
                'id.task_id.resource_type': idTaskIdResourceType,
            },
        });
    }

    /**
     * Fetches a list of :ref:`ref_flyteidl.admin.TaskExecution`.
     * @param nodeExecutionIdExecutionIdProject Name of the project the resource belongs to.
     * @param nodeExecutionIdExecutionIdDomain Name of the domain the resource belongs to.
     * A domain can be considered as a subset within a specific project.
     * @param nodeExecutionIdExecutionIdName User or system provided value for the resource.
     * @param nodeExecutionIdNodeId
     * @param limit Indicates the number of resources to be returned.
     * +required.
     * @param token In the case of multiple pages of results, the server-provided token can be used to fetch the next page
     * in a query.
     * +optional.
     * @param filters Indicates a list of filters passed as string.
     * More info on constructing filters : <Link>
     * +optional.
     * @param sortByKey Indicates an attribute to sort the response values.
     * +required.
     * @param sortByDirection Indicates the direction to apply sort key for response values.
     * +optional.
     *
     * - DESCENDING: By default, fields are sorted in descending order.
     * @returns adminTaskExecutionList A successful response.
     * @throws ApiError
     */
    public static listTaskExecutions(
        nodeExecutionIdExecutionIdProject: string,
        nodeExecutionIdExecutionIdDomain: string,
        nodeExecutionIdExecutionIdName: string,
        nodeExecutionIdNodeId: string,
        limit?: number,
        token?: string,
        filters?: string,
        sortByKey?: string,
        sortByDirection: 'DESCENDING' | 'ASCENDING' = 'DESCENDING',
    ): CancelablePromise<adminTaskExecutionList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/task_executions/{node_execution_id.execution_id.project}/{node_execution_id.execution_id.domain}/{node_execution_id.execution_id.name}/{node_execution_id.node_id}',
            path: {
                'node_execution_id.execution_id.project': nodeExecutionIdExecutionIdProject,
                'node_execution_id.execution_id.domain': nodeExecutionIdExecutionIdDomain,
                'node_execution_id.execution_id.name': nodeExecutionIdExecutionIdName,
                'node_execution_id.node_id': nodeExecutionIdNodeId,
            },
            query: {
                'limit': limit,
                'token': token,
                'filters': filters,
                'sort_by.key': sortByKey,
                'sort_by.direction': sortByDirection,
            },
        });
    }

    /**
     * Fetch a list of :ref:`ref_flyteidl.admin.NamedEntityIdentifier` of task objects.
     * @param project Name of the project that contains the identifiers.
     * +required
     * @param domain Name of the domain the identifiers belongs to within the project.
     * +required
     * @param limit Indicates the number of resources to be returned.
     * +required.
     * @param token In the case of multiple pages of results, the server-provided token can be used to fetch the next page
     * in a query.
     * +optional.
     * @param sortByKey Indicates an attribute to sort the response values.
     * +required.
     * @param sortByDirection Indicates the direction to apply sort key for response values.
     * +optional.
     *
     * - DESCENDING: By default, fields are sorted in descending order.
     * @param filters Indicates a list of filters passed as string.
     * +optional.
     * @returns adminNamedEntityIdentifierList A successful response.
     * @throws ApiError
     */
    public static listTaskIds(
        project: string,
        domain: string,
        limit?: number,
        token?: string,
        sortByKey?: string,
        sortByDirection: 'DESCENDING' | 'ASCENDING' = 'DESCENDING',
        filters?: string,
    ): CancelablePromise<adminNamedEntityIdentifierList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/task_ids/{project}/{domain}',
            path: {
                'project': project,
                'domain': domain,
            },
            query: {
                'limit': limit,
                'token': token,
                'sort_by.key': sortByKey,
                'sort_by.direction': sortByDirection,
                'filters': filters,
            },
        });
    }

    /**
     * Create and upload a :ref:`ref_flyteidl.admin.Task` definition
     * @param body
     * @returns flyteidladminTaskCreateResponse A successful response.
     * @throws ApiError
     */
    public static createTask(
        body: flyteidladminTaskCreateRequest,
    ): CancelablePromise<flyteidladminTaskCreateResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/tasks',
            body: body,
        });
    }

    /**
     * Fetch a list of :ref:`ref_flyteidl.admin.Task` definitions.
     * @param idProject Name of the project the resource belongs to.
     * @param idDomain Name of the domain the resource belongs to.
     * A domain can be considered as a subset within a specific project.
     * @param idName User provided value for the resource.
     * The combination of project + domain + name uniquely identifies the resource.
     * +optional - in certain contexts - like 'List API', 'Launch plans'.
     * @param limit Indicates the number of resources to be returned.
     * +required.
     * @param token In the case of multiple pages of results, this server-provided token can be used to fetch the next page
     * in a query.
     * +optional.
     * @param filters Indicates a list of filters passed as string.
     * More info on constructing filters : <Link>
     * +optional.
     * @param sortByKey Indicates an attribute to sort the response values.
     * +required.
     * @param sortByDirection Indicates the direction to apply sort key for response values.
     * +optional.
     *
     * - DESCENDING: By default, fields are sorted in descending order.
     * @returns adminTaskList A successful response.
     * @throws ApiError
     */
    public static listTasks2(
        idProject: string,
        idDomain: string,
        idName?: string,
        limit?: number,
        token?: string,
        filters?: string,
        sortByKey?: string,
        sortByDirection: 'DESCENDING' | 'ASCENDING' = 'DESCENDING',
    ): CancelablePromise<adminTaskList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/tasks/{id.project}/{id.domain}',
            path: {
                'id.project': idProject,
                'id.domain': idDomain,
            },
            query: {
                'id.name': idName,
                'limit': limit,
                'token': token,
                'filters': filters,
                'sort_by.key': sortByKey,
                'sort_by.direction': sortByDirection,
            },
        });
    }

    /**
     * Fetch a list of :ref:`ref_flyteidl.admin.Task` definitions.
     * @param idProject Name of the project the resource belongs to.
     * @param idDomain Name of the domain the resource belongs to.
     * A domain can be considered as a subset within a specific project.
     * @param idName User provided value for the resource.
     * The combination of project + domain + name uniquely identifies the resource.
     * +optional - in certain contexts - like 'List API', 'Launch plans'
     * @param limit Indicates the number of resources to be returned.
     * +required.
     * @param token In the case of multiple pages of results, this server-provided token can be used to fetch the next page
     * in a query.
     * +optional.
     * @param filters Indicates a list of filters passed as string.
     * More info on constructing filters : <Link>
     * +optional.
     * @param sortByKey Indicates an attribute to sort the response values.
     * +required.
     * @param sortByDirection Indicates the direction to apply sort key for response values.
     * +optional.
     *
     * - DESCENDING: By default, fields are sorted in descending order.
     * @returns adminTaskList A successful response.
     * @throws ApiError
     */
    public static listTasks(
        idProject: string,
        idDomain: string,
        idName: string,
        limit?: number,
        token?: string,
        filters?: string,
        sortByKey?: string,
        sortByDirection: 'DESCENDING' | 'ASCENDING' = 'DESCENDING',
    ): CancelablePromise<adminTaskList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/tasks/{id.project}/{id.domain}/{id.name}',
            path: {
                'id.project': idProject,
                'id.domain': idDomain,
                'id.name': idName,
            },
            query: {
                'limit': limit,
                'token': token,
                'filters': filters,
                'sort_by.key': sortByKey,
                'sort_by.direction': sortByDirection,
            },
        });
    }

    /**
     * Fetch a :ref:`ref_flyteidl.admin.Task` definition.
     * @param idProject Name of the project the resource belongs to.
     * @param idDomain Name of the domain the resource belongs to.
     * A domain can be considered as a subset within a specific project.
     * @param idName User provided value for the resource.
     * @param idVersion Specific version of the resource.
     * @param idResourceType Identifies the specific type of resource that this identifier corresponds to.
     *
     * - DATASET: A dataset represents an entity modeled in Flyte DataCatalog. A Dataset is also a versioned entity and can be a compilation of multiple individual objects.
     * Eventually all Catalog objects should be modeled similar to Flyte Objects. The Dataset entities makes it possible for the UI  and CLI to act on the objects
     * in a similar manner to other Flyte objects
     * @returns adminTask A successful response.
     * @throws ApiError
     */
    public static getTask(
        idProject: string,
        idDomain: string,
        idName: string,
        idVersion: string,
        idResourceType: 'UNSPECIFIED' | 'TASK' | 'WORKFLOW' | 'LAUNCH_PLAN' | 'DATASET' = 'UNSPECIFIED',
    ): CancelablePromise<adminTask> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/tasks/{id.project}/{id.domain}/{id.name}/{id.version}',
            path: {
                'id.project': idProject,
                'id.domain': idDomain,
                'id.name': idName,
                'id.version': idVersion,
            },
            query: {
                'id.resource_type': idResourceType,
            },
        });
    }

    /**
     * @returns adminGetVersionResponse A successful response.
     * @throws ApiError
     */
    public static getVersion(): CancelablePromise<adminGetVersionResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/version',
        });
    }

    /**
     * Creates or updates custom :ref:`ref_flyteidl.admin.MatchableAttributesConfiguration` for a project, domain and workflow.
     * @param attributesProject Unique project id for which this set of attributes will be applied.
     * @param attributesDomain Unique domain id for which this set of attributes will be applied.
     * @param attributesWorkflow Workflow name for which this set of attributes will be applied.
     * @param body
     * @returns adminWorkflowAttributesUpdateResponse A successful response.
     * @throws ApiError
     */
    public static updateWorkflowAttributes(
        attributesProject: string,
        attributesDomain: string,
        attributesWorkflow: string,
        body: adminWorkflowAttributesUpdateRequest,
    ): CancelablePromise<adminWorkflowAttributesUpdateResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/workflow_attributes/{attributes.project}/{attributes.domain}/{attributes.workflow}',
            path: {
                'attributes.project': attributesProject,
                'attributes.domain': attributesDomain,
                'attributes.workflow': attributesWorkflow,
            },
            body: body,
        });
    }

    /**
     * Fetches custom :ref:`ref_flyteidl.admin.MatchableAttributesConfiguration` for a project, domain and workflow.
     * @param project Unique project id which this set of attributes references.
     * +required
     * @param domain Unique domain id which this set of attributes references.
     * +required
     * @param workflow Workflow name which this set of attributes references.
     * +required
     * @param resourceType Which type of matchable attributes to return.
     * +required.
     *
     * - TASK_RESOURCE: Applies to customizable task resource requests and limits.
     * - CLUSTER_RESOURCE: Applies to configuring templated kubernetes cluster resources.
     * - EXECUTION_QUEUE: Configures task and dynamic task execution queue assignment.
     * - EXECUTION_CLUSTER_LABEL: Configures the K8s cluster label to be used for execution to be run
     * - QUALITY_OF_SERVICE_SPECIFICATION: Configures default quality of service when undefined in an execution spec.
     * - PLUGIN_OVERRIDE: Selects configurable plugin implementation behavior for a given task type.
     * - WORKFLOW_EXECUTION_CONFIG: Adds defaults for customizable workflow-execution specifications and overrides.
     * - CLUSTER_ASSIGNMENT: Controls how to select an available cluster on which this execution should run.
     * @returns adminWorkflowAttributesGetResponse A successful response.
     * @throws ApiError
     */
    public static getWorkflowAttributes(
        project: string,
        domain: string,
        workflow: string,
        resourceType: 'TASK_RESOURCE' | 'CLUSTER_RESOURCE' | 'EXECUTION_QUEUE' | 'EXECUTION_CLUSTER_LABEL' | 'QUALITY_OF_SERVICE_SPECIFICATION' | 'PLUGIN_OVERRIDE' | 'WORKFLOW_EXECUTION_CONFIG' | 'CLUSTER_ASSIGNMENT' = 'TASK_RESOURCE',
    ): CancelablePromise<adminWorkflowAttributesGetResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/workflow_attributes/{project}/{domain}/{workflow}',
            path: {
                'project': project,
                'domain': domain,
                'workflow': workflow,
            },
            query: {
                'resource_type': resourceType,
            },
        });
    }

    /**
     * Deletes custom :ref:`ref_flyteidl.admin.MatchableAttributesConfiguration` for a project, domain and workflow.
     * @param project Unique project id which this set of attributes references.
     * +required
     * @param domain Unique domain id which this set of attributes references.
     * +required
     * @param workflow Workflow name which this set of attributes references.
     * +required
     * @param body
     * @returns adminWorkflowAttributesDeleteResponse A successful response.
     * @throws ApiError
     */
    public static deleteWorkflowAttributes(
        project: string,
        domain: string,
        workflow: string,
        body: adminWorkflowAttributesDeleteRequest,
    ): CancelablePromise<adminWorkflowAttributesDeleteResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/workflow_attributes/{project}/{domain}/{workflow}',
            path: {
                'project': project,
                'domain': domain,
                'workflow': workflow,
            },
            body: body,
        });
    }

    /**
     * Fetch a list of :ref:`ref_flyteidl.admin.NamedEntityIdentifier` of workflow objects.
     * @param project Name of the project that contains the identifiers.
     * +required
     * @param domain Name of the domain the identifiers belongs to within the project.
     * +required
     * @param limit Indicates the number of resources to be returned.
     * +required.
     * @param token In the case of multiple pages of results, the server-provided token can be used to fetch the next page
     * in a query.
     * +optional.
     * @param sortByKey Indicates an attribute to sort the response values.
     * +required.
     * @param sortByDirection Indicates the direction to apply sort key for response values.
     * +optional.
     *
     * - DESCENDING: By default, fields are sorted in descending order.
     * @param filters Indicates a list of filters passed as string.
     * +optional.
     * @returns adminNamedEntityIdentifierList A successful response.
     * @throws ApiError
     */
    public static listWorkflowIds(
        project: string,
        domain: string,
        limit?: number,
        token?: string,
        sortByKey?: string,
        sortByDirection: 'DESCENDING' | 'ASCENDING' = 'DESCENDING',
        filters?: string,
    ): CancelablePromise<adminNamedEntityIdentifierList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/workflow_ids/{project}/{domain}',
            path: {
                'project': project,
                'domain': domain,
            },
            query: {
                'limit': limit,
                'token': token,
                'sort_by.key': sortByKey,
                'sort_by.direction': sortByDirection,
                'filters': filters,
            },
        });
    }

    /**
     * Create and upload a :ref:`ref_flyteidl.admin.Workflow` definition
     * @param body
     * @returns adminWorkflowCreateResponse A successful response.
     * @throws ApiError
     */
    public static createWorkflow(
        body: adminWorkflowCreateRequest,
    ): CancelablePromise<adminWorkflowCreateResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/workflows',
            body: body,
        });
    }

    /**
     * Fetch a list of :ref:`ref_flyteidl.admin.Workflow` definitions.
     * @param idProject Name of the project the resource belongs to.
     * @param idDomain Name of the domain the resource belongs to.
     * A domain can be considered as a subset within a specific project.
     * @param idName User provided value for the resource.
     * The combination of project + domain + name uniquely identifies the resource.
     * +optional - in certain contexts - like 'List API', 'Launch plans'.
     * @param limit Indicates the number of resources to be returned.
     * +required.
     * @param token In the case of multiple pages of results, this server-provided token can be used to fetch the next page
     * in a query.
     * +optional.
     * @param filters Indicates a list of filters passed as string.
     * More info on constructing filters : <Link>
     * +optional.
     * @param sortByKey Indicates an attribute to sort the response values.
     * +required.
     * @param sortByDirection Indicates the direction to apply sort key for response values.
     * +optional.
     *
     * - DESCENDING: By default, fields are sorted in descending order.
     * @returns adminWorkflowList A successful response.
     * @throws ApiError
     */
    public static listWorkflows2(
        idProject: string,
        idDomain: string,
        idName?: string,
        limit?: number,
        token?: string,
        filters?: string,
        sortByKey?: string,
        sortByDirection: 'DESCENDING' | 'ASCENDING' = 'DESCENDING',
    ): CancelablePromise<adminWorkflowList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/workflows/{id.project}/{id.domain}',
            path: {
                'id.project': idProject,
                'id.domain': idDomain,
            },
            query: {
                'id.name': idName,
                'limit': limit,
                'token': token,
                'filters': filters,
                'sort_by.key': sortByKey,
                'sort_by.direction': sortByDirection,
            },
        });
    }

    /**
     * Fetch a list of :ref:`ref_flyteidl.admin.Workflow` definitions.
     * @param idProject Name of the project the resource belongs to.
     * @param idDomain Name of the domain the resource belongs to.
     * A domain can be considered as a subset within a specific project.
     * @param idName User provided value for the resource.
     * The combination of project + domain + name uniquely identifies the resource.
     * +optional - in certain contexts - like 'List API', 'Launch plans'
     * @param limit Indicates the number of resources to be returned.
     * +required.
     * @param token In the case of multiple pages of results, this server-provided token can be used to fetch the next page
     * in a query.
     * +optional.
     * @param filters Indicates a list of filters passed as string.
     * More info on constructing filters : <Link>
     * +optional.
     * @param sortByKey Indicates an attribute to sort the response values.
     * +required.
     * @param sortByDirection Indicates the direction to apply sort key for response values.
     * +optional.
     *
     * - DESCENDING: By default, fields are sorted in descending order.
     * @returns adminWorkflowList A successful response.
     * @throws ApiError
     */
    public static listWorkflows(
        idProject: string,
        idDomain: string,
        idName: string,
        limit?: number,
        token?: string,
        filters?: string,
        sortByKey?: string,
        sortByDirection: 'DESCENDING' | 'ASCENDING' = 'DESCENDING',
    ): CancelablePromise<adminWorkflowList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/workflows/{id.project}/{id.domain}/{id.name}',
            path: {
                'id.project': idProject,
                'id.domain': idDomain,
                'id.name': idName,
            },
            query: {
                'limit': limit,
                'token': token,
                'filters': filters,
                'sort_by.key': sortByKey,
                'sort_by.direction': sortByDirection,
            },
        });
    }

    /**
     * Fetch a :ref:`ref_flyteidl.admin.Workflow` definition.
     * @param idProject Name of the project the resource belongs to.
     * @param idDomain Name of the domain the resource belongs to.
     * A domain can be considered as a subset within a specific project.
     * @param idName User provided value for the resource.
     * @param idVersion Specific version of the resource.
     * @param idResourceType Identifies the specific type of resource that this identifier corresponds to.
     *
     * - DATASET: A dataset represents an entity modeled in Flyte DataCatalog. A Dataset is also a versioned entity and can be a compilation of multiple individual objects.
     * Eventually all Catalog objects should be modeled similar to Flyte Objects. The Dataset entities makes it possible for the UI  and CLI to act on the objects
     * in a similar manner to other Flyte objects
     * @returns adminWorkflow A successful response.
     * @throws ApiError
     */
    public static getWorkflow(
        idProject: string,
        idDomain: string,
        idName: string,
        idVersion: string,
        idResourceType: 'UNSPECIFIED' | 'TASK' | 'WORKFLOW' | 'LAUNCH_PLAN' | 'DATASET' = 'UNSPECIFIED',
    ): CancelablePromise<adminWorkflow> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/workflows/{id.project}/{id.domain}/{id.name}/{id.version}',
            path: {
                'id.project': idProject,
                'id.domain': idDomain,
                'id.name': idName,
                'id.version': idVersion,
            },
            query: {
                'id.resource_type': idResourceType,
            },
        });
    }

}
