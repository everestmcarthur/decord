// Module ID: 10335
// Function ID: 10336
// Name: ChatMarkUnreadIcon
// Dependencies: [19, 21, 576, 4307, 10336, 2]
// Exports: ChatMarkUnreadIcon

// Module 10335 (ChatMarkUnreadIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4307 */;
import _mod10336 from "module_10336" /* 10336 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/ChatMarkUnreadIcon.tsx");

export const ChatMarkUnreadIcon = function ChatMarkUnreadIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod10336, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
