// Module ID: 9559
// Function ID: 9560
// Name: openNotificationSettings
// Dependencies: [5359, 2]
// Exports: default

// Module 9559 (openNotificationSettings)
import NativeDeviceSettingsModuleDefault from "NativeDeviceSettingsModule" /* 5359 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/native_permissions/mobile/openNotificationSettings.native.tsx");

export default function openNotificationSettings() {
  const result = NativeDeviceSettingsModuleDefault.openNotificationSettings();
};
