// Module ID: 11482
// Function ID: 11483
// Name: ShowSafetyToast
// Dependencies: [4303, 9471, 9472, 2]
// Exports: showSafetyToast

// Module 11482 (ShowSafetyToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4303 */;
import _modDef9471 from "module_9471" /* 9471 */;
import ShieldIcon from "ShieldIcon" /* 9472 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/self_mod/shared/ShowSafetyToast.native.tsx");

export const showSafetyToast = function showSafetyToast(arg0) {
  ({ id, text } = arg0);
  const obj = ToastActionCreatorsDefault;
  obj.open({ key: id, icon: _modDef9471, IconComponent: ShieldIcon.ShieldIcon, iconColor: "text-brand", content: text });
};
