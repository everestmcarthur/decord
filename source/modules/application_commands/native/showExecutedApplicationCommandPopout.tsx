// Module ID: 11715
// Function ID: 11716
// Name: showExecutedApplicationCommandPopout
// Dependencies: [4574, 11716, 1896, 2]
// Exports: default

// Module 11715 (showExecutedApplicationCommandPopout)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4574 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/application_commands/native/showExecutedApplicationCommandPopout.tsx");

export default function showExecutedApplicationCommandPopout(messageId) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequireImpl(11716, dependencyMap.paths), "ExecutedCommandPopout:" + messageId.messageId, messageId);
};
