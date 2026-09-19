// Module ID: 12439
// Function ID: 12440
// Name: openGroupDMNitroCapInfoActionSheet
// Dependencies: [4723, 12440, 1980, 2]
// Exports: default

// Module 12439 (openGroupDMNitroCapInfoActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4723 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapInfoActionSheet.tsx");

export default function openGroupDMNitroCapInfoActionSheet() {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12440, dependencyMap.paths), "GroupDMNitroCapInfoActionSheet");
};
