// Module ID: 17577
// Function ID: 17578
// Name: MessageQueueManager
// Dependencies: [7225, 7939, 2]

// Module 17577 (MessageQueueManager)
import MessageQueueDefault from "MessageQueue" /* 7939 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7225 */;

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
