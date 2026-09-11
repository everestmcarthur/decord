// Module ID: 9605
// Function ID: 9606
// Name: getEmbeddedActivitiesManager
// Dependencies: [9606, 2]
// Exports: default

// Module 9605 (getEmbeddedActivitiesManager)
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const result = size.fileFinishedImporting("modules/activities/utils/getEmbeddedActivitiesManager.native.tsx");

export default function getEmbeddedActivitiesManager() {
  return require("EmbeddedActivitiesNativeManager");
};
