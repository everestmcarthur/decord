// Module ID: 7064
// Function ID: 7065
// Name: showInvalidUsernameToastNative
// Dependencies: [4305, 1114, 7065, 2]
// Exports: showInvalidUsernameToast

// Module 7064 (showInvalidUsernameToastNative)
import util from "util" /* 1114 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4305 */;
import _modDef7065 from "module_7065" /* 7065 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/account/native/showInvalidUsernameToastNative.tsx");

export const showInvalidUsernameToast = function showInvalidUsernameToast() {
  const obj2 = { key: "USER_SETTINGS_UPDATE_FAILURE", content: null, icon: null };
  const intl = util.intl;
  obj2.content = intl.string(util.t["TGg/2k"]);
  obj2.icon = _modDef7065;
  ToastActionCreatorsDefault.open(obj2);
};
