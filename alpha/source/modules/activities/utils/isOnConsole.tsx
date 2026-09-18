// Module ID: 13283
// Function ID: 13284
// Name: isOnConsole
// Dependencies: [13248, 13249, 2]
// Exports: default

// Module 13283 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 13248 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 13249 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  return isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
};
