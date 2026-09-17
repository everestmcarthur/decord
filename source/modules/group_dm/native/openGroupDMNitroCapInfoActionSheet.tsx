// Module ID: 12339
// Function ID: 12340
// Name: openGroupDMNitroCapInfoActionSheet
// Dependencies: [4607, 12340, 1897, 2]
// Exports: default

// Module 12339 (openGroupDMNitroCapInfoActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4607 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapInfoActionSheet.tsx");

export default function openGroupDMNitroCapInfoActionSheet() {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12340, dependencyMap.paths), "GroupDMNitroCapInfoActionSheet");
};
