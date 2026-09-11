// Module ID: 15470
// Function ID: 15471
// Name: DisplayNameStylesAccessibilitySetting
// Dependencies: [4598, 8049, 504, 14490, 11562, 1114, 2786, 2]
// Exports: onValueChange, useValue

// Module 15470 (DisplayNameStylesAccessibilitySetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1114 */;
import _modDef2786 from "module_2786" /* 2786 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 14490 */;
import AccessibilityStore from "AccessibilityStore" /* 4598 */;

require = fn;
function useValue() {
  const items = [AccessibilityStore];
  return initialize.useStateFromStores(items, () => AccessibilityStore.displayNameStylesEnabled);
}
function onValueChange(enabled) {
  const result = AccessibilityActionCreators.setDisplayNameStylesEnabled(enabled);
}
const SettingBuilders = fn(11562);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2786["2gFUEw"]);
  },
  parent: fn(8049).MobileUserSettings.ACCESSIBILITY,
  useValue,
  onValueChange
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/DisplayNameStylesAccessibilitySetting.tsx");

export default toggle;
export { useValue };
export { onValueChange };
