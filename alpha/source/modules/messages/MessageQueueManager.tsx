// Module ID: 17818
// Function ID: 17819
// Name: MessageQueueManager
// Dependencies: [7358, 8074, 2]

// Module 17818 (MessageQueueManager)
import MessageQueueDefault from "MessageQueue" /* 8074 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7358 */;

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
