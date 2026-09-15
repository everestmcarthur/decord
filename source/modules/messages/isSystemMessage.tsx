// Module ID: 7377
// Function ID: 7378
// Name: isSystemMessage
// Dependencies: [1090, 2]
// Exports: default

// Module 7377 (isSystemMessage)
import MessageTypes from "MessageTypes" /* 1090 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/isSystemMessage.tsx");

export default function isSystemMessage(type) {
  const USER_MESSAGE = MessageTypes.MessageTypesSets.USER_MESSAGE;
  return !USER_MESSAGE.has(type.type);
};
