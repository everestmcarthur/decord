// Module ID: 11838
// Function ID: 11839
// Name: showModerateUserActionSheet
// Dependencies: [4527, 11839, 1896, 2]
// Exports: default

// Module 11838 (showModerateUserActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_automod/native/showModerateUserActionSheet.tsx");

export default function showModerateUserActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11839, dependencyMap.paths), "ModerateUserActionSheet", arg0);
};
