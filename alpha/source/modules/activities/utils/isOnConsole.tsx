// Module ID: 13328
// Function ID: 13329
// Name: isOnConsole
// Dependencies: [13293, 13294, 2]
// Exports: default

// Module 13328 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 13293 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 13294 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  return isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
};
