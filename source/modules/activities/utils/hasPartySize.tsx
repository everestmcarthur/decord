// Module ID: 11998
// Function ID: 11999
// Name: hasPartySize
// Dependencies: [2]
// Exports: hasPartySize

// Module 11998 (hasPartySize)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/hasPartySize.tsx");

export const hasPartySize = function hasPartySize(partySize) {
  return partySize.partySize > -1 && partySize.maxPartySize > -1;
};
