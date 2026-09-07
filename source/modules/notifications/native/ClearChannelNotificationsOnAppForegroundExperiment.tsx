// Module ID: 17809
// Function ID: 17810
// Name: shouldClearChannelNotificationsOnAppForeground
// Dependencies: [1433, 2]
// Exports: shouldClearChannelNotificationsOnAppForeground

// Module 17809 (shouldClearChannelNotificationsOnAppForeground)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1433 */;

const obj = { 1: null };
obj[1] = { enabled: true };
let closure_0 = ApexExperiment.createApexExperiment({ name: "2025-10-clear-channel-notifications-on-app-foreground-ios", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = set.fileFinishedImporting("modules/notifications/native/ClearChannelNotificationsOnAppForegroundExperiment.tsx");

export const shouldClearChannelNotificationsOnAppForeground = function shouldClearChannelNotificationsOnAppForeground(location) {
  return config.getConfig({ location: location.location }).enabled;
};
