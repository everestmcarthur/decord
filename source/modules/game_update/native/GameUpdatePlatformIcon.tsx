// Module ID: 8947
// Function ID: 8948
// Name: GameUpdatePlatformIcon
// Dependencies: [19, 21, 8407, 8948, 8778, 8950, 8952, 7010, 8514, 2]
// Exports: GameUpdatePlatformIcon

// Module 8947 (GameUpdatePlatformIcon)
import PlatformType from "PlatformType" /* 8407 */;
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
    return jsx(tmp(8948).ScreenIcon, { size, color });
  } else if (tmp(8407).PlatformType.XBOX === platform) {
    const obj3 = { size, color };
    return jsx(tmp(8778).XboxNeutralIcon, { size, color });
  } else if (tmp(8407).PlatformType.PLAYSTATION === platform) {
    const obj4 = { size, color };
    return jsx(tmp(8950).PlaystationNeutralIcon, { size, color });
  } else if (tmp(8407).PlatformType.NINTENDO === platform) {
    const obj5 = { size, color };
    return jsx(tmp(8952).NintendoSwitchNeutralIcon, { size, color });
  } else if (tmp(8407).PlatformType.ANDROID === platform) {
    const obj6 = { size, color };
    return jsx(tmp(7010).MobilePhoneIcon, { size, color });
  } else if (tmp(8407).PlatformType.IOS === platform) {
    const obj = { size, color };
    return jsx(tmp(8514).AppleNeutralIcon, { size, color });
  } else {
    return null;
  }
};
