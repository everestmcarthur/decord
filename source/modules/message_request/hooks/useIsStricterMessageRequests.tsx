// Module ID: 12515
// Function ID: 12516
// Name: useIsStricterMessageRequests
// Dependencies: [12489, 2]
// Exports: default

// Module 12515 (useIsStricterMessageRequests)
import RegionalTeenUtils from "RegionalTeenUtils" /* 12489 */;
import size from "module_2" /* 2 */;

const set = new Set(["GB"]);
const result = size.fileFinishedImporting("modules/message_request/hooks/useIsStricterMessageRequests.tsx");

export default function useIsStricterMessageRequests() {
  return RegionalTeenUtils.useIsTeenInCountrySet(set);
};
