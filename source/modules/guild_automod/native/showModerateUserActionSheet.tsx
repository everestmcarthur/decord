// Module ID: 11927
// Function ID: 11928
// Name: showModerateUserActionSheet
// Dependencies: [4573, 11928, 1896, 2]
// Exports: default

// Module 11927 (showModerateUserActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4573 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_automod/native/showModerateUserActionSheet.tsx");

export default function showModerateUserActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11928, dependencyMap.paths), "ModerateUserActionSheet", arg0);
};
