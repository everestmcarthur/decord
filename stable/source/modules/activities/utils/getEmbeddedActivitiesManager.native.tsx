// Module ID: 9520
// Function ID: 9521
// Name: getEmbeddedActivitiesManager
// Dependencies: [9521, 2]
// Exports: default

// Module 9520 (getEmbeddedActivitiesManager)
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const result = size.fileFinishedImporting("modules/activities/utils/getEmbeddedActivitiesManager.native.tsx");

export default function getEmbeddedActivitiesManager() {
  return require("EmbeddedActivitiesNativeManager");
};
