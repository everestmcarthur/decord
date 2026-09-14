// Module ID: 13168
// Function ID: 13169
// Name: isOnConsole
// Dependencies: [13133, 13134, 2]
// Exports: default

// Module 13168 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 13133 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 13134 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  return isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
};
