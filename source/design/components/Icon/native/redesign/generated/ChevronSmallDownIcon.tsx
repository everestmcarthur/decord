// Module ID: 11250
// Function ID: 11251
// Name: ChevronSmallDownIcon
// Dependencies: [19, 21, 576, 4307, 11251, 2]
// Exports: ChevronSmallDownIcon

// Module 11250 (ChevronSmallDownIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4307 */;
import _mod11251 from "module_11251" /* 11251 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/ChevronSmallDownIcon.tsx");

export const ChevronSmallDownIcon = function ChevronSmallDownIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod11251, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
