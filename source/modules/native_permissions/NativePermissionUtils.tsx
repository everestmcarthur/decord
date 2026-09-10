// Module ID: 5189
// Function ID: 5190
// Name: NativePermissionUtils
// Dependencies: [5190, 5191, 5192, 5196, 2, 5193]

// Module 5189 (NativePermissionUtils)
import NativePermissionManager_mod from "NativePermissionManager" /* 5190 */;

let NativePermissionManager = NativePermissionManager_mod;
NativePermissionManager = NativePermissionManager.initialize();
const ProcessArgs = fn(5191).ProcessArgs;
if (ProcessArgs.isDiscordTestSet()) {
  let _default = fn(5192).default;
} else {
  _default = fn(5196).default;
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/native_permissions/NativePermissionUtils.tsx");

export default _default;
export const NativePermissionsRequestOptions = fn(5193).NativePermissionsRequestOptions;
