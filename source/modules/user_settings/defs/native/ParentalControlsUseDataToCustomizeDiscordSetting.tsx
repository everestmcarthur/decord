// Module ID: 15969
// Function ID: 15970
// Name: ParentalControlsUseDataToCustomizeDiscordSetting
// Dependencies: [7611, 8050, 1074, 14879, 7613, 11564, 1114, 2]

// Module 15969 (ParentalControlsUseDataToCustomizeDiscordSetting)
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
    return intl.string(util.t.MNKzyg);
  },
  parent: fn(8050).MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue: function useDataToCustomizeDiscordSettingValue() {
    return useParentalControlSettings.useParentalControlledConsent(Consents.PERSONALIZATION).hasConsented;
  },
  onValueChange: function handlePersonalizationChange(arg0) {
    const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
    if (null != selectedTeenId) {
      if (arg0) {
        const items = [Consents.PERSONALIZATION];
        let items1 = items;
      } else {
        items1 = [];
      }
      if (arg0) {
        let items2 = [];
      } else {
        items2 = [Consents.PERSONALIZATION];
      }
      FamilyCenterActionCreatorsDefault.updateTeenConsents(selectedTeenId, items1, items2);
    }
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsUseDataToCustomizeDiscordSetting.tsx");

export default toggle;
