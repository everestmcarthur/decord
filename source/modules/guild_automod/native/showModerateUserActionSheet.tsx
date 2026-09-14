// Module ID: 11964
// Function ID: 11965
// Name: showModerateUserActionSheet
// Dependencies: [4603, 11965, 1896, 2]
// Exports: default

// Module 11964 (showModerateUserActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4603 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_automod/native/showModerateUserActionSheet.tsx");

export default function showModerateUserActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11965, dependencyMap.paths), "ModerateUserActionSheet", arg0);
};
