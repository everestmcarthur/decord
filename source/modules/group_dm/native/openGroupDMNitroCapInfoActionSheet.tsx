// Module ID: 12218
// Function ID: 12219
// Name: openGroupDMNitroCapInfoActionSheet
// Dependencies: [4541, 12219, 1896, 2]
// Exports: default

// Module 12218 (openGroupDMNitroCapInfoActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4541 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapInfoActionSheet.tsx");

export default function openGroupDMNitroCapInfoActionSheet() {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12219, dependencyMap.paths), "GroupDMNitroCapInfoActionSheet");
};
