// Module ID: 12757
// Function ID: 12758
// Name: PlusMediumIcon
// Dependencies: [19, 21, 576, 4261, 12203, 2]
// Exports: PlusMediumIcon

// Module 12757 (PlusMediumIcon)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4261 */;
import registerAsset from "registerAsset" /* 12203 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Icon/native/redesign/generated/PlusMediumIcon.tsx");

export const PlusMediumIcon = function PlusMediumIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = ThemesDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.create(null));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: registerAsset, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
