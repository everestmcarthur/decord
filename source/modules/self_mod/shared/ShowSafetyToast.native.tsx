// Module ID: 11504
// Function ID: 11505
// Name: ShowSafetyToast
// Dependencies: [4305, 9492, 9493, 2]
// Exports: showSafetyToast

// Module 11504 (ShowSafetyToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4305 */;
import _modDef9492 from "module_9492" /* 9492 */;
import ShieldIcon from "ShieldIcon" /* 9493 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/self_mod/shared/ShowSafetyToast.native.tsx");

export const showSafetyToast = function showSafetyToast(arg0) {
  ({ id, text } = arg0);
  const obj = ToastActionCreatorsDefault;
  obj.open({ key: id, icon: _modDef9492, IconComponent: ShieldIcon.ShieldIcon, iconColor: "text-brand", content: text });
};
