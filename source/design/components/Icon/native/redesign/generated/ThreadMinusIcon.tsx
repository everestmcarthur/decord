// Module ID: 13144
// Function ID: 13145
// Name: ThreadMinusIcon
// Dependencies: [19, 21, 576, 4307, 13145, 2]
// Exports: ThreadMinusIcon

// Module 13144 (ThreadMinusIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4307 */;
import _mod13145 from "module_13145" /* 13145 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/ThreadMinusIcon.tsx");

export const ThreadMinusIcon = function ThreadMinusIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod13145, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
