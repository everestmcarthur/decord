// Module ID: 8840
// Function ID: 8841
// Name: DiceIcon
// Dependencies: [19, 21, 576, 4261, 8841, 2]
// Exports: DiceIcon

// Module 8840 (DiceIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4261 */;
import _mod8841 from "module_8841" /* 8841 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/DiceIcon.tsx");

export const DiceIcon = function DiceIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod8841, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
