// Module ID: 11844
// Function ID: 11845
// Name: openGroupDMNitroCapLimitSheet
// Dependencies: [4723, 11845, 1980, 2]
// Exports: default

// Module 11844 (openGroupDMNitroCapLimitSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4723 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapLimitSheet.tsx");

export default function openGroupDMNitroCapLimitSheet(location) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11845, dependencyMap.paths), "GroupDMNitroCapLimitSheet", { location });
};
