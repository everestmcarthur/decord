// Module ID: 4552
// Function ID: 4553
// Name: SendMessageIcon
// Dependencies: [19, 21, 576, 4307, 4553, 2]
// Exports: SendMessageIcon

// Module 4552 (SendMessageIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4307 */;
import _mod4553 from "module_4553" /* 4553 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/SendMessageIcon.tsx");

export const SendMessageIcon = function SendMessageIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod4553, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
