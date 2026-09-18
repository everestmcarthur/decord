// Module ID: 17738
// Function ID: 17739
// Name: MessageQueueManager
// Dependencies: [7314, 8036, 2]

// Module 17738 (MessageQueueManager)
import MessageQueueDefault from "MessageQueue" /* 8036 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7314 */;

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
