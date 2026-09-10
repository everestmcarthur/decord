// Module ID: 17458
// Function ID: 17459
// Name: MessageQueueManager
// Dependencies: [7132, 7848, 2]

// Module 17458 (MessageQueueManager)
import MessageQueueDefault from "MessageQueue" /* 7848 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7132 */;

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
