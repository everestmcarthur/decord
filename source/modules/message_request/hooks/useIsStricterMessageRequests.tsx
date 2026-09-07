// Module ID: 12449
// Function ID: 12450
// Name: set
// Dependencies: [12423, 2]
// Exports: default

// Module 12449 (set)
import set2 from "set" /* 12423 */;
import set from "set" /* 2 */;

let set = new Set(["GB"]);
const result = set.fileFinishedImporting("modules/message_request/hooks/useIsStricterMessageRequests.tsx");

export default function useIsStricterMessageRequests() {
  return set2.useIsTeenInCountrySet(set);
};
