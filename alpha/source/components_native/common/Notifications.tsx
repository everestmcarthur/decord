// Module ID: 10334
// Function ID: 10335
// Name: common/Notifications
// Dependencies: [19, 10335, 21, 504, 10360, 2]
// Exports: default

// Module 10334 (common/Notifications)
import initialize from "initialize" /* 504 */;
import InAppNotificationContainerDefault from "InAppNotificationContainer" /* 10360 */;
import noop from "module_19" /* 19 */;
import InAppNotificationStore from "InAppNotificationStore" /* 10335 */;

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
