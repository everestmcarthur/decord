// Module ID: 8569
// Function ID: 8570
// Name: UnknownGameIcon
// Dependencies: [19, 21, 576, 4261, 8132, 2]
// Exports: UnknownGameIcon

// Module 8569 (UnknownGameIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4261 */;
import _mod8132 from "module_8132" /* 8132 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/UnknownGameIcon.tsx");

export const UnknownGameIcon = function UnknownGameIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod8132, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
