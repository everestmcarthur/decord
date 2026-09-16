// Module ID: 11762
// Function ID: 11763
// Name: showExecutedApplicationCommandPopout
// Dependencies: [4605, 11763, 1897, 2]
// Exports: default

// Module 11762 (showExecutedApplicationCommandPopout)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4605 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/application_commands/native/showExecutedApplicationCommandPopout.tsx");

export default function showExecutedApplicationCommandPopout(messageId) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequireImpl(11763, dependencyMap.paths), "ExecutedCommandPopout:" + messageId.messageId, messageId);
};
