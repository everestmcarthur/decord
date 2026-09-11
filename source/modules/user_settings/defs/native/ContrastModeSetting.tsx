// Module ID: 15475
// Function ID: 15476
// Name: ContrastModeSetting
// Dependencies: [19, 4599, 8050, 21, 14492, 15375, 11300, 11564, 1114, 1178, 2]

// Module 15475 (ContrastModeSetting)
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import CirclePlusIcon from "CirclePlusIcon" /* 11300 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 14492 */;
import CircleMinusIcon from "CircleMinusIcon" /* 15375 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4599 */;

require = fn;
const jsx = fn(21).jsx;
const SettingBuilders = fn(11564);
const slider = SettingBuilders.createSlider({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["TYyfO/"]);
  },
  parent: fn(8050).MobileUserSettings.ACCESSIBILITY,
  useTrailing() {
    return jsx(native.BetaTag, { size: native.BetaSizes.SMALL });
  },
  useProps: function useContrastSettingProps() {
    return noop.useMemo(() => ({ value: contrast.contrast, onSlidingComplete: AccessibilityActionCreators.setContrast, minimumValue: 0, maximumValue: 2, step: 0.1, startIcon: jsx(CircleMinusIcon.CircleMinusIcon, {}), endIcon: jsx(CirclePlusIcon.CirclePlusIcon, {}) }), []);
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ContrastModeSetting.tsx");

export default slider;
