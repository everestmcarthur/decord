// Module ID: 10447
// Function ID: 10448
// Name: getPushNotificationLogs
// Dependencies: [502, 9558, 2]
// Exports: default

// Module 10447 (getPushNotificationLogs)
import NativePushNotificationMonitorModuleDefault from "NativePushNotificationMonitorModule" /* 9558 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/debug/getPushNotificationLogs.android.tsx");

export default function getPushNotificationLogs() {
  const pushNotificationLogs = NativePushNotificationMonitorModuleDefault.getPushNotificationLogs(AuthenticationStore.getId());
  return pushNotificationLogs.then((result) => {
    let pushNotifications = JSON.parse(result).pushNotifications;
    if (pushNotifications == null) {
      pushNotifications = [];
    }
    return pushNotifications;
  });
};
