// Module ID: 8004
// Function ID: 8005
// Name: DenyIcon
// Dependencies: [19, 21, 576, 4307, 8005, 2]
// Exports: DenyIcon

// Module 8004 (DenyIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4307 */;
import _mod8005 from "module_8005" /* 8005 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/DenyIcon.tsx");

export const DenyIcon = function DenyIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod8005, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
