// Module ID: 9524
// Function ID: 9525
// Name: HammerIcon
// Dependencies: [19, 21, 576, 4307, 9525, 2]
// Exports: HammerIcon

// Module 9524 (HammerIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4307 */;
import _mod9525 from "module_9525" /* 9525 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/HammerIcon.tsx");

export const HammerIcon = function HammerIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod9525, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
