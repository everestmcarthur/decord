// Module ID: 5308
// Function ID: 5309
// Name: NativePermissionUtils
// Dependencies: [5309, 5310, 5311, 5315, 2, 5312]

// Module 5308 (NativePermissionUtils)
import NativePermissionManager_mod from "NativePermissionManager" /* 5309 */;

let NativePermissionManager = NativePermissionManager_mod;
NativePermissionManager = NativePermissionManager.initialize();
const ProcessArgs = fn(5310).ProcessArgs;
if (ProcessArgs.isDiscordTestSet()) {
  let _default = fn(5311).default;
} else {
  _default = fn(5315).default;
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/native_permissions/NativePermissionUtils.tsx");

export default _default;
export const NativePermissionsRequestOptions = fn(5312).NativePermissionsRequestOptions;
