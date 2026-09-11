// Module ID: 5732
// Function ID: 5733
// Name: XSmallIcon
// Dependencies: [19, 21, 576, 4307, 5733, 2]
// Exports: XSmallIcon

// Module 5732 (XSmallIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4307 */;
import _mod5733 from "module_5733" /* 5733 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/XSmallIcon.tsx");

export const XSmallIcon = function XSmallIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod5733, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
