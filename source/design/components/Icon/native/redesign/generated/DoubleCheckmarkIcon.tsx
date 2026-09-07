// Module ID: 15620
// Function ID: 15621
// Name: DoubleCheckmarkIcon
// Dependencies: [19, 21, 576, 4261, 15621, 2]
// Exports: DoubleCheckmarkIcon

// Module 15620 (DoubleCheckmarkIcon)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4261 */;
import registerAsset from "registerAsset" /* 15621 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Icon/native/redesign/generated/DoubleCheckmarkIcon.tsx");

export const DoubleCheckmarkIcon = function DoubleCheckmarkIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = ThemesDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.create(null));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: registerAsset, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
