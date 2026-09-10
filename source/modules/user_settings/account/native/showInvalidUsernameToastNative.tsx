// Module ID: 7043
// Function ID: 7044
// Name: showInvalidUsernameToastNative
// Dependencies: [4303, 1114, 7044, 2]
// Exports: showInvalidUsernameToast

// Module 7043 (showInvalidUsernameToastNative)
import util from "util" /* 1114 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4303 */;
import _modDef7044 from "module_7044" /* 7044 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/account/native/showInvalidUsernameToastNative.tsx");

export const showInvalidUsernameToast = function showInvalidUsernameToast() {
  const obj2 = { key: "USER_SETTINGS_UPDATE_FAILURE", content: null, icon: null };
  const intl = util.intl;
  obj2.content = intl.string(util.t["TGg/2k"]);
  obj2.icon = _modDef7044;
  ToastActionCreatorsDefault.open(obj2);
};
