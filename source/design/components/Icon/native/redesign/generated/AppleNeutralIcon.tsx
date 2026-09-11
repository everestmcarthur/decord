// Module ID: 8537
// Function ID: 8538
// Name: AppleNeutralIcon
// Dependencies: [19, 21, 576, 4307, 8538, 2]
// Exports: AppleNeutralIcon

// Module 8537 (AppleNeutralIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4307 */;
import _mod8538 from "module_8538" /* 8538 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/AppleNeutralIcon.tsx");

export const AppleNeutralIcon = function AppleNeutralIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod8538, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
