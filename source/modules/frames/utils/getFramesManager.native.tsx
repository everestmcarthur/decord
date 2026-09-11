// Module ID: 9660
// Function ID: 9661
// Name: getFramesManager
// Dependencies: [9661, 2]
// Exports: default

// Module 9660 (getFramesManager)
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const result = size.fileFinishedImporting("modules/frames/utils/getFramesManager.native.tsx");

export default function getFramesManager() {
  return require("FramesNativeManager");
};
