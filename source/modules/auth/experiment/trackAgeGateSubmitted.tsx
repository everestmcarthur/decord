// Module ID: 16030
// Function ID: 16031
// Name: trackAgeGateSubmitted
// Dependencies: [1074, 1242, 4198, 2]
// Exports: default

// Module 16030 (trackAgeGateSubmitted)
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import _modDef4198 from "module_4198" /* 4198 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/auth/experiment/trackAgeGateSubmitted.tsx");

export default function trackAgeGateSubmitted(format, section) {
  const obj = AnalyticsUtilsDefault;
  let formatResult = null;
  if (obj2.diff(format, "years") < 18) {
    formatResult = format.format("YYYY-MM-DD");
  }
  obj2 = _modDef4198();
  obj.track(AnalyticEvents.AGE_GATE_SUBMITTED, { dob: formatResult, dob_day: format.date(), dob_month: format.month() + 1, dob_year: format.year(), source: { section } });
};
