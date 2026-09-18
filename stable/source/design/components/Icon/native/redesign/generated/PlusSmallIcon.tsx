// Module ID: 8873
// Function ID: 8874
// Name: PlusSmallIcon
// Dependencies: [19, 21, 576, 4261, 8874, 2]
// Exports: PlusSmallIcon

// Module 8873 (PlusSmallIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4261 */;
import _mod8874 from "module_8874" /* 8874 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/PlusSmallIcon.tsx");

export const PlusSmallIcon = function PlusSmallIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod8874, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
