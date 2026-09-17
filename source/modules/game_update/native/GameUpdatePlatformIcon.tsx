// Module ID: 9036
// Function ID: 9037
// Name: GameUpdatePlatformIcon
// Dependencies: [19, 21, 8491, 9037, 8855, 9039, 9041, 7072, 8599, 2]
// Exports: GameUpdatePlatformIcon

// Module 9036 (GameUpdatePlatformIcon)
import PlatformType from "PlatformType" /* 8491 */;
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
    return jsx(tmp(9037).ScreenIcon, { size, color });
  } else if (tmp(8491).PlatformType.XBOX === platform) {
    const obj3 = { size, color };
    return jsx(tmp(8855).XboxNeutralIcon, { size, color });
  } else if (tmp(8491).PlatformType.PLAYSTATION === platform) {
    const obj4 = { size, color };
    return jsx(tmp(9039).PlaystationNeutralIcon, { size, color });
  } else if (tmp(8491).PlatformType.NINTENDO === platform) {
    const obj5 = { size, color };
    return jsx(tmp(9041).NintendoSwitchNeutralIcon, { size, color });
  } else if (tmp(8491).PlatformType.ANDROID === platform) {
    const obj6 = { size, color };
    return jsx(tmp(7072).MobilePhoneIcon, { size, color });
  } else if (tmp(8491).PlatformType.IOS === platform) {
    const obj = { size, color };
    return jsx(tmp(8599).AppleNeutralIcon, { size, color });
  } else {
    return null;
  }
};
