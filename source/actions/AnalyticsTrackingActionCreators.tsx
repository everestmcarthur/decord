// Module ID: 15394
// Function ID: 15395
// Name: actions/AnalyticsTrackingActionCreators
// Dependencies: [573, 2]
// Exports: track

// Module 15394 (actions/AnalyticsTrackingActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("actions/AnalyticsTrackingActionCreators.tsx");

export const track = function track(event, properties) {
  DispatcherDefault.dispatch({ type: "TRACK", event, properties });
};
