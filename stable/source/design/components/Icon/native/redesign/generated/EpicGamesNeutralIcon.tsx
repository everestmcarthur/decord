// Module ID: 8702
// Function ID: 8703
// Name: EpicGamesNeutralIcon
// Dependencies: [19, 21, 576, 4261, 8703, 2]
// Exports: EpicGamesNeutralIcon

// Module 8702 (EpicGamesNeutralIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4261 */;
import _mod8703 from "module_8703" /* 8703 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/EpicGamesNeutralIcon.tsx");

export const EpicGamesNeutralIcon = function EpicGamesNeutralIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod8703, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
