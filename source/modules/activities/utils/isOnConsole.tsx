// Module ID: 13192
// Function ID: 13193
// Name: isOnConsole
// Dependencies: [13157, 13158, 2]
// Exports: default

// Module 13192 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 13157 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 13158 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  return isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
};
