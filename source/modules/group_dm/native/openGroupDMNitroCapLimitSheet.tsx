// Module ID: 11690
// Function ID: 11691
// Name: openGroupDMNitroCapLimitSheet
// Dependencies: [4574, 11691, 1896, 2]
// Exports: default

// Module 11690 (openGroupDMNitroCapLimitSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4574 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapLimitSheet.tsx");

export default function openGroupDMNitroCapLimitSheet(location) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11691, dependencyMap.paths), "GroupDMNitroCapLimitSheet", { location });
};
