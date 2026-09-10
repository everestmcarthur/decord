// Module ID: 11691
// Function ID: 11692
// Name: showExecutedApplicationCommandPopout
// Dependencies: [4572, 11692, 1896, 2]
// Exports: default

// Module 11691 (showExecutedApplicationCommandPopout)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4572 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/application_commands/native/showExecutedApplicationCommandPopout.tsx");

export default function showExecutedApplicationCommandPopout(messageId) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequireImpl(11692, dependencyMap.paths), "ExecutedCommandPopout:" + messageId.messageId, messageId);
};
