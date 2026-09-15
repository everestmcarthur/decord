// Module ID: 13173
// Function ID: 13174
// Name: isOnConsole
// Dependencies: [13138, 13139, 2]
// Exports: default

// Module 13173 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 13138 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 13139 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  return isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
};
