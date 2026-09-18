// Module ID: 11600
// Function ID: 11601
// Name: openGroupDMNitroCapLimitSheet
// Dependencies: [4527, 11601, 1896, 2]
// Exports: default

// Module 11600 (openGroupDMNitroCapLimitSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapLimitSheet.tsx");

export default function openGroupDMNitroCapLimitSheet(location) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11601, dependencyMap.paths), "GroupDMNitroCapLimitSheet", { location });
};
