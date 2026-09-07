// Module ID: 10083
// Function ID: 10084
// Name: Notifications
// Dependencies: [19, 10084, 21, 504, 10110, 2]
// Exports: default

// Module 10083 (Notifications)
import noopAll from "noop" /* 19 */;
import initialize from "initialize" /* 504 */;
import NotificationWrapperDefault from "NotificationWrapper" /* 10110 */;
import closure_3 from "handleAlertMessage" /* 10084 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("components_native/common/Notifications.tsx");

export default function Notifications() {
  let obj = initialize;
  const items = [closure_3];
  const stateFromStores = obj.useStateFromStores(items, () => currentNotification.getCurrentNotification());
  let tmp3 = null;
  if (null != stateFromStores) {
    obj = { notification: null };
    obj[0] = stateFromStores;
    tmp3 = jsx(NotificationWrapperDefault, { notification: null }, stateFromStores.key);
  }
  return tmp3;
};
