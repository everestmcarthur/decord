// Module ID: 15515
// Function ID: 15516
// Name: SettingsNotificationUtils
// Dependencies: [1115, 4553, 2]
// Exports: hasAndroidNotificationChannels

// Module 15515 (SettingsNotificationUtils)
import PlatformUtils from "PlatformUtils" /* 1115 */;
import DeviceUtils from "DeviceUtils" /* 4553 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/notifications/native/SettingsNotificationUtils.tsx");

export const hasAndroidNotificationChannels = function hasAndroidNotificationChannels() {
  let isAndroidResult = PlatformUtils.isAndroid();
  if (isAndroidResult) {
    const _parseInt = parseInt;
    isAndroidResult = parseInt(DeviceUtils.getSystemVersion(), 10) >= 26;
    const tmpResult = DeviceUtils;
  }
  return isAndroidResult;
};
