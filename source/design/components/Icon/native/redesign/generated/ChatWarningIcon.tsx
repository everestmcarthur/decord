// Module ID: 12548
// Function ID: 12549
// Name: ChatWarningIcon
// Dependencies: [19, 21, 576, 4307, 8093, 2]
// Exports: ChatWarningIcon

// Module 12548 (ChatWarningIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4307 */;
import _mod8093 from "module_8093" /* 8093 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/ChatWarningIcon.tsx");

export const ChatWarningIcon = function ChatWarningIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod8093, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
