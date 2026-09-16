// Module ID: 7783
// Function ID: 7784
// Name: PerformanceAnalyticsActionCreators
// Dependencies: [573, 2]
// Exports: ttiRecorded

// Module 7783 (PerformanceAnalyticsActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/tti_analytics/native/PerformanceAnalyticsActionCreators.tsx");

export const ttiRecorded = function ttiRecorded(tti) {
  DispatcherDefault.dispatch({ type: "TTI_RECORDED", tti });
};
