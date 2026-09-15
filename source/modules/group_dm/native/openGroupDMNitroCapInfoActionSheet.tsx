// Module ID: 12322
// Function ID: 12323
// Name: openGroupDMNitroCapInfoActionSheet
// Dependencies: [4606, 12323, 1897, 2]
// Exports: default

// Module 12322 (openGroupDMNitroCapInfoActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4606 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapInfoActionSheet.tsx");

export default function openGroupDMNitroCapInfoActionSheet() {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12323, dependencyMap.paths), "GroupDMNitroCapInfoActionSheet");
};
