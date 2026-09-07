// Module ID: 10196
// Function ID: 10197
// Name: getPushNotificationLogs
// Dependencies: [502, 9694, 2]
// Exports: default

// Module 10196 (getPushNotificationLogs)
import enforcingDefault from "enforcing" /* 9694 */;
import closure_2 from "fetchFingerprint" /* 502 */;

const result = require("set").fileFinishedImporting("modules/debug/getPushNotificationLogs.android.tsx");

export default function getPushNotificationLogs(id) {
  const pushNotificationLogs = enforcingDefault.getPushNotificationLogs(id.getId());
  return pushNotificationLogs.then((arg0) => {
    let pushNotifications = JSON.parse(arg0).pushNotifications;
    if (pushNotifications == null) {
      pushNotifications = [];
    }
    return pushNotifications;
  });
};
