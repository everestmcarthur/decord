// Module ID: 9229
// Function ID: 9230
// Name: GameControllerIcon
// Dependencies: [19, 21, 576, 4261, 8139, 2]
// Exports: GameControllerIcon

// Module 9229 (GameControllerIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4261 */;
import _mod8139 from "module_8139" /* 8139 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/GameControllerIcon.tsx");

export const GameControllerIcon = function GameControllerIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod8139, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
