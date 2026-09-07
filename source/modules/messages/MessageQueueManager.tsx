// Module ID: 17427
// Function ID: 17428
// Name: handleLogout
// Dependencies: [7118, 7834, 2]

// Module 17427 (handleLogout)
import initializeDefault from "initialize" /* 7118 */;
import itemsDefault from "items" /* 7834 */;

initializeDefault;
class MessageQueueManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.actions = { LOGOUT: applyArgumentsResult.handleLogout };
    return applyArgumentsResult;
  }
}
MessageQueueManager.prototype["handleLogout"] = function handleLogout() {
  itemsDefault.clear();
};
const messageQueueManager = new MessageQueueManager();
const result = require("set").fileFinishedImporting("modules/messages/MessageQueueManager.tsx");

export default messageQueueManager;
