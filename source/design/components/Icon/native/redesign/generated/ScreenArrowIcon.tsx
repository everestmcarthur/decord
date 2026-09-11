// Module ID: 12627
// Function ID: 12628
// Name: ScreenArrowIcon
// Dependencies: [19, 21, 576, 4307, 10064, 2]
// Exports: ScreenArrowIcon

// Module 12627 (ScreenArrowIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4307 */;
import _mod10064 from "module_10064" /* 10064 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/ScreenArrowIcon.tsx");

export const ScreenArrowIcon = function ScreenArrowIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod10064, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
