// Module ID: 15907
// Function ID: 15908
// Name: toggle
// Dependencies: [7537, 7975, 8652, 14828, 11473, 1114, 2]

// Module 15907 (toggle)
import getSystemLocale from "getSystemLocale" /* 1114 */;
import useSelectedTeen from "useSelectedTeen" /* 8652 */;
import result2 from "result" /* 14828 */;
import closure_2 from "freshTeenActivityWithMap" /* 7537 */;
import createToggle from "createToggle" /* 11473 */;

require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.CyLYKZ);
  },
  parent: require("MobileUserSettings").MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue: function useDataToSupportQuests3PSettingValue() {
    const selectedTeenId = useSelectedTeen.useSelectedTeenId();
    const ParentalControlledQuests3PDataOptedOut = result2.ParentalControlledQuests3PDataOptedOut;
    return !ParentalControlledQuests3PDataOptedOut.useControlledSetting(selectedTeenId);
  },
  onValueChange: function onDataToSupportQuests3PSettingValueChange(arg0) {
    selectedTeenId = selectedTeenId.getSelectedTeenId();
    const ParentalControlledQuests3PDataOptedOut = result2.ParentalControlledQuests3PDataOptedOut;
    const result = ParentalControlledQuests3PDataOptedOut.updateControlledSetting(selectedTeenId, !arg0);
  },
  useIsDisabled: function useDataToSupportQuests3PSettingIsDisabled() {
    const selectedTeenId = useSelectedTeen.useSelectedTeenId();
    const ParentalControlledDropsOptedOut = result2.ParentalControlledDropsOptedOut;
    return ParentalControlledDropsOptedOut.useControlledSetting(selectedTeenId);
  },
  unsearchable: true
};
createToggle = createToggle.createToggle(createToggle);
let result = require("set").fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsUseDataForQuests3PSetting.tsx");

export default createToggle;
