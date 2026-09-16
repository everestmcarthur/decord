// Module ID: 11556
// Function ID: 11557
// Name: ShowSafetyToast
// Dependencies: [4336, 9544, 9545, 2]
// Exports: showSafetyToast

// Module 11556 (ShowSafetyToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4336 */;
import _modDef9544 from "module_9544" /* 9544 */;
import ShieldIcon from "ShieldIcon" /* 9545 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/self_mod/shared/ShowSafetyToast.native.tsx");

export const showSafetyToast = function showSafetyToast(arg0) {
  ({ id, text } = arg0);
  const obj = ToastActionCreatorsDefault;
  obj.open({ key: id, icon: _modDef9544, IconComponent: ShieldIcon.ShieldIcon, iconColor: "text-brand", content: text });
};
