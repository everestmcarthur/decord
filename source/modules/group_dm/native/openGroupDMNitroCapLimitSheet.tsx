// Module ID: 11688
// Function ID: 11689
// Name: openGroupDMNitroCapLimitSheet
// Dependencies: [4573, 11689, 1896, 2]
// Exports: default

// Module 11688 (openGroupDMNitroCapLimitSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4573 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapLimitSheet.tsx");

export default function openGroupDMNitroCapLimitSheet(location) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11689, dependencyMap.paths), "GroupDMNitroCapLimitSheet", { location });
};
