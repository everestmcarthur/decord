// Module ID: 5232
// Function ID: 5233
// Name: openPrivacySettings
// Dependencies: [5233, 2]
// Exports: default

// Module 5232 (openPrivacySettings)
import NativeDeviceSettingsModuleDefault from "NativeDeviceSettingsModule" /* 5233 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/native_permissions/mobile/openPrivacySettings.native.tsx");

export default function openPrivacySettings() {
  NativeDeviceSettingsModuleDefault.openPrivacySettings();
};
