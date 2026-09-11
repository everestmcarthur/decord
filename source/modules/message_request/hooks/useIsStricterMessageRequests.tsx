// Module ID: 12540
// Function ID: 12541
// Name: useIsStricterMessageRequests
// Dependencies: [12514, 2]
// Exports: default

// Module 12540 (useIsStricterMessageRequests)
import RegionalTeenUtils from "RegionalTeenUtils" /* 12514 */;
import size from "module_2" /* 2 */;

const set = new Set(["GB"]);
const result = size.fileFinishedImporting("modules/message_request/hooks/useIsStricterMessageRequests.tsx");

export default function useIsStricterMessageRequests() {
  return RegionalTeenUtils.useIsTeenInCountrySet(set);
};
