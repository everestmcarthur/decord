// Module ID: 17517
// Function ID: 17518
// Name: MessageQueueManager
// Dependencies: [7170, 7885, 2]

// Module 17517 (MessageQueueManager)
import MessageQueueDefault from "MessageQueue" /* 7885 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7170 */;

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
