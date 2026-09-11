// Module ID: 5131
// Function ID: 5132
// Name: TextControllerIcon
// Dependencies: [19, 21, 576, 4307, 5115, 2]
// Exports: TextControllerIcon

// Module 5131 (TextControllerIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4307 */;
import _mod5115 from "module_5115" /* 5115 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/TextControllerIcon.tsx");

export const TextControllerIcon = function TextControllerIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod5115, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
