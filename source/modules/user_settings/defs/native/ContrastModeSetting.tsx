// Module ID: 15497
// Function ID: 15498
// Name: ContrastModeSetting
// Dependencies: [19, 4628, 8079, 21, 14525, 15397, 11337, 11601, 1114, 1178, 2]

// Module 15497 (ContrastModeSetting)
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import CirclePlusIcon from "CirclePlusIcon" /* 11337 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 14525 */;
import CircleMinusIcon from "CircleMinusIcon" /* 15397 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4628 */;

require = fn;
const jsx = fn(21).jsx;
const SettingBuilders = fn(11601);
const slider = SettingBuilders.createSlider({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["TYyfO/"]);
  },
  parent: fn(8079).MobileUserSettings.ACCESSIBILITY,
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
