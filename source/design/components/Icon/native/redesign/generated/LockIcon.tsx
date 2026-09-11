// Module ID: 5147
// Function ID: 5148
// Name: LockIcon
// Dependencies: [19, 21, 576, 4307, 5120, 2]
// Exports: LockIcon

// Module 5147 (LockIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4307 */;
import _mod5120 from "module_5120" /* 5120 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/LockIcon.tsx");

export const LockIcon = function LockIcon(WHITE) {
  let INTERACTIVE_ICON_DEFAULT = WHITE.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(WHITE, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod5120, color: INTERACTIVE_ICON_DEFAULT, style: WHITE.style });
};
