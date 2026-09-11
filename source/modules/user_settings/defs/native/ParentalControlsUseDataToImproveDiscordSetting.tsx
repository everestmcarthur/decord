// Module ID: 15968
// Function ID: 15969
// Name: ParentalControlsUseDataToImproveDiscordSetting
// Dependencies: [7611, 8050, 1074, 7613, 14879, 11564, 1114, 2]

// Module 15968 (ParentalControlsUseDataToImproveDiscordSetting)
import util from "util" /* 1114 */;
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 7613 */;
import useParentalControlSettings from "useParentalControlSettings" /* 14879 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7611 */;

require = fn;
const Consents = fn(1074).Consents;
const SettingBuilders = fn(11564);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.XuADY2);
  },
  parent: fn(8050).MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue: function useDataToImproveDiscordSettingValue() {
    return useParentalControlSettings.useParentalControlledConsent(Consents.USAGE_STATISTICS).hasConsented;
  },
  onValueChange: function handleUsageStatisticsChange(arg0) {
    const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
    if (null != selectedTeenId) {
      if (arg0) {
        const items = [Consents.USAGE_STATISTICS];
        let items1 = items;
      } else {
        items1 = [];
      }
      if (arg0) {
        let items2 = [];
      } else {
        items2 = [Consents.USAGE_STATISTICS];
      }
      FamilyCenterActionCreatorsDefault.updateTeenConsents(selectedTeenId, items1, items2);
    }
  },
  unsearchable: true
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsUseDataToImproveDiscordSetting.tsx");

export default toggle;
