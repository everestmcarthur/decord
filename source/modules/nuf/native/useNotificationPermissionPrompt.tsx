// Module ID: 16594
// Function ID: 16595
// Name: useNotificationPermissionPrompt
// Dependencies: [19, 1950, 5328, 1951, 12502, 504, 1953, 12511, 16595, 16597, 2]
// Exports: default

// Module 16594 (useNotificationPermissionPrompt)
import NotificationUtilsDefault from "NotificationUtils" /* 12511 */;
import noop from "module_19" /* 19 */;
import LoginRequiredActionStore from "LoginRequiredActionStore" /* 1950 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5328 */;
import UserRequiredActionStore from "UserRequiredActionStore" /* 1951 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 12502 */;

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
          const permission = tmp3(12511).requestPermission();
          tmp3(12511).shouldRequestNotification = false;
          const tmp3Result = tmp3(12511);
        }
        tmp5 = NotificationUtilsDefault.shouldRequestNotification && !PushNotificationPermissionStore.promptSeen;
      }
    }
  }, items2);
  const obj2 = stateFromStores(504);
  const guildOpenNudge = stateFromStores(16595).useGuildOpenNudge();
  const obj3 = stateFromStores(16595);
  const postCallDisconnectNudge = stateFromStores(16597).usePostCallDisconnectNudge();
};
