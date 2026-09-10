// Module ID: 15564
// Function ID: 15565
// Name: SettingsNotificationUtils
// Dependencies: [1115, 4584, 2]
// Exports: hasAndroidNotificationChannels

// Module 15564 (SettingsNotificationUtils)
import PlatformUtils from "PlatformUtils" /* 1115 */;
import DeviceUtils from "DeviceUtils" /* 4584 */;
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
