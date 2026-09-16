// Module ID: 11737
// Function ID: 11738
// Name: openGroupDMNitroCapLimitSheet
// Dependencies: [4605, 11738, 1897, 2]
// Exports: default

// Module 11737 (openGroupDMNitroCapLimitSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4605 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapLimitSheet.tsx");

export default function openGroupDMNitroCapLimitSheet(location) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11738, dependencyMap.paths), "GroupDMNitroCapLimitSheet", { location });
};
