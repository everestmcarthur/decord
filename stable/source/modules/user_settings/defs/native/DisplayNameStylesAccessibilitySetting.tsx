// Module ID: 15410
// Function ID: 15411
// Name: DisplayNameStylesAccessibilitySetting
// Dependencies: [4552, 7976, 504, 14440, 11473, 1114, 2786, 2]
// Exports: onValueChange, useValue

// Module 15410 (DisplayNameStylesAccessibilitySetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1114 */;
import _modDef2786 from "module_2786" /* 2786 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 14440 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;

require = fn;
function useValue() {
  const items = [AccessibilityStore];
  return initialize.useStateFromStores(items, () => AccessibilityStore.displayNameStylesEnabled);
}
function onValueChange(enabled) {
  const result = AccessibilityActionCreators.setDisplayNameStylesEnabled(enabled);
}
const SettingBuilders = fn(11473);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2786["2gFUEw"]);
  },
  parent: fn(7976).MobileUserSettings.ACCESSIBILITY,
  useValue,
  onValueChange
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/DisplayNameStylesAccessibilitySetting.tsx");

export default toggle;
export { useValue };
export { onValueChange };
