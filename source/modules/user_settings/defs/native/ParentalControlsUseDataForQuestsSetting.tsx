// Module ID: 15906
// Function ID: 15907
// Name: toggle
// Dependencies: [7537, 7975, 14828, 1114, 2396, 11473, 2]

// Module 15906 (toggle)
import getSystemLocale from "getSystemLocale" /* 1114 */;
import messagesProxyDefault from "messagesProxy" /* 2396 */;
import result2 from "result" /* 14828 */;
import closure_3 from "freshTeenActivityWithMap" /* 7537 */;
import createToggle from "createToggle" /* 11473 */;

require = arg1;
createToggle = {
  useTitle: function useDataForQuestsSettingTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault.ZhaNu8);
  },
  parent: require("MobileUserSettings").MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue: function useDataToSupportQuestsSettingValue() {
    const selectedTeenId = store.getSelectedTeenId();
    const ParentalControlledDropsOptedOut = result2.ParentalControlledDropsOptedOut;
    return !ParentalControlledDropsOptedOut.useControlledSetting(selectedTeenId);
  },
  onValueChange: function onDataToSupportQuestsSettingValueChange(arg0) {
    const selectedTeenId = store.getSelectedTeenId();
    const ParentalControlledDropsOptedOut = result2.ParentalControlledDropsOptedOut;
    const result = ParentalControlledDropsOptedOut.updateControlledSetting(selectedTeenId, !arg0);
  },
  unsearchable: true
};
createToggle = createToggle.createToggle(createToggle);
let result = require("set").fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsUseDataForQuestsSetting.tsx");

export default createToggle;
