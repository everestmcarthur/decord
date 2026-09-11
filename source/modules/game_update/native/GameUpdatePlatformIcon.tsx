// Module ID: 8970
// Function ID: 8971
// Name: GameUpdatePlatformIcon
// Dependencies: [19, 21, 8430, 8971, 8801, 8973, 8975, 7032, 8537, 2]
// Exports: GameUpdatePlatformIcon

// Module 8970 (GameUpdatePlatformIcon)
import PlatformType from "PlatformType" /* 8430 */;
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
    return jsx(tmp(8971).ScreenIcon, { size, color });
  } else if (tmp(8430).PlatformType.XBOX === platform) {
    const obj3 = { size, color };
    return jsx(tmp(8801).XboxNeutralIcon, { size, color });
  } else if (tmp(8430).PlatformType.PLAYSTATION === platform) {
    const obj4 = { size, color };
    return jsx(tmp(8973).PlaystationNeutralIcon, { size, color });
  } else if (tmp(8430).PlatformType.NINTENDO === platform) {
    const obj5 = { size, color };
    return jsx(tmp(8975).NintendoSwitchNeutralIcon, { size, color });
  } else if (tmp(8430).PlatformType.ANDROID === platform) {
    const obj6 = { size, color };
    return jsx(tmp(7032).MobilePhoneIcon, { size, color });
  } else if (tmp(8430).PlatformType.IOS === platform) {
    const obj = { size, color };
    return jsx(tmp(8537).AppleNeutralIcon, { size, color });
  } else {
    return null;
  }
};
