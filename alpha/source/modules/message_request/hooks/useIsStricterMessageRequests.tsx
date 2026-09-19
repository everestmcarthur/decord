// Module ID: 12697
// Function ID: 12698
// Name: useIsStricterMessageRequests
// Dependencies: [12671, 2]
// Exports: default

// Module 12697 (useIsStricterMessageRequests)
import RegionalTeenUtils from "RegionalTeenUtils" /* 12671 */;
import size from "module_2" /* 2 */;

const set = new Set(["GB"]);
const result = size.fileFinishedImporting("modules/message_request/hooks/useIsStricterMessageRequests.tsx");

export default function useIsStricterMessageRequests() {
  return RegionalTeenUtils.useIsTeenInCountrySet(set);
};
