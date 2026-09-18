// Module ID: 11835
// Function ID: 11836
// Name: openGroupDMNitroCapLimitSheet
// Dependencies: [4689, 11836, 1897, 2]
// Exports: default

// Module 11835 (openGroupDMNitroCapLimitSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4689 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapLimitSheet.tsx");

export default function openGroupDMNitroCapLimitSheet(location) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11836, dependencyMap.paths), "GroupDMNitroCapLimitSheet", { location });
};
