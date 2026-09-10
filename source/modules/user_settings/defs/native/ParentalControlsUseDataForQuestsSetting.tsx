// Module ID: 15936
// Function ID: 15937
// Name: ParentalControlsUseDataForQuestsSetting
// Dependencies: [7551, 7989, 14854, 1114, 2396, 11500, 2]

// Module 15936 (ParentalControlsUseDataForQuestsSetting)
import util from "util" /* 1114 */;
import _modDef2396 from "module_2396" /* 2396 */;
import ParentalControlledUserSettings from "ParentalControlledUserSettings" /* 14854 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7551 */;

require = fn;
const SettingBuilders = fn(11500);
const toggle = SettingBuilders.createToggle({
  useTitle: function useDataForQuestsSettingTitle() {
    const intl = util.intl;
    return intl.string(_modDef2396.ZhaNu8);
  },
  parent: fn(7989).MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue: function useDataToSupportQuestsSettingValue() {
    const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
    const ParentalControlledDropsOptedOut = ParentalControlledUserSettings.ParentalControlledDropsOptedOut;
    return !ParentalControlledDropsOptedOut.useControlledSetting(selectedTeenId);
  },
  onValueChange: function onDataToSupportQuestsSettingValueChange(arg0) {
    const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
    const ParentalControlledDropsOptedOut = ParentalControlledUserSettings.ParentalControlledDropsOptedOut;
    const result = ParentalControlledDropsOptedOut.updateControlledSetting(selectedTeenId, !arg0);
  },
  unsearchable: true
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsUseDataForQuestsSetting.tsx");

export default toggle;
