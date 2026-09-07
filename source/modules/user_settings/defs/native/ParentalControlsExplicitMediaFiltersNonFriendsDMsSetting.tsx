// Module ID: 15901
// Function ID: 15902
// Name: useObscuredContentNonFriendsDmSettingValue
// Dependencies: [7537, 7975, 14827, 7600, 14831, 1114, 14824, 1187, 11473, 2]
// Exports: onObscuredContentNonFriendsDmOnPress, useObscuredContentNonFriendsDmSettingValue

// Module 15901 (useObscuredContentNonFriendsDmSettingValue)
import getSystemLocale from "getSystemLocale" /* 1114 */;
import redactionSettingToRenderedString from "redactionSettingToRenderedString" /* 7600 */;
import useParentalControlledExplicitContentSettings from "useParentalControlledExplicitContentSettings" /* 14827 */;
import closure_2 from "freshTeenActivityWithMap" /* 7537 */;
import createToggle from "createToggle" /* 11473 */;

require = arg1;
function useObscuredContentNonFriendsDmSettingValue() {
  const parentalControlledExplicitContentSettings = useParentalControlledExplicitContentSettings.useParentalControlledExplicitContentSettings();
  let prop;
  if (parentalControlledExplicitContentSettings != null) {
    prop = parentalControlledExplicitContentSettings.explicitContentNonFriendDm;
  }
  let tmp5 = null;
  if (null != prop) {
    tmp5 = redactionSettingToRenderedString.redactionSettingToRenderedString(prop)();
    const tmpResult = redactionSettingToRenderedString;
  }
  return tmp5;
}
function onObscuredContentNonFriendsDmOnPress() {
  selectedTeenId = selectedTeenId.getSelectedTeenId();
  if (null != selectedTeenId) {
    let obj = selectedTeenId(14831);
    const intl = selectedTeenId(1114).intl;
    const stringResult = intl.string(selectedTeenId(1114).t.GYpoAq);
    obj = { title: null, subtitle: null, excluded: null, handlePress: null, currentValue: null };
    obj[0] = stringResult;
    const intl2 = selectedTeenId(1114).intl;
    obj[1] = intl2.string(selectedTeenId(1114).t["Yh+HX1"]);
    const items = [selectedTeenId(1187).ExplicitContentRedaction.SHOW];
    obj[2] = items;
    obj[3] = function handlePress(explicitContentNonFriendDm) {
      let obj = selectedTeenId(closure_1_1[4]);
      obj = { explicitContentNonFriendDm };
      const result = obj.updateExplicitContentSetting(selectedTeenId, obj);
    };
    obj[4] = obj.getExplicitContentSettingOrDefault(selectedTeenId).explicitContentNonFriendDm;
    let result = selectedTeenId(14824).handleSensitiveMediaFilterPress(obj);
    const obj2 = selectedTeenId(14824);
  }
}
createToggle = {
  useTitle: function getTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["Yh+HX1"]);
  },
  parent: require("MobileUserSettings").MobileUserSettings.PARENTAL_CONTROLS_SENSITIVE_CONTENT_FILTERS,
  useTrailing: useObscuredContentNonFriendsDmSettingValue,
  onPress: onObscuredContentNonFriendsDmOnPress,
  unsearchable: true
};
createToggle = createToggle.createPressable(createToggle);
let result = require("set").fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsExplicitMediaFiltersNonFriendsDMsSetting.tsx");

export default createToggle;
export { useObscuredContentNonFriendsDmSettingValue };
export { onObscuredContentNonFriendsDmOnPress };
