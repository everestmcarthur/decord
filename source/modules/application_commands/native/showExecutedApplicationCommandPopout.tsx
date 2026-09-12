// Module ID: 11749
// Function ID: 11750
// Name: showExecutedApplicationCommandPopout
// Dependencies: [4603, 11750, 1896, 2]
// Exports: default

// Module 11749 (showExecutedApplicationCommandPopout)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4603 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/application_commands/native/showExecutedApplicationCommandPopout.tsx");

export default function showExecutedApplicationCommandPopout(messageId) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequireImpl(11750, dependencyMap.paths), "ExecutedCommandPopout:" + messageId.messageId, messageId);
};
