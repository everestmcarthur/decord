// Module ID: 5155
// Function ID: 5156
// Name: AppsWarningIcon
// Dependencies: [19, 21, 576, 4307, 5107, 2]
// Exports: AppsWarningIcon

// Module 5155 (AppsWarningIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4307 */;
import _mod5107 from "module_5107" /* 5107 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/AppsWarningIcon.tsx");

export const AppsWarningIcon = function AppsWarningIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod5107, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
