// Module ID: 11671
// Function ID: 11672
// Name: ShowSafetyToast
// Dependencies: [4454, 9514, 9515, 2]
// Exports: showSafetyToast

// Module 11671 (ShowSafetyToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4454 */;
import _modDef9514 from "module_9514" /* 9514 */;
import ShieldIcon from "ShieldIcon" /* 9515 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/self_mod/shared/ShowSafetyToast.native.tsx");

export const showSafetyToast = function showSafetyToast(arg0) {
  ({ id, text } = arg0);
  const obj = ToastActionCreatorsDefault;
  obj.open({ key: id, icon: _modDef9514, IconComponent: ShieldIcon.ShieldIcon, iconColor: "text-brand", content: text });
};
