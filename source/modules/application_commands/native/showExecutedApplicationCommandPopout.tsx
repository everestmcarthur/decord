// Module ID: 11770
// Function ID: 11771
// Name: showExecutedApplicationCommandPopout
// Dependencies: [4607, 11771, 1897, 2]
// Exports: default

// Module 11770 (showExecutedApplicationCommandPopout)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4607 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/application_commands/native/showExecutedApplicationCommandPopout.tsx");

export default function showExecutedApplicationCommandPopout(messageId) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequireImpl(11771, dependencyMap.paths), "ExecutedCommandPopout:" + messageId.messageId, messageId);
};
