// Module ID: 8850
// Function ID: 8851
// Name: ReactionIcon
// Dependencies: [19, 21, 576, 4307, 8851, 2]
// Exports: ReactionIcon

// Module 8850 (ReactionIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4307 */;
import _mod8851 from "module_8851" /* 8851 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/ReactionIcon.tsx");

export const ReactionIcon = function ReactionIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod8851, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
