// Module ID: 9625
// Function ID: 9626
// Name: analytics
// Dependencies: [19, 1242, 2]
// Exports: useAnalyticsContext

// Module 9625 (analytics)
import AnalyticsUtils from "AnalyticsUtils" /* 1242 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("hooks/analytics.tsx");

export const useAnalyticsContext = function useAnalyticsContext() {
  return noop.useContext(AnalyticsUtils.AnalyticsContext);
};
