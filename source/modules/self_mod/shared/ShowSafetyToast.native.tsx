// Module ID: 11506
// Function ID: 11507
// Name: ShowSafetyToast
// Dependencies: [4305, 9494, 9495, 2]
// Exports: showSafetyToast

// Module 11506 (ShowSafetyToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4305 */;
import _modDef9494 from "module_9494" /* 9494 */;
import ShieldIcon from "ShieldIcon" /* 9495 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/self_mod/shared/ShowSafetyToast.native.tsx");

export const showSafetyToast = function showSafetyToast(arg0) {
  ({ id, text } = arg0);
  const obj = ToastActionCreatorsDefault;
  obj.open({ key: id, icon: _modDef9494, IconComponent: ShieldIcon.ShieldIcon, iconColor: "text-brand", content: text });
};
