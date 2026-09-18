// Module ID: 1985
// Function ID: 1986
// Name: BridgedStore
// Dependencies: [1986, 2]
// Exports: ensureValidMode

// Module 1985 (BridgedStore)
import FluxApi from "FluxApi" /* 1986 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/libdiscore/stores/BridgedStore.tsx");

export const ensureValidMode = function ensureValidMode(typescript) {
  let str = "typescript";
  if ("typescript" === typescript) {
    str = typescript;
  }
  return str;
};
