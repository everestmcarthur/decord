// Module ID: 13132
// Function ID: 13133
// Name: isOnConsole
// Dependencies: [13097, 13098, 2]
// Exports: default

// Module 13132 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 13097 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 13098 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  return isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
};
