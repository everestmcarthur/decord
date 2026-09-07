// Module ID: 11761
// Function ID: 11762
// Name: hasPartySize
// Dependencies: [2]
// Exports: hasPartySize

// Module 11761 (hasPartySize)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/activities/utils/hasPartySize.tsx");

export const hasPartySize = function hasPartySize(partySize) {
  return partySize.partySize > -1 && partySize.maxPartySize > -1;
};
