// Module ID: 12085
// Function ID: 12086
// Name: showModerateUserActionSheet
// Dependencies: [4723, 12086, 1980, 2]
// Exports: default

// Module 12085 (showModerateUserActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4723 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_automod/native/showModerateUserActionSheet.tsx");

export default function showModerateUserActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12086, dependencyMap.paths), "ModerateUserActionSheet", arg0);
};
