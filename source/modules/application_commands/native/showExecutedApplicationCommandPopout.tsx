// Module ID: 11713
// Function ID: 11714
// Name: showExecutedApplicationCommandPopout
// Dependencies: [4573, 11714, 1896, 2]
// Exports: default

// Module 11713 (showExecutedApplicationCommandPopout)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4573 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/application_commands/native/showExecutedApplicationCommandPopout.tsx");

export default function showExecutedApplicationCommandPopout(messageId) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequireImpl(11714, dependencyMap.paths), "ExecutedCommandPopout:" + messageId.messageId, messageId);
};
