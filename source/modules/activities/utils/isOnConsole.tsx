// Module ID: 13130
// Function ID: 13131
// Name: isOnConsole
// Dependencies: [13095, 13096, 2]
// Exports: default

// Module 13130 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 13095 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 13096 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  return isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
};
