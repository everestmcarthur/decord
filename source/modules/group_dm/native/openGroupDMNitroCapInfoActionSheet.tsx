// Module ID: 12258
// Function ID: 12259
// Name: openGroupDMNitroCapInfoActionSheet
// Dependencies: [4572, 12259, 1896, 2]
// Exports: default

// Module 12258 (openGroupDMNitroCapInfoActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4572 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapInfoActionSheet.tsx");

export default function openGroupDMNitroCapInfoActionSheet() {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12259, dependencyMap.paths), "GroupDMNitroCapInfoActionSheet");
};
