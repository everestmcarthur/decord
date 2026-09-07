// Module ID: 15900
// Function ID: 15901
// Name: pressable
// Dependencies: [7537, 7975, 14827, 7600, 14831, 1114, 14824, 1187, 11473, 2]

// Module 15900 (pressable)
import getSystemLocale from "getSystemLocale" /* 1114 */;
import redactionSettingToRenderedString from "redactionSettingToRenderedString" /* 7600 */;
import useParentalControlledExplicitContentSettings from "useParentalControlledExplicitContentSettings" /* 14827 */;
import closure_2 from "freshTeenActivityWithMap" /* 7537 */;
import createToggle from "createToggle" /* 11473 */;

require = arg1;
createToggle = {
  useTitle: function getTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["+uI23H"]);
  },
  parent: require("MobileUserSettings").MobileUserSettings.PARENTAL_CONTROLS_SENSITIVE_CONTENT_FILTERS,
  useTrailing: function useObscuredContentFriendsDmSettingValue() {
    const parentalControlledExplicitContentSettings = useParentalControlledExplicitContentSettings.useParentalControlledExplicitContentSettings();
    let prop;
    if (parentalControlledExplicitContentSettings != null) {
      prop = parentalControlledExplicitContentSettings.explicitContentFriendDm;
    }
    let tmp5 = null;
    if (null != prop) {
      tmp5 = redactionSettingToRenderedString.redactionSettingToRenderedString(prop)();
      const tmpResult = redactionSettingToRenderedString;
    }
    return tmp5;
  },
  onPress: function onObscuredContentFriendsDmOnPress() {
    selectedTeenId = selectedTeenId.getSelectedTeenId();
    if (null != selectedTeenId) {
      let obj = selectedTeenId(14831);
      const intl = selectedTeenId(1114).intl;
      const stringResult = intl.string(selectedTeenId(1114).t.GYpoAq);
      obj = { title: null, subtitle: null, handlePress: null, currentValue: null, excluded: null };
      obj[0] = stringResult;
      const intl2 = selectedTeenId(1114).intl;
      obj[1] = intl2.string(selectedTeenId(1114).t["+uI23H"]);
      obj[2] = function handlePress(explicitContentFriendDm) {
        let obj = selectedTeenId(closure_1_1[4]);
        obj = { explicitContentFriendDm };
        return obj.updateExplicitContentSetting(selectedTeenId, obj);
      };
      obj[3] = obj.getExplicitContentSettingOrDefault(selectedTeenId).explicitContentFriendDm;
      const items = [selectedTeenId(1187).ExplicitContentRedaction.SHOW];
      obj[4] = items;
      const result = selectedTeenId(14824).handleSensitiveMediaFilterPress(obj);
      const obj2 = selectedTeenId(14824);
    }
  },
  unsearchable: true
};
createToggle = createToggle.createPressable(createToggle);
let result = require("set").fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsExplicitMediaFiltersFriendsDMsSetting.tsx");

export default createToggle;
