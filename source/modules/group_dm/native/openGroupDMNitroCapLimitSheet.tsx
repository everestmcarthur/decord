// Module ID: 11729
// Function ID: 11730
// Name: openGroupDMNitroCapLimitSheet
// Dependencies: [4606, 11730, 1897, 2]
// Exports: default

// Module 11729 (openGroupDMNitroCapLimitSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4606 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapLimitSheet.tsx");

export default function openGroupDMNitroCapLimitSheet(location) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11730, dependencyMap.paths), "GroupDMNitroCapLimitSheet", { location });
};
