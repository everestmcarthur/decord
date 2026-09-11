// Module ID: 5190
// Function ID: 5191
// Name: NativePermissionUtils
// Dependencies: [5191, 5192, 5193, 5197, 2, 5194]

// Module 5190 (NativePermissionUtils)
import NativePermissionManager_mod from "NativePermissionManager" /* 5191 */;

let NativePermissionManager = NativePermissionManager_mod;
NativePermissionManager = NativePermissionManager.initialize();
const ProcessArgs = fn(5192).ProcessArgs;
if (ProcessArgs.isDiscordTestSet()) {
  let _default = fn(5193).default;
} else {
  _default = fn(5197).default;
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/native_permissions/NativePermissionUtils.tsx");

export default _default;
export const NativePermissionsRequestOptions = fn(5194).NativePermissionsRequestOptions;
