// Module ID: 10038
// Function ID: 10039
// Name: ShieldLockIcon
// Dependencies: [19, 21, 576, 4456, 10039, 2]
// Exports: ShieldLockIcon

// Module 10038 (ShieldLockIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4456 */;
import _mod10039 from "module_10039" /* 10039 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/ShieldLockIcon.tsx");

export const ShieldLockIcon = function ShieldLockIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod10039, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
