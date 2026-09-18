// Module ID: 5139
// Function ID: 5140
// Name: NativePermissionUtils
// Dependencies: [5140, 5141, 5142, 5146, 2, 5143]

// Module 5139 (NativePermissionUtils)
import NativePermissionManager_mod from "NativePermissionManager" /* 5140 */;

let NativePermissionManager = NativePermissionManager_mod;
NativePermissionManager = NativePermissionManager.initialize();
const ProcessArgs = fn(5141).ProcessArgs;
if (ProcessArgs.isDiscordTestSet()) {
  let _default = fn(5142).default;
} else {
  _default = fn(5146).default;
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/native_permissions/NativePermissionUtils.tsx");

export default _default;
export const NativePermissionsRequestOptions = fn(5143).NativePermissionsRequestOptions;
