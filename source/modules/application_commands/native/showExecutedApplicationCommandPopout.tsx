// Module ID: 11754
// Function ID: 11755
// Name: showExecutedApplicationCommandPopout
// Dependencies: [4606, 11755, 1897, 2]
// Exports: default

// Module 11754 (showExecutedApplicationCommandPopout)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4606 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/application_commands/native/showExecutedApplicationCommandPopout.tsx");

export default function showExecutedApplicationCommandPopout(messageId) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequireImpl(11755, dependencyMap.paths), "ExecutedCommandPopout:" + messageId.messageId, messageId);
};
