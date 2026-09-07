// Module ID: 17475
// Function ID: 17476
// Name: prototype
// Dependencies: [12417, 1371, 4404, 7118, 9692, 2]

// Module 17475 (prototype)
import initializeDefault from "initialize" /* 7118 */;
import closure_2 from "initialize" /* 12417 */;
import closure_3 from "mergeGuildAvatar" /* 1371 */;

initializeDefault;
let prototype = function PushNotificationCacheManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  importDefault = applyArgumentsResult;
  applyArgumentsResult.actions = {
    POST_CONNECTION_OPEN() {
      return applyArgumentsResult.handleUserUpdate();
    },
    CURRENT_USER_UPDATE() {
      return applyArgumentsResult.handleUserUpdate();
    },
    LOGOUT() {
      return applyArgumentsResult.handleLogout();
    }
  };
  const items = [closure_2, () => applyArgumentsResult.syncMultiAccountUsers()];
  const items1 = [items];
  applyArgumentsResult.stores = new Map(items1);
  applyArgumentsResult.handleUserUpdate = function handleUserUpdate() {
    currentUser = currentUser.getCurrentUser();
    if (null != currentUser) {
      applyArgumentsResult(9692).setCurrentUser(currentUser.username, currentUser.id);
      const obj2 = applyArgumentsResult(9692);
    } else {
      applyArgumentsResult(9692).setCurrentUser(null, null);
      const obj = applyArgumentsResult(9692);
    }
  };
  applyArgumentsResult.syncMultiAccountUsers = function syncMultiAccountUsers() {
    obj = obj(9692);
    obj = undefined;
    if (obj.canUseMultiAccountNotifications) {
      const validUsers = obj.getValidUsers();
      if (validUsers.length < 2) {
        obj = {};
      } else {
        obj = {};
        const item = validUsers.forEach((id) => {
          obj = obj(closure_1_1[2]);
          obj[id.id] = obj.getUserTag(id, { identifiable: "always" });
        });
      }
    } else {
      obj = {};
    }
    obj.setMultiAccountUsers(obj);
  };
  applyArgumentsResult.handleLogout = function handleLogout() {
    const result = applyArgumentsResult(closure_1_1[4]).clearPushNotificationLogs();
    applyArgumentsResult.handleUserUpdate();
  };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
prototype = new prototype();
let result = require("set").fileFinishedImporting("modules/push_notifications/native/PushNotificationCacheManager.tsx");

export default prototype;
