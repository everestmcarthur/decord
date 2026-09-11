// Module ID: 17509
// Function ID: 17510
// Name: MessageQueueManager
// Dependencies: [7192, 7907, 2]

// Module 17509 (MessageQueueManager)
import MessageQueueDefault from "MessageQueue" /* 7907 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7192 */;

class MessageQueueManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.actions = { LOGOUT: applyArgumentsResult.handleLogout };
    return applyArgumentsResult;
  }
}
MessageQueueManager.prototype["handleLogout"] = function handleLogout() {
  MessageQueueDefault.clear();
};
const messageQueueManager = new MessageQueueManager();
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/MessageQueueManager.tsx");

export default messageQueueManager;
