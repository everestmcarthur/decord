// Module ID: 11626
// Function ID: 11627
// Name: openGroupDMNitroCapLimitSheet
// Dependencies: [4541, 11627, 1896, 2]
// Exports: default

// Module 11626 (openGroupDMNitroCapLimitSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4541 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapLimitSheet.tsx");

export default function openGroupDMNitroCapLimitSheet(location) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11627, dependencyMap.paths), "GroupDMNitroCapLimitSheet", { location });
};
