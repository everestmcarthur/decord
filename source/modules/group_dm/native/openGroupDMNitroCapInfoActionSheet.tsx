// Module ID: 12317
// Function ID: 12318
// Name: openGroupDMNitroCapInfoActionSheet
// Dependencies: [4603, 12318, 1896, 2]
// Exports: default

// Module 12317 (openGroupDMNitroCapInfoActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4603 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapInfoActionSheet.tsx");

export default function openGroupDMNitroCapInfoActionSheet() {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12318, dependencyMap.paths), "GroupDMNitroCapInfoActionSheet");
};
