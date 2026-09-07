// Module ID: 15416
// Function ID: 15417
// Name: slider
// Dependencies: [19, 4552, 7975, 21, 14440, 15315, 11209, 11473, 1114, 1178, 2]

// Module 15416 (slider)
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
    return intl.string(getSystemLocale.t["5PWWCY"]);
  },
  parent: require("MobileUserSettings").MobileUserSettings.ACCESSIBILITY,
  useTrailing() {
    return jsx(Button.BetaTag, { size: Button.BetaSizes.SMALL });
  },
  useProps: function useSaturationSettingProps() {
    return React.useMemo(() => ({ value: saturation.saturation, onSlidingComplete: callback(14440).setSaturation, minimumValue: 0, maximumValue: 1, step: 0.05, startIcon: callback2(callback(15315).CircleMinusIcon, {}), endIcon: callback2(callback(11209).CirclePlusIcon, {}) }), []);
  }
};
createToggle = createToggle.createSlider(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/ReduceSaturationSetting.tsx");

export default createToggle;
