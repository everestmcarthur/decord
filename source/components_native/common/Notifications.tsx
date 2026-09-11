// Module ID: 10170
// Function ID: 10171
// Name: common/Notifications
// Dependencies: [19, 10171, 21, 504, 10196, 2]
// Exports: default

// Module 10170 (common/Notifications)
import initialize from "initialize" /* 504 */;
import InAppNotificationContainerDefault from "InAppNotificationContainer" /* 10196 */;
import noop from "module_19" /* 19 */;
import InAppNotificationStore from "InAppNotificationStore" /* 10171 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("components_native/common/Notifications.tsx");

export default function Notifications() {
  const items = [InAppNotificationStore];
  const stateFromStores = initialize.useStateFromStores(items, () => currentNotification.getCurrentNotification());
  let tmp3 = null;
  if (null != stateFromStores) {
    const obj2 = { notification: stateFromStores };
    tmp3 = jsx(InAppNotificationContainerDefault, { notification: stateFromStores }, stateFromStores.key);
  }
  return tmp3;
};
