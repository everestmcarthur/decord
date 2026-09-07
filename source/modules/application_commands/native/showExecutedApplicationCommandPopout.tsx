// Module ID: 11625
// Function ID: 11626
// Name: showExecutedApplicationCommandPopout
// Dependencies: [4527, 11626, 1896, 2]
// Exports: default

// Module 11625 (showExecutedApplicationCommandPopout)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4527 */;

const result = set.fileFinishedImporting("modules/application_commands/native/showExecutedApplicationCommandPopout.tsx");

export default function showExecutedApplicationCommandPopout(messageId) {
  const obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj.openLazy(asyncRequireImpl(11626, dependencyMap.paths), "ExecutedCommandPopout:" + messageId.messageId, messageId);
};
