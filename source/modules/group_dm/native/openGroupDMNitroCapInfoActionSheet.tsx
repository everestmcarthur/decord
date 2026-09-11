// Module ID: 12281
// Function ID: 12282
// Name: openGroupDMNitroCapInfoActionSheet
// Dependencies: [4573, 12282, 1896, 2]
// Exports: default

// Module 12281 (openGroupDMNitroCapInfoActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4573 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapInfoActionSheet.tsx");

export default function openGroupDMNitroCapInfoActionSheet() {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12282, dependencyMap.paths), "GroupDMNitroCapInfoActionSheet");
};
