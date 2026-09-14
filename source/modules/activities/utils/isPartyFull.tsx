// Module ID: 11887
// Function ID: 11888
// Name: isPartyFull
// Dependencies: [2]
// Exports: isPartyFull

// Module 11887 (isPartyFull)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isPartyFull.tsx");

export const isPartyFull = function isPartyFull(partySize) {
  ({ partySize, maxPartySize } = partySize);
  let tmp = partySize > -1;
  if (tmp) {
    tmp = maxPartySize > 0;
  }
  if (tmp) {
    tmp = partySize >= maxPartySize;
  }
  return tmp;
};
