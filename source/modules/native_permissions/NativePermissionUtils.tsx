// Module ID: 5226
// Function ID: 5227
// Name: NativePermissionUtils
// Dependencies: [5227, 5228, 5229, 5233, 2, 5230]

// Module 5226 (NativePermissionUtils)
import NativePermissionManager_mod from "NativePermissionManager" /* 5227 */;

let NativePermissionManager = NativePermissionManager_mod;
NativePermissionManager = NativePermissionManager.initialize();
const ProcessArgs = fn(5228).ProcessArgs;
if (ProcessArgs.isDiscordTestSet()) {
  let _default = fn(5229).default;
} else {
  _default = fn(5233).default;
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/native_permissions/NativePermissionUtils.tsx");

export default _default;
export const NativePermissionsRequestOptions = fn(5230).NativePermissionsRequestOptions;
