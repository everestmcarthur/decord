// Module ID: 10729
// Function ID: 10730
// Name: PollsIcon
// Dependencies: [19, 21, 576, 4307, 10730, 2]
// Exports: PollsIcon

// Module 10729 (PollsIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4307 */;
import _mod10730 from "module_10730" /* 10730 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/PollsIcon.tsx");

export const PollsIcon = function PollsIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod10730, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
