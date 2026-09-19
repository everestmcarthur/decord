// Module ID: 16225
// Function ID: 16226
// Name: ParentalControlsUseDataForQuests3PSetting
// Dependencies: [7777, 8232, 8924, 15097, 11723, 1115, 2]

// Module 16225 (ParentalControlsUseDataForQuests3PSetting)
import util from "util" /* 1115 */;
import useSelectedTeen from "useSelectedTeen" /* 8924 */;
import ParentalControlledUserSettings from "ParentalControlledUserSettings" /* 15097 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7777 */;

require = fn;
const SettingBuilders = fn(11723);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.CyLYKZ);
  },
  parent: fn(8232).MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue: function useDataToSupportQuests3PSettingValue() {
    const selectedTeenId = useSelectedTeen.useSelectedTeenId();
    const ParentalControlledQuests3PDataOptedOut = ParentalControlledUserSettings.ParentalControlledQuests3PDataOptedOut;
    return !ParentalControlledQuests3PDataOptedOut.useControlledSetting(selectedTeenId);
  },
  onValueChange: function onDataToSupportQuests3PSettingValueChange(arg0) {
    const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
    const ParentalControlledQuests3PDataOptedOut = ParentalControlledUserSettings.ParentalControlledQuests3PDataOptedOut;
    const result = ParentalControlledQuests3PDataOptedOut.updateControlledSetting(selectedTeenId, !arg0);
  },
  useIsDisabled: function useDataToSupportQuests3PSettingIsDisabled() {
    const selectedTeenId = useSelectedTeen.useSelectedTeenId();
    const ParentalControlledDropsOptedOut = ParentalControlledUserSettings.ParentalControlledDropsOptedOut;
    return ParentalControlledDropsOptedOut.useControlledSetting(selectedTeenId);
  },
  unsearchable: true
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsUseDataForQuests3PSetting.tsx");

export default toggle;
