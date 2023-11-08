/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PluginOverrideMissingPluginBehavior } from './PluginOverrideMissingPluginBehavior';

/**
 * This MatchableAttribute configures selecting alternate plugin implementations for a given task type.
 * In addition to an override implementation a selection of fallbacks can be provided or other modes
 * for handling cases where the desired plugin override is not enabled in a given Flyte deployment.
 */
export type adminPluginOverride = {
    /**
     * A predefined yet extensible Task type identifier.
     */
    task_type?: string;
    /**
     * A set of plugin ids which should handle tasks of this type instead of the default registered plugin. The list will be tried in order until a plugin is found with that id.
     */
    plugin_id?: Array<string>;
    /**
     * Defines the behavior when no plugin from the plugin_id list is not found.
     */
    missing_plugin_behavior?: PluginOverrideMissingPluginBehavior;
};

