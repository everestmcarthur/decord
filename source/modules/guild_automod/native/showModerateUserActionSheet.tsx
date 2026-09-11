// Module ID: 11929
// Function ID: 11930
// Name: showModerateUserActionSheet
// Dependencies: [4574, 11930, 1896, 2]
// Exports: default

// Module 11929 (showModerateUserActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4574 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_automod/native/showModerateUserActionSheet.tsx");

export default function showModerateUserActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11930, dependencyMap.paths), "ModerateUserActionSheet", arg0);
};
