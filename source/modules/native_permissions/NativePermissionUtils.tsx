// Module ID: 5223
// Function ID: 5224
// Name: NativePermissionUtils
// Dependencies: [5224, 5225, 5226, 5230, 2, 5227]

// Module 5223 (NativePermissionUtils)
import NativePermissionManager_mod from "NativePermissionManager" /* 5224 */;

let NativePermissionManager = NativePermissionManager_mod;
NativePermissionManager = NativePermissionManager.initialize();
const ProcessArgs = fn(5225).ProcessArgs;
if (ProcessArgs.isDiscordTestSet()) {
  let _default = fn(5226).default;
} else {
  _default = fn(5230).default;
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/native_permissions/NativePermissionUtils.tsx");

export default _default;
export const NativePermissionsRequestOptions = fn(5227).NativePermissionsRequestOptions;
