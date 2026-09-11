// Module ID: 5198
// Function ID: 5199
// Name: openPrivacySettings
// Dependencies: [17, 1115, 5199, 2]
// Exports: default

// Module 5198 (openPrivacySettings)
import _mod17 from "module_17" /* 17 */;
import NativeDeviceSettingsModuleDefault from "NativeDeviceSettingsModule" /* 5199 */;
import size from "module_2" /* 2 */;

const NativeModules = _mod17.NativeModules;
const result = size.fileFinishedImporting("modules/native_permissions/mobile/openPrivacySettings.native.tsx");

export default function openPrivacySettings() {
  if (obj.isAndroid()) {
    NativeDeviceSettingsModuleDefault.openPrivacySettings();
  } else {
    const DeviceSettingsManager = NativeModules.DeviceSettingsManager;
    DeviceSettingsManager.openPrivacySettings();
  }
};
