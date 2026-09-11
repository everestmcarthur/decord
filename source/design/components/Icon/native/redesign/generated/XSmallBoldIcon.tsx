// Module ID: 8048
// Function ID: 8049
// Name: XSmallBoldIcon
// Dependencies: [19, 21, 576, 4307, 7276, 2]
// Exports: XSmallBoldIcon

// Module 8048 (XSmallBoldIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4307 */;
import _mod7276 from "module_7276" /* 7276 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/XSmallBoldIcon.tsx");

export const XSmallBoldIcon = function XSmallBoldIcon(WHITE) {
  let INTERACTIVE_ICON_DEFAULT = WHITE.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(WHITE, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod7276, color: INTERACTIVE_ICON_DEFAULT, style: WHITE.style });
};
