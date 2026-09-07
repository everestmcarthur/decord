// Module ID: 11415
// Function ID: 11416
// Name: showSafetyToast
// Dependencies: [4259, 9406, 9407, 2]
// Exports: showSafetyToast

// Module 11415 (showSafetyToast)
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 4259 */;
import registerAssetDefault from "registerAsset" /* 9406 */;
import ShieldIcon from "ShieldIcon" /* 9407 */;

const result = set.fileFinishedImporting("modules/self_mod/shared/ShowSafetyToast.native.tsx");

export const showSafetyToast = function showSafetyToast(arg0) {
  ({ id, text } = arg0);
  let obj = dispatcherDefault;
  obj = { key: id, icon: registerAssetDefault, IconComponent: ShieldIcon.ShieldIcon, iconColor: "text-brand", content: text };
  obj.open(obj);
};
