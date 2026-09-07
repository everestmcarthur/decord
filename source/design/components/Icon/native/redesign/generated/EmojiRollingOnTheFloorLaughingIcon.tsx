// Module ID: 15404
// Function ID: 15405
// Name: EmojiRollingOnTheFloorLaughingIcon
// Dependencies: [19, 21, 576, 4261, 15405, 2]
// Exports: EmojiRollingOnTheFloorLaughingIcon

// Module 15404 (EmojiRollingOnTheFloorLaughingIcon)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4261 */;
import registerAsset from "registerAsset" /* 15405 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Icon/native/redesign/generated/EmojiRollingOnTheFloorLaughingIcon.tsx");

export const EmojiRollingOnTheFloorLaughingIcon = function EmojiRollingOnTheFloorLaughingIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = ThemesDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.create(null));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: registerAsset, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};
