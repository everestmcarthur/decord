// Module ID: 8884
// Function ID: 8885
// Name: GameUpdatePlatformIcon
// Dependencies: [19, 21, 8343, 8885, 8714, 8887, 8889, 6960, 8450, 2]
// Exports: GameUpdatePlatformIcon

// Module 8884 (GameUpdatePlatformIcon)
import PlatformType from "PlatformType" /* 8343 */;
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
    return jsx(tmp(8885).ScreenIcon, { size, color });
  } else if (tmp(8343).PlatformType.XBOX === platform) {
    const obj3 = { size, color };
    return jsx(tmp(8714).XboxNeutralIcon, { size, color });
  } else if (tmp(8343).PlatformType.PLAYSTATION === platform) {
    const obj4 = { size, color };
    return jsx(tmp(8887).PlaystationNeutralIcon, { size, color });
  } else if (tmp(8343).PlatformType.NINTENDO === platform) {
    const obj5 = { size, color };
    return jsx(tmp(8889).NintendoSwitchNeutralIcon, { size, color });
  } else if (tmp(8343).PlatformType.ANDROID === platform) {
    const obj6 = { size, color };
    return jsx(tmp(6960).MobilePhoneIcon, { size, color });
  } else if (tmp(8343).PlatformType.IOS === platform) {
    const obj = { size, color };
    return jsx(tmp(8450).AppleNeutralIcon, { size, color });
  } else {
    return null;
  }
};
