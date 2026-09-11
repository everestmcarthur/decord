// Module ID: 11503
// Function ID: 11504
// Name: EducationIcon
// Dependencies: [19, 21, 576, 4307, 11502, 2]
// Exports: EducationIcon

// Module 11503 (EducationIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4307 */;
import _mod11502 from "module_11502" /* 11502 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/EducationIcon.tsx");

export const EducationIcon = function EducationIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod11502, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
