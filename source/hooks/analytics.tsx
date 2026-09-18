// Module ID: 9864
// Function ID: 9865
// Name: analytics
// Dependencies: [19, 1241, 2]
// Exports: useAnalyticsContext

// Module 9864 (analytics)
import AnalyticsUtils from "AnalyticsUtils" /* 1241 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("hooks/analytics.tsx");

export const useAnalyticsContext = function useAnalyticsContext() {
  return noop.useContext(AnalyticsUtils.AnalyticsContext);
};
