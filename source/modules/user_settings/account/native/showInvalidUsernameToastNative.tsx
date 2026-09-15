// Module ID: 7098
// Function ID: 7099
// Name: showInvalidUsernameToastNative
// Dependencies: [4338, 1115, 7099, 2]
// Exports: showInvalidUsernameToast

// Module 7098 (showInvalidUsernameToastNative)
import util from "util" /* 1115 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4338 */;
import _modDef7099 from "module_7099" /* 7099 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/account/native/showInvalidUsernameToastNative.tsx");

export const showInvalidUsernameToast = function showInvalidUsernameToast() {
  const obj2 = { key: "USER_SETTINGS_UPDATE_FAILURE", content: null, icon: null };
  const intl = util.intl;
  obj2.content = intl.string(util.t["TGg/2k"]);
  obj2.icon = _modDef7099;
  ToastActionCreatorsDefault.open(obj2);
};
