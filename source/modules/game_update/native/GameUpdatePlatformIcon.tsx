// Module ID: 9021
// Function ID: 9022
// Name: GameUpdatePlatformIcon
// Dependencies: [19, 21, 8472, 9022, 8843, 9024, 9026, 7068, 8579, 2]
// Exports: GameUpdatePlatformIcon

// Module 9021 (GameUpdatePlatformIcon)
import PlatformType from "PlatformType" /* 8472 */;
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
    return jsx(tmp(9022).ScreenIcon, { size, color });
  } else if (tmp(8472).PlatformType.XBOX === platform) {
    const obj3 = { size, color };
    return jsx(tmp(8843).XboxNeutralIcon, { size, color });
  } else if (tmp(8472).PlatformType.PLAYSTATION === platform) {
    const obj4 = { size, color };
    return jsx(tmp(9024).PlaystationNeutralIcon, { size, color });
  } else if (tmp(8472).PlatformType.NINTENDO === platform) {
    const obj5 = { size, color };
    return jsx(tmp(9026).NintendoSwitchNeutralIcon, { size, color });
  } else if (tmp(8472).PlatformType.ANDROID === platform) {
    const obj6 = { size, color };
    return jsx(tmp(7068).MobilePhoneIcon, { size, color });
  } else if (tmp(8472).PlatformType.IOS === platform) {
    const obj = { size, color };
    return jsx(tmp(8579).AppleNeutralIcon, { size, color });
  } else {
    return null;
  }
};
