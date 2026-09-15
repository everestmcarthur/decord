// Module ID: 9010
// Function ID: 9011
// Name: GameUpdatePlatformIcon
// Dependencies: [19, 21, 8463, 9011, 8834, 9013, 9015, 7065, 8570, 2]
// Exports: GameUpdatePlatformIcon

// Module 9010 (GameUpdatePlatformIcon)
import PlatformType from "PlatformType" /* 8463 */;
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
    return jsx(tmp(9011).ScreenIcon, { size, color });
  } else if (tmp(8463).PlatformType.XBOX === platform) {
    const obj3 = { size, color };
    return jsx(tmp(8834).XboxNeutralIcon, { size, color });
  } else if (tmp(8463).PlatformType.PLAYSTATION === platform) {
    const obj4 = { size, color };
    return jsx(tmp(9013).PlaystationNeutralIcon, { size, color });
  } else if (tmp(8463).PlatformType.NINTENDO === platform) {
    const obj5 = { size, color };
    return jsx(tmp(9015).NintendoSwitchNeutralIcon, { size, color });
  } else if (tmp(8463).PlatformType.ANDROID === platform) {
    const obj6 = { size, color };
    return jsx(tmp(7065).MobilePhoneIcon, { size, color });
  } else if (tmp(8463).PlatformType.IOS === platform) {
    const obj = { size, color };
    return jsx(tmp(8570).AppleNeutralIcon, { size, color });
  } else {
    return null;
  }
};
