// Module ID: 12318
// Function ID: 12319
// Name: openGroupDMNitroCapInfoActionSheet
// Dependencies: [4603, 12319, 1896, 2]
// Exports: default

// Module 12318 (openGroupDMNitroCapInfoActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4603 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapInfoActionSheet.tsx");

export default function openGroupDMNitroCapInfoActionSheet() {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12319, dependencyMap.paths), "GroupDMNitroCapInfoActionSheet");
};
