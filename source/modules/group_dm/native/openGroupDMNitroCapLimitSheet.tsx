// Module ID: 11600
// Function ID: 11601
// Name: openGroupDMNitroCapLimitSheet
// Dependencies: [4527, 11601, 1896, 2]
// Exports: default

// Module 11600 (openGroupDMNitroCapLimitSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4527 */;

const result = set.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapLimitSheet.tsx");

export default function openGroupDMNitroCapLimitSheet(location) {
  let obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj = { location };
  obj.openLazy(asyncRequireImpl(11601, dependencyMap.paths), "GroupDMNitroCapLimitSheet", obj);
};
