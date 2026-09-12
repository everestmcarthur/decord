// Module ID: 15345
// Function ID: 15346
// Name: PaintPaletteIcon
// Dependencies: [19, 21, 576, 4337, 15346, 2]
// Exports: PaintPaletteIcon

// Module 15345 (PaintPaletteIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4337 */;
import _mod15346 from "module_15346" /* 15346 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/PaintPaletteIcon.tsx");

export const PaintPaletteIcon = function PaintPaletteIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod15346, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
