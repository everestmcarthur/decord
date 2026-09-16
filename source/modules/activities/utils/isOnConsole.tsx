// Module ID: 13184
// Function ID: 13185
// Name: isOnConsole
// Dependencies: [13149, 13150, 2]
// Exports: default

// Module 13184 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 13149 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 13150 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  return isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
};
