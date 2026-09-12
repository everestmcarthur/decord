// Module ID: 13167
// Function ID: 13168
// Name: isOnConsole
// Dependencies: [13132, 13133, 2]
// Exports: default

// Module 13167 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 13132 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 13133 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  return isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
};
