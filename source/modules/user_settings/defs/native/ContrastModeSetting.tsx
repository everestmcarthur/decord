// Module ID: 15415
// Function ID: 15416
// Name: slider
// Dependencies: [19, 4552, 7975, 21, 14440, 15315, 11209, 11473, 1114, 1178, 2]

// Module 15415 (slider)
import getSystemLocale from "getSystemLocale" /* 1114 */;
import Button from "Button" /* 1178 */;
import closure_2 from "noop" /* 19 */;
import closure_3 from "maybeApplyNoTextColorForLightCustomTheme" /* 4552 */;
import { jsx } from "jsxProd" /* 21 */;
import createToggle from "createToggle" /* 11473 */;

require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["TYyfO/"]);
  },
  parent: require("MobileUserSettings").MobileUserSettings.ACCESSIBILITY,
  useTrailing() {
    return jsx(Button.BetaTag, { size: Button.BetaSizes.SMALL });
  },
  useProps: function useContrastSettingProps() {
    return React.useMemo(() => ({ value: contrast.contrast, onSlidingComplete: callback(14440).setContrast, minimumValue: 0, maximumValue: 2, step: 0.1, startIcon: callback2(callback(15315).CircleMinusIcon, {}), endIcon: callback2(callback(11209).CirclePlusIcon, {}) }), []);
  }
};
createToggle = createToggle.createSlider(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/ContrastModeSetting.tsx");

export default createToggle;
