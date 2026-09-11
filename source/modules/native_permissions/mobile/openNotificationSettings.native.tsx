// Module ID: 9783
// Function ID: 9784
// Name: openNotificationSettings
// Dependencies: [17, 1115, 5200, 2]
// Exports: default

// Module 9783 (openNotificationSettings)
import _mod17 from "module_17" /* 17 */;
import NativeDeviceSettingsModuleDefault from "NativeDeviceSettingsModule" /* 5200 */;
import size from "module_2" /* 2 */;

const NativeModules = _mod17.NativeModules;
let result = size.fileFinishedImporting("modules/native_permissions/mobile/openNotificationSettings.native.tsx");

export default function openNotificationSettings() {
  if (obj.isAndroid()) {
    const result = NativeDeviceSettingsModuleDefault.openNotificationSettings();
  } else {
    const DeviceSettingsManager = NativeModules.DeviceSettingsManager;
    const result1 = DeviceSettingsManager.openNotificationSettings();
  }
};
