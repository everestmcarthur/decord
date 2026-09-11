// Module ID: 17666
// Function ID: 17667
// Name: StickerPlusIcon
// Dependencies: [19, 21, 576, 4307, 17667, 2]
// Exports: StickerPlusIcon

// Module 17666 (StickerPlusIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4307 */;
import _mod17667 from "module_17667" /* 17667 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/StickerPlusIcon.tsx");

export const StickerPlusIcon = function StickerPlusIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod17667, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
