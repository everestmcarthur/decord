// Module ID: 12597
// Function ID: 12598
// Name: useIsStricterMessageRequests
// Dependencies: [12571, 2]
// Exports: default

// Module 12597 (useIsStricterMessageRequests)
import RegionalTeenUtils from "RegionalTeenUtils" /* 12571 */;
import size from "module_2" /* 2 */;

const set = new Set(["GB"]);
const result = size.fileFinishedImporting("modules/message_request/hooks/useIsStricterMessageRequests.tsx");

export default function useIsStricterMessageRequests() {
  return RegionalTeenUtils.useIsTeenInCountrySet(set);
};
