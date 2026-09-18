// Module ID: 12449
// Function ID: 12450
// Name: useIsStricterMessageRequests
// Dependencies: [12423, 2]
// Exports: default

// Module 12449 (useIsStricterMessageRequests)
import RegionalTeenUtils from "RegionalTeenUtils" /* 12423 */;
import size from "module_2" /* 2 */;

const set = new Set(["GB"]);
const result = size.fileFinishedImporting("modules/message_request/hooks/useIsStricterMessageRequests.tsx");

export default function useIsStricterMessageRequests() {
  return RegionalTeenUtils.useIsTeenInCountrySet(set);
};
