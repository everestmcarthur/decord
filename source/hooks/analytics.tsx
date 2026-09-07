// Module ID: 9624
// Function ID: 9625
// Name: useAnalyticsContext
// Dependencies: [19, 1242, 2]
// Exports: useAnalyticsContext

// Module 9624 (useAnalyticsContext)
import expandEventProperties from "expandEventProperties" /* 1242 */;
import closure_2 from "noop" /* 19 */;

require = arg1;
const result = require("set").fileFinishedImporting("hooks/analytics.tsx");

export const useAnalyticsContext = function useAnalyticsContext() {
  return React.useContext(expandEventProperties.AnalyticsContext);
};
