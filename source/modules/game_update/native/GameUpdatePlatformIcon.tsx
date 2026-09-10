// Module ID: 8910
// Function ID: 8911
// Name: GameUpdatePlatformIcon
// Dependencies: [19, 21, 8370, 8911, 8741, 8913, 8915, 6974, 8477, 2]
// Exports: GameUpdatePlatformIcon

// Module 8910 (GameUpdatePlatformIcon)
import PlatformType from "PlatformType" /* 8370 */;
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
    return jsx(tmp(8911).ScreenIcon, { size, color });
  } else if (tmp(8370).PlatformType.XBOX === platform) {
    const obj3 = { size, color };
    return jsx(tmp(8741).XboxNeutralIcon, { size, color });
  } else if (tmp(8370).PlatformType.PLAYSTATION === platform) {
    const obj4 = { size, color };
    return jsx(tmp(8913).PlaystationNeutralIcon, { size, color });
  } else if (tmp(8370).PlatformType.NINTENDO === platform) {
    const obj5 = { size, color };
    return jsx(tmp(8915).NintendoSwitchNeutralIcon, { size, color });
  } else if (tmp(8370).PlatformType.ANDROID === platform) {
    const obj6 = { size, color };
    return jsx(tmp(6974).MobilePhoneIcon, { size, color });
  } else if (tmp(8370).PlatformType.IOS === platform) {
    const obj = { size, color };
    return jsx(tmp(8477).AppleNeutralIcon, { size, color });
  } else {
    return null;
  }
};
