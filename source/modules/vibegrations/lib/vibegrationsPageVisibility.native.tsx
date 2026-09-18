// Module ID: 16949
// Function ID: 16950
// Name: vibegrationsPageVisibility
// Dependencies: [1896, 1074, 2]
// Exports: isPageHidden, subscribePageVisibility

// Module 16949 (vibegrationsPageVisibility)
import AppStateStore from "AppStateStore" /* 1896 */;

const AppStates = fn(1074).AppStates;
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/lib/vibegrationsPageVisibility.native.tsx");

export const isPageHidden = function isPageHidden() {
  return AppStateStore.getState() !== AppStates.ACTIVE;
};
export const subscribePageVisibility = function subscribePageVisibility(flushIfHidden) {
  AppStateStore = flushIfHidden;
  AppStateStore.addChangeListener(flushIfHidden);
  return () => AppStateStore.removeChangeListener(closure_0);
};
