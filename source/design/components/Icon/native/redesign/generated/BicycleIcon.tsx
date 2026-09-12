// Module ID: 10482
// Function ID: 10483
// Name: BicycleIcon
// Dependencies: [19, 21, 576, 4337, 10483, 2]
// Exports: BicycleIcon

// Module 10482 (BicycleIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4337 */;
import _mod10483 from "module_10483" /* 10483 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/BicycleIcon.tsx");

export const BicycleIcon = function BicycleIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod10483, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
