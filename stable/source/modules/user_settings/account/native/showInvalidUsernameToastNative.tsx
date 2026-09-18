// Module ID: 6991
// Function ID: 6992
// Name: showInvalidUsernameToastNative
// Dependencies: [4259, 1114, 6992, 2]
// Exports: showInvalidUsernameToast

// Module 6991 (showInvalidUsernameToastNative)
import util from "util" /* 1114 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4259 */;
import _modDef6992 from "module_6992" /* 6992 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/account/native/showInvalidUsernameToastNative.tsx");

export const showInvalidUsernameToast = function showInvalidUsernameToast() {
  const obj2 = { key: "USER_SETTINGS_UPDATE_FAILURE", content: null, icon: null };
  const intl = util.intl;
  obj2.content = intl.string(util.t["TGg/2k"]);
  obj2.icon = _modDef6992;
  ToastActionCreatorsDefault.open(obj2);
};
