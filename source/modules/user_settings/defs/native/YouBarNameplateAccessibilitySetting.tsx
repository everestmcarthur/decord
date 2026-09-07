// Module ID: 15411
// Function ID: 15412
// Name: toggle
// Dependencies: [4552, 7975, 11473, 1114, 504, 14440, 2]

// Module 15411 (toggle)
import initialize from "initialize" /* 504 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import setFontSize from "setFontSize" /* 14440 */;
import closure_2 from "maybeApplyNoTextColorForLightCustomTheme" /* 4552 */;
import createToggle from "createToggle" /* 11473 */;

require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.EEms8K);
  },
  parent: require("MobileUserSettings").MobileUserSettings.ACCESSIBILITY,
  useValue() {
    const items = [closure_2];
    return initialize.useStateFromStores(items, () => obj.animateYouBarNameplate);
  },
  onValueChange(animateNameplate) {
    let obj = setFontSize;
    obj = { animateNameplate };
    return obj.setYouBarAnimations(obj);
  }
};
createToggle = createToggle.createToggle(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/YouBarNameplateAccessibilitySetting.tsx");

export default createToggle;
