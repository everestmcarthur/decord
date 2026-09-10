// Module ID: 15891
// Function ID: 15892
// Name: UseDataForQuests3PSetting
// Dependencies: [7989, 1935, 15889, 14853, 11500, 1114, 15890, 2]

// Module 15891 (UseDataForQuests3PSetting)
import util from "util" /* 1114 */;
import UserSettings from "UserSettings" /* 1935 */;
import SettingsConstants from "SettingsConstants" /* 7989 */;
import useParentalControlSettings from "useParentalControlSettings" /* 14853 */;
import useAdPersonalizationTogglesDisabled from "useAdPersonalizationTogglesDisabled" /* 15889 */;
import AdTopicOptOutClientExperiment from "AdTopicOptOutClientExperiment" /* 15890 */;
import SettingBuilders_mod from "SettingBuilders" /* 11500 */;
import size from "module_2" /* 2 */;

function useDataToSupportQuests3PSettingValue() {
  const Quests3PDataOptedOut = UserSettings.Quests3PDataOptedOut;
  return !Quests3PDataOptedOut.useSetting();
}
function useDataToSupportQuests3PSettingIsDisabled() {
  let adPersonalizationTogglesDisabled = useAdPersonalizationTogglesDisabled.useAdPersonalizationTogglesDisabled();
  const DropsOptedOut = UserSettings.DropsOptedOut;
  const setting = DropsOptedOut.useSetting();
  const isParentallyControlled = useParentalControlSettings.useIsParentallyControlled();
  if (!adPersonalizationTogglesDisabled) {
    adPersonalizationTogglesDisabled = setting;
  }
  if (!adPersonalizationTogglesDisabled) {
    adPersonalizationTogglesDisabled = isParentallyControlled;
  }
  return adPersonalizationTogglesDisabled;
}
function onDataToSupportQuests3PSettingValueChange(arg0) {
  const Quests3PDataOptedOut = UserSettings.Quests3PDataOptedOut;
  Quests3PDataOptedOut.updateSetting(!arg0);
}
const MobileUserSettings = SettingsConstants.MobileUserSettings;
let SettingBuilders = SettingBuilders_mod;
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.CyLYKZ);
  },
  parent: MobileUserSettings.DATA_AND_PRIVACY,
  usePredicate() {
    return !AdTopicOptOutClientExperiment.useIsAdTopicOptOutClientEnabled();
  },
  useValue: useDataToSupportQuests3PSettingValue,
  onValueChange: onDataToSupportQuests3PSettingValueChange,
  useIsDisabled: useDataToSupportQuests3PSettingIsDisabled
});
let SettingBuilders = SettingBuilders_mod;
const toggle1 = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.CyLYKZ);
  },
  parent: MobileUserSettings.SPONSORED_CONTENT_PREFERENCES,
  usePredicate: AdTopicOptOutClientExperiment.useIsAdTopicOptOutClientEnabled,
  useValue: useDataToSupportQuests3PSettingValue,
  onValueChange: onDataToSupportQuests3PSettingValueChange,
  useIsDisabled: useDataToSupportQuests3PSettingIsDisabled
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/UseDataForQuests3PSetting.tsx");

export default toggle;
export const UseDataForQuests3PSponsoredContentSetting = toggle1;
