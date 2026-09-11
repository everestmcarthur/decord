// Module ID: 10168
// Function ID: 10169
// Name: common/Notifications
// Dependencies: [19, 10169, 21, 504, 10194, 2]
// Exports: default

// Module 10168 (common/Notifications)
import initialize from "initialize" /* 504 */;
import InAppNotificationContainerDefault from "InAppNotificationContainer" /* 10194 */;
import noop from "module_19" /* 19 */;
import InAppNotificationStore from "InAppNotificationStore" /* 10169 */;

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
