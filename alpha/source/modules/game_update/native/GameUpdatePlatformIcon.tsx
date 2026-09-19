// Module ID: 9159
// Function ID: 9160
// Name: GameUpdatePlatformIcon
// Dependencies: [19, 21, 8612, 9160, 8978, 9162, 9164, 7198, 8720, 2]
// Exports: GameUpdatePlatformIcon

// Module 9159 (GameUpdatePlatformIcon)
import PlatformType from "PlatformType" /* 8612 */;
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
    return jsx(tmp(9160).ScreenIcon, { size, color });
  } else if (tmp(8612).PlatformType.XBOX === platform) {
    const obj3 = { size, color };
    return jsx(tmp(8978).XboxNeutralIcon, { size, color });
  } else if (tmp(8612).PlatformType.PLAYSTATION === platform) {
    const obj4 = { size, color };
    return jsx(tmp(9162).PlaystationNeutralIcon, { size, color });
  } else if (tmp(8612).PlatformType.NINTENDO === platform) {
    const obj5 = { size, color };
    return jsx(tmp(9164).NintendoSwitchNeutralIcon, { size, color });
  } else if (tmp(8612).PlatformType.ANDROID === platform) {
    const obj6 = { size, color };
    return jsx(tmp(7198).MobilePhoneIcon, { size, color });
  } else if (tmp(8612).PlatformType.IOS === platform) {
    const obj = { size, color };
    return jsx(tmp(8720).AppleNeutralIcon, { size, color });
  } else {
    return null;
  }
};
