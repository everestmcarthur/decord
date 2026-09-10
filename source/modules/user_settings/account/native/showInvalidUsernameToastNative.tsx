// Module ID: 7005
// Function ID: 7006
// Name: showInvalidUsernameToastNative
// Dependencies: [4272, 1114, 7006, 2]
// Exports: showInvalidUsernameToast

// Module 7005 (showInvalidUsernameToastNative)
import util from "util" /* 1114 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4272 */;
import _modDef7006 from "module_7006" /* 7006 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/account/native/showInvalidUsernameToastNative.tsx");

export const showInvalidUsernameToast = function showInvalidUsernameToast() {
  const obj2 = { key: "USER_SETTINGS_UPDATE_FAILURE", content: null, icon: null };
  const intl = util.intl;
  obj2.content = intl.string(util.t["TGg/2k"]);
  obj2.icon = _modDef7006;
  ToastActionCreatorsDefault.open(obj2);
};
