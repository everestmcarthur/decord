// Module ID: 17633
// Function ID: 17634
// Name: MessageQueueManager
// Dependencies: [7228, 7948, 2]

// Module 17633 (MessageQueueManager)
import MessageQueueDefault from "MessageQueue" /* 7948 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7228 */;

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
