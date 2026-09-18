// Module ID: 12688
// Function ID: 12689
// Name: useIsStricterMessageRequests
// Dependencies: [12662, 2]
// Exports: default

// Module 12688 (useIsStricterMessageRequests)
import RegionalTeenUtils from "RegionalTeenUtils" /* 12662 */;
import size from "module_2" /* 2 */;

const set = new Set(["GB"]);
const result = size.fileFinishedImporting("modules/message_request/hooks/useIsStricterMessageRequests.tsx");

export default function useIsStricterMessageRequests() {
  return RegionalTeenUtils.useIsTeenInCountrySet(set);
};
