// Module ID: 11415
// Function ID: 11416
// Name: ShowSafetyToast
// Dependencies: [4259, 9407, 9408, 2]
// Exports: showSafetyToast

// Module 11415 (ShowSafetyToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4259 */;
import _modDef9407 from "module_9407" /* 9407 */;
import ShieldIcon from "ShieldIcon" /* 9408 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/self_mod/shared/ShowSafetyToast.native.tsx");

export const showSafetyToast = function showSafetyToast(arg0) {
  ({ id, text } = arg0);
  const obj = ToastActionCreatorsDefault;
  obj.open({ key: id, icon: _modDef9407, IconComponent: ShieldIcon.ShieldIcon, iconColor: "text-brand", content: text });
};
