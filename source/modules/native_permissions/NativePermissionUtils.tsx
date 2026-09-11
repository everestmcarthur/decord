// Module ID: 5191
// Function ID: 5192
// Name: NativePermissionUtils
// Dependencies: [5192, 5193, 5194, 5198, 2, 5195]

// Module 5191 (NativePermissionUtils)
import NativePermissionManager_mod from "NativePermissionManager" /* 5192 */;

let NativePermissionManager = NativePermissionManager_mod;
NativePermissionManager = NativePermissionManager.initialize();
const ProcessArgs = fn(5193).ProcessArgs;
if (ProcessArgs.isDiscordTestSet()) {
  let _default = fn(5194).default;
} else {
  _default = fn(5198).default;
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/native_permissions/NativePermissionUtils.tsx");

export default _default;
export const NativePermissionsRequestOptions = fn(5195).NativePermissionsRequestOptions;
