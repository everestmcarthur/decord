// Module ID: 11625
// Function ID: 11626
// Name: showExecutedApplicationCommandPopout
// Dependencies: [4527, 11626, 1896, 2]
// Exports: default

// Module 11625 (showExecutedApplicationCommandPopout)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/application_commands/native/showExecutedApplicationCommandPopout.tsx");

export default function showExecutedApplicationCommandPopout(messageId) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequireImpl(11626, dependencyMap.paths), "ExecutedCommandPopout:" + messageId.messageId, messageId);
};
