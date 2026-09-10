// Module ID: 11864
// Function ID: 11865
// Name: showModerateUserActionSheet
// Dependencies: [4541, 11865, 1896, 2]
// Exports: default

// Module 11864 (showModerateUserActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4541 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_automod/native/showModerateUserActionSheet.tsx");

export default function showModerateUserActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11865, dependencyMap.paths), "ModerateUserActionSheet", arg0);
};
