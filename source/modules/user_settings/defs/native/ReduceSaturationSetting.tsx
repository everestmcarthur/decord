// Module ID: 15476
// Function ID: 15477
// Name: ReduceSaturationSetting
// Dependencies: [19, 4598, 8049, 21, 14490, 15375, 11298, 11562, 1114, 1178, 2]

// Module 15476 (ReduceSaturationSetting)
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import CirclePlusIcon from "CirclePlusIcon" /* 11298 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 14490 */;
import CircleMinusIcon from "CircleMinusIcon" /* 15375 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4598 */;

require = fn;
const jsx = fn(21).jsx;
const SettingBuilders = fn(11562);
const slider = SettingBuilders.createSlider({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["5PWWCY"]);
  },
  parent: fn(8049).MobileUserSettings.ACCESSIBILITY,
  useTrailing() {
    return jsx(native.BetaTag, { size: native.BetaSizes.SMALL });
  },
  useProps: function useSaturationSettingProps() {
    return noop.useMemo(() => ({ value: saturation.saturation, onSlidingComplete: AccessibilityActionCreators.setSaturation, minimumValue: 0, maximumValue: 1, step: 0.05, startIcon: jsx(CircleMinusIcon.CircleMinusIcon, {}), endIcon: jsx(CirclePlusIcon.CirclePlusIcon, {}) }), []);
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ReduceSaturationSetting.tsx");

export default slider;
