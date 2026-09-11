// Module ID: 14660
// Function ID: 14661
// Name: showInvalidProfileUpdateToastNative
// Dependencies: [4305, 7066, 576, 2]
// Exports: showGenericGuildProfileUpdateFailureToast, showGenericProfileUpdateFailureToast

// Module 14660 (showInvalidProfileUpdateToastNative)
import nativeDefault from "native" /* 576 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4305 */;
import _modDef7066 from "module_7066" /* 7066 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/profiles/native/showInvalidProfileUpdateToastNative.tsx");

export const showGenericProfileUpdateFailureToast = function showGenericProfileUpdateFailureToast(avatar) {
  const obj = ToastActionCreatorsDefault;
  obj.open({ key: "USER_SETTINGS_UPDATE_FAILURE", content: avatar, icon: _modDef7066, iconColor: nativeDefault.colors.ICON_FEEDBACK_CRITICAL, recolorLegacyIcon: true });
};
export const showGenericGuildProfileUpdateFailureToast = function showGenericGuildProfileUpdateFailureToast(avatar) {
  const obj = ToastActionCreatorsDefault;
  obj.open({ key: "USER_SETTINGS_UPDATE_FAILURE", content: avatar, icon: _modDef7066, iconColor: nativeDefault.colors.ICON_FEEDBACK_CRITICAL, recolorLegacyIcon: true });
};
