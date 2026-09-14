// Module ID: 11725
// Function ID: 11726
// Name: openGroupDMNitroCapLimitSheet
// Dependencies: [4603, 11726, 1896, 2]
// Exports: default

// Module 11725 (openGroupDMNitroCapLimitSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4603 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapLimitSheet.tsx");

export default function openGroupDMNitroCapLimitSheet(location) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11726, dependencyMap.paths), "GroupDMNitroCapLimitSheet", { location });
};
