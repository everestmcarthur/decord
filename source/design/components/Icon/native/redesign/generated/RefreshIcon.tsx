// Module ID: 15216
// Function ID: 15217
// Name: RefreshIcon
// Dependencies: [19, 21, 576, 4307, 15217, 2]
// Exports: RefreshIcon

// Module 15216 (RefreshIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4307 */;
import _mod15217 from "module_15217" /* 15217 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/RefreshIcon.tsx");

export const RefreshIcon = function RefreshIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod15217, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
