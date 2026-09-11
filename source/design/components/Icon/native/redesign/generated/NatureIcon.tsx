// Module ID: 10441
// Function ID: 10442
// Name: NatureIcon
// Dependencies: [19, 21, 576, 4307, 10442, 2]
// Exports: NatureIcon

// Module 10441 (NatureIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4307 */;
import _mod10442 from "module_10442" /* 10442 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/NatureIcon.tsx");

export const NatureIcon = function NatureIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod10442, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
