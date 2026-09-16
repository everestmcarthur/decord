// Module ID: 15507
// Function ID: 15508
// Name: EmojiUpsideDownFaceIcon
// Dependencies: [19, 21, 576, 4338, 15508, 2]
// Exports: EmojiUpsideDownFaceIcon

// Module 15507 (EmojiUpsideDownFaceIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4338 */;
import _mod15508 from "module_15508" /* 15508 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/EmojiUpsideDownFaceIcon.tsx");

export const EmojiUpsideDownFaceIcon = function EmojiUpsideDownFaceIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod15508, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
