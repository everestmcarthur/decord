// Module ID: 15489
// Function ID: 15490
// Name: EmojiMeltingFaceIcon
// Dependencies: [19, 21, 576, 4338, 15490, 2]
// Exports: EmojiMeltingFaceIcon

// Module 15489 (EmojiMeltingFaceIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4338 */;
import _mod15490 from "module_15490" /* 15490 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/EmojiMeltingFaceIcon.tsx");

export const EmojiMeltingFaceIcon = function EmojiMeltingFaceIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod15490, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
