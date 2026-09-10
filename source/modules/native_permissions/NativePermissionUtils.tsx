// Module ID: 5153
// Function ID: 5154
// Name: NativePermissionUtils
// Dependencies: [5154, 5155, 5156, 5160, 2, 5157]

// Module 5153 (NativePermissionUtils)
import NativePermissionManager_mod from "NativePermissionManager" /* 5154 */;

let NativePermissionManager = NativePermissionManager_mod;
NativePermissionManager = NativePermissionManager.initialize();
const ProcessArgs = fn(5155).ProcessArgs;
if (ProcessArgs.isDiscordTestSet()) {
  let _default = fn(5156).default;
} else {
  _default = fn(5160).default;
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/native_permissions/NativePermissionUtils.tsx");

export default _default;
export const NativePermissionsRequestOptions = fn(5157).NativePermissionsRequestOptions;
