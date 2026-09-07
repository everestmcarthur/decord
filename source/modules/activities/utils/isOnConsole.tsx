// Module ID: 13041
// Function ID: 13042
// Name: isOnConsole
// Dependencies: [13006, 13007, 2]
// Exports: default

// Module 13041 (isOnConsole)
import set from "set" /* 2 */;
import isOnXboxDefault from "isOnXbox" /* 13006 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 13007 */;

const result = set.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  return isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
};
