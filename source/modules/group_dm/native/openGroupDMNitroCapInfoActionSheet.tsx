// Module ID: 12430
// Function ID: 12431
// Name: openGroupDMNitroCapInfoActionSheet
// Dependencies: [4689, 12431, 1897, 2]
// Exports: default

// Module 12430 (openGroupDMNitroCapInfoActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4689 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapInfoActionSheet.tsx");

export default function openGroupDMNitroCapInfoActionSheet() {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12431, dependencyMap.paths), "GroupDMNitroCapInfoActionSheet");
};
