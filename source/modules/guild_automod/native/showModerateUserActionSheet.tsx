// Module ID: 11968
// Function ID: 11969
// Name: showModerateUserActionSheet
// Dependencies: [4606, 11969, 1897, 2]
// Exports: default

// Module 11968 (showModerateUserActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4606 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_automod/native/showModerateUserActionSheet.tsx");

export default function showModerateUserActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11969, dependencyMap.paths), "ModerateUserActionSheet", arg0);
};
