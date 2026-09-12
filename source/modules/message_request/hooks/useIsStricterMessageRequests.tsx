// Module ID: 12574
// Function ID: 12575
// Name: useIsStricterMessageRequests
// Dependencies: [12548, 2]
// Exports: default

// Module 12574 (useIsStricterMessageRequests)
import RegionalTeenUtils from "RegionalTeenUtils" /* 12548 */;
import size from "module_2" /* 2 */;

const set = new Set(["GB"]);
const result = size.fileFinishedImporting("modules/message_request/hooks/useIsStricterMessageRequests.tsx");

export default function useIsStricterMessageRequests() {
  return RegionalTeenUtils.useIsTeenInCountrySet(set);
};
