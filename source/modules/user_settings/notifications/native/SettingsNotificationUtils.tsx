// Module ID: 15579
// Function ID: 15580
// Name: SettingsNotificationUtils
// Dependencies: [1364, 4618, 2]
// Exports: hasAndroidNotificationChannels

// Module 15579 (SettingsNotificationUtils)
import PlatformUtils from "PlatformUtils" /* 1364 */;
import DeviceUtils from "DeviceUtils" /* 4618 */;
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
