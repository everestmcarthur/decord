// Module ID: 11985
// Function ID: 11986
// Name: showModerateUserActionSheet
// Dependencies: [4607, 11986, 1897, 2]
// Exports: default

// Module 11985 (showModerateUserActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4607 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_automod/native/showModerateUserActionSheet.tsx");

export default function showModerateUserActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11986, dependencyMap.paths), "ModerateUserActionSheet", arg0);
};
