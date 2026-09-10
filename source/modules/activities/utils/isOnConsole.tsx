// Module ID: 13067
// Function ID: 13068
// Name: isOnConsole
// Dependencies: [13032, 13033, 2]
// Exports: default

// Module 13067 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 13032 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 13033 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  return isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
};
