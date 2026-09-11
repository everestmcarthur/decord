// Module ID: 15639
// Function ID: 15640
// Name: DevToolsActionCreators
// Dependencies: [7791, 573, 2]
// Exports: clearAnalyticsLog, openDevTools, toggleDisplayDevTools, updateDevToolsSettings

// Module 15639 (DevToolsActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import DevToolsSettingsStore from "DevToolsSettingsStore" /* 7791 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/devtools/DevToolsActionCreators.tsx");

export const updateDevToolsSettings = function updateDevToolsSettings(settings) {
  DispatcherDefault.dispatch({ type: "DEV_TOOLS_SETTINGS_UPDATE", settings });
};
export const toggleDisplayDevTools = function toggleDisplayDevTools() {
  DispatcherDefault.dispatch({ type: "DEV_TOOLS_SETTINGS_UPDATE", settings: { displayTools: !DevToolsSettingsStore.displayTools } });
};
export const openDevTools = function openDevTools(lastOpenTabId, lastOpenSubTabId) {
  DispatcherDefault.dispatch({ type: "DEV_TOOLS_SETTINGS_UPDATE", settings: { displayTools: true, lastOpenTabId, lastOpenSubTabId } });
};
export const clearAnalyticsLog = function clearAnalyticsLog() {
  DispatcherDefault.dispatch({ type: "ANALYTICS_LOG_CLEAR" });
};
