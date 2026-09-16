// Module ID: 16653
// Function ID: 16654
// Name: useNotificationPermissionPrompt
// Dependencies: [19, 1951, 5363, 1952, 12552, 504, 1954, 12561, 16654, 16656, 2]
// Exports: default

// Module 16653 (useNotificationPermissionPrompt)
import NotificationUtilsDefault from "NotificationUtils" /* 12561 */;
import noop from "module_19" /* 19 */;
import LoginRequiredActionStore from "LoginRequiredActionStore" /* 1951 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5363 */;
import UserRequiredActionStore from "UserRequiredActionStore" /* 1952 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 12552 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/nuf/native/useNotificationPermissionPrompt.tsx");

export default function useNotificationPermissionPrompt() {
  const items = [GatewayConnectionStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => connected.isConnected());
  const obj = stateFromStores(504);
  const items1 = [UserRequiredActionStore, LoginRequiredActionStore];
  const stateFromStores1 = stateFromStores(504).useStateFromStores(items1, () => stateFromStores1(dependencyMap[6])(LoginRequiredActionStore, UserRequiredActionStore));
  const items2 = [stateFromStores, stateFromStores1];
  const effect = noop.useEffect(() => {
    if (stateFromStores) {
      if (!stateFromStores1) {
        if (tmp5) {
          const permission = tmp3(12561).requestPermission();
          tmp3(12561).shouldRequestNotification = false;
          const tmp3Result = tmp3(12561);
        }
        tmp5 = NotificationUtilsDefault.shouldRequestNotification && !PushNotificationPermissionStore.promptSeen;
      }
    }
  }, items2);
  const obj2 = stateFromStores(504);
  const guildOpenNudge = stateFromStores(16654).useGuildOpenNudge();
  const obj3 = stateFromStores(16654);
  const postCallDisconnectNudge = stateFromStores(16656).usePostCallDisconnectNudge();
};
