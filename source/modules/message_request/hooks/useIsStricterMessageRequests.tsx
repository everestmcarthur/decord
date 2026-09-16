// Module ID: 12588
// Function ID: 12589
// Name: useIsStricterMessageRequests
// Dependencies: [12562, 2]
// Exports: default

// Module 12588 (useIsStricterMessageRequests)
import RegionalTeenUtils from "RegionalTeenUtils" /* 12562 */;
import size from "module_2" /* 2 */;

const set = new Set(["GB"]);
const result = size.fileFinishedImporting("modules/message_request/hooks/useIsStricterMessageRequests.tsx");

export default function useIsStricterMessageRequests() {
  return RegionalTeenUtils.useIsTeenInCountrySet(set);
};
