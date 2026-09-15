// Module ID: 12580
// Function ID: 12581
// Name: useIsStricterMessageRequests
// Dependencies: [12554, 2]
// Exports: default

// Module 12580 (useIsStricterMessageRequests)
import RegionalTeenUtils from "RegionalTeenUtils" /* 12554 */;
import size from "module_2" /* 2 */;

const set = new Set(["GB"]);
const result = size.fileFinishedImporting("modules/message_request/hooks/useIsStricterMessageRequests.tsx");

export default function useIsStricterMessageRequests() {
  return RegionalTeenUtils.useIsTeenInCountrySet(set);
};
