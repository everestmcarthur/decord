// Module ID: 12076
// Function ID: 12077
// Name: showModerateUserActionSheet
// Dependencies: [4689, 12077, 1897, 2]
// Exports: default

// Module 12076 (showModerateUserActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4689 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_automod/native/showModerateUserActionSheet.tsx");

export default function showModerateUserActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12077, dependencyMap.paths), "ModerateUserActionSheet", arg0);
};
