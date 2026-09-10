// Module ID: 13107
// Function ID: 13108
// Name: isOnConsole
// Dependencies: [13072, 13073, 2]
// Exports: default

// Module 13107 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 13072 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 13073 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  return isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
};
