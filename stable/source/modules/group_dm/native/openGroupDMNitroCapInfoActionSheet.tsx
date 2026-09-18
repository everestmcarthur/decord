// Module ID: 12192
// Function ID: 12193
// Name: openGroupDMNitroCapInfoActionSheet
// Dependencies: [4527, 12193, 1896, 2]
// Exports: default

// Module 12192 (openGroupDMNitroCapInfoActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapInfoActionSheet.tsx");

export default function openGroupDMNitroCapInfoActionSheet() {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12193, dependencyMap.paths), "GroupDMNitroCapInfoActionSheet");
};
