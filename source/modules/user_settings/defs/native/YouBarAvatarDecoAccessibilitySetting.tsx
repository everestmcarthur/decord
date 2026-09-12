// Module ID: 15494
// Function ID: 15495
// Name: YouBarAvatarDecoAccessibilitySetting
// Dependencies: [4628, 8079, 11601, 1114, 504, 14525, 2]

// Module 15494 (YouBarAvatarDecoAccessibilitySetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1114 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 14525 */;
import AccessibilityStore from "AccessibilityStore" /* 4628 */;

require = fn;
const SettingBuilders = fn(11601);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["34XN2f"]);
  },
  parent: fn(8079).MobileUserSettings.ACCESSIBILITY,
  useValue() {
    const items = [AccessibilityStore];
    return initialize.useStateFromStores(items, () => AccessibilityStore.animateYouBarAvatarDeco);
  },
  onValueChange(animateAvatarDeco) {
    return AccessibilityActionCreators.setYouBarAnimations({ animateAvatarDeco });
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/YouBarAvatarDecoAccessibilitySetting.tsx");

export default toggle;
