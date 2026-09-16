// Module ID: 11976
// Function ID: 11977
// Name: showModerateUserActionSheet
// Dependencies: [4605, 11977, 1897, 2]
// Exports: default

// Module 11976 (showModerateUserActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4605 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_automod/native/showModerateUserActionSheet.tsx");

export default function showModerateUserActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11977, dependencyMap.paths), "ModerateUserActionSheet", arg0);
};
