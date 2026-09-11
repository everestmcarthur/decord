// Module ID: 11339
// Function ID: 11340
// Name: PencilSparkleIcon
// Dependencies: [19, 21, 576, 4307, 11340, 2]
// Exports: PencilSparkleIcon

// Module 11339 (PencilSparkleIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4307 */;
import _mod11340 from "module_11340" /* 11340 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/PencilSparkleIcon.tsx");

export const PencilSparkleIcon = function PencilSparkleIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod11340, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
