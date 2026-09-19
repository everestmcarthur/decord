// Module ID: 10477
// Function ID: 10478
// Name: showLongPressForumPostActionSheet
// Dependencies: [4723, 10478, 1980, 2]
// Exports: default

// Module 10477 (showLongPressForumPostActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4723 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/action_sheet/native/components/showLongPressForumPostActionSheet.tsx");

export default function showLongPressForumPostActionSheet(thread, parentChannel) {
  let hideActionSheet = arg2;
  if (arg2 === undefined) {
    hideActionSheet = ActionSheetActionCreatorsDefault.hideActionSheet;
  }
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(10478, dependencyMap.paths), "ForumPostLongPressActionSheet", { thread, parentChannel, onClose: hideActionSheet });
};
