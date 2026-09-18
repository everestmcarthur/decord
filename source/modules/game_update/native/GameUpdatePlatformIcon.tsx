// Module ID: 9120
// Function ID: 9121
// Name: GameUpdatePlatformIcon
// Dependencies: [19, 21, 8574, 9121, 8939, 9123, 9125, 7154, 8682, 2]
// Exports: GameUpdatePlatformIcon

// Module 9120 (GameUpdatePlatformIcon)
import PlatformType from "PlatformType" /* 8574 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_update/native/GameUpdatePlatformIcon.tsx");

export const GameUpdatePlatformIcon = function GameUpdatePlatformIcon(color) {
  ({ platform, size } = color);
  if (size === undefined) {
    size = "xs";
  }
  color = color.color;
  if (PlatformType.PlatformType.DESKTOP === platform) {
    const obj2 = { size, color };
    return jsx(tmp(9121).ScreenIcon, { size, color });
  } else if (tmp(8574).PlatformType.XBOX === platform) {
    const obj3 = { size, color };
    return jsx(tmp(8939).XboxNeutralIcon, { size, color });
  } else if (tmp(8574).PlatformType.PLAYSTATION === platform) {
    const obj4 = { size, color };
    return jsx(tmp(9123).PlaystationNeutralIcon, { size, color });
  } else if (tmp(8574).PlatformType.NINTENDO === platform) {
    const obj5 = { size, color };
    return jsx(tmp(9125).NintendoSwitchNeutralIcon, { size, color });
  } else if (tmp(8574).PlatformType.ANDROID === platform) {
    const obj6 = { size, color };
    return jsx(tmp(7154).MobilePhoneIcon, { size, color });
  } else if (tmp(8574).PlatformType.IOS === platform) {
    const obj = { size, color };
    return jsx(tmp(8682).AppleNeutralIcon, { size, color });
  } else {
    return null;
  }
};
