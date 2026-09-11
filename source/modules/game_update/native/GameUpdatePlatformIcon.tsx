// Module ID: 8968
// Function ID: 8969
// Name: GameUpdatePlatformIcon
// Dependencies: [19, 21, 8428, 8969, 8799, 8971, 8973, 7031, 8535, 2]
// Exports: GameUpdatePlatformIcon

// Module 8968 (GameUpdatePlatformIcon)
import PlatformType from "PlatformType" /* 8428 */;
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
    return jsx(tmp(8969).ScreenIcon, { size, color });
  } else if (tmp(8428).PlatformType.XBOX === platform) {
    const obj3 = { size, color };
    return jsx(tmp(8799).XboxNeutralIcon, { size, color });
  } else if (tmp(8428).PlatformType.PLAYSTATION === platform) {
    const obj4 = { size, color };
    return jsx(tmp(8971).PlaystationNeutralIcon, { size, color });
  } else if (tmp(8428).PlatformType.NINTENDO === platform) {
    const obj5 = { size, color };
    return jsx(tmp(8973).NintendoSwitchNeutralIcon, { size, color });
  } else if (tmp(8428).PlatformType.ANDROID === platform) {
    const obj6 = { size, color };
    return jsx(tmp(7031).MobilePhoneIcon, { size, color });
  } else if (tmp(8428).PlatformType.IOS === platform) {
    const obj = { size, color };
    return jsx(tmp(8535).AppleNeutralIcon, { size, color });
  } else {
    return null;
  }
};
