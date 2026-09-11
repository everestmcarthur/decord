// Module ID: 17508
// Function ID: 17509
// Name: MessageQueueManager
// Dependencies: [7191, 7906, 2]

// Module 17508 (MessageQueueManager)
import MessageQueueDefault from "MessageQueue" /* 7906 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7191 */;

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
