// Module ID: 17674
// Function ID: 17675
// Name: MessageQueueManager
// Dependencies: [7232, 7954, 2]

// Module 17674 (MessageQueueManager)
import MessageQueueDefault from "MessageQueue" /* 7954 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7232 */;

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
