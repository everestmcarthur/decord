// Module ID: 16019
// Function ID: 16020
// Name: ParentalControlsMessageRequests
// Dependencies: [7647, 8091, 8782, 14941, 16005, 8541, 8543, 14940, 11614, 1115, 2397, 2]

// Module 16019 (ParentalControlsMessageRequests)
import util from "util" /* 1115 */;
import _modDef2397 from "module_2397" /* 2397 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8541 */;
import useSelectedTeen from "useSelectedTeen" /* 8782 */;
import useParentalControlSettings from "useParentalControlSettings" /* 14940 */;
import ParentalControlledUserSettings from "ParentalControlledUserSettings" /* 14941 */;
import DefaultDMSettingsExperiment from "DefaultDMSettingsExperiment" /* 16005 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7647 */;

require = fn;
const SettingBuilders = fn(11614);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["3o2ojh"]);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2397["7aYkh1"]);
  },
  parent: fn(8091).MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue() {
    const defaultGuildsRestricted = useParentalControlSettings.useDefaultGuildsRestricted();
    const selectedTeenId = useSelectedTeen.useSelectedTeenId();
    const ParentalControlledDefaultMessageRequestRestricted = ParentalControlledUserSettings.ParentalControlledDefaultMessageRequestRestricted;
    let tmp3 = !defaultGuildsRestricted;
    if (!defaultGuildsRestricted) {
      tmp3 = !ParentalControlledDefaultMessageRequestRestricted.useControlledSetting(selectedTeenId);
    }
    return tmp3;
  },
  useIsDisabled() {
    return useParentalControlSettings.useDefaultGuildsRestricted();
  },
  onValueChange: function onAllowMessageRequestsFromServerMembersValueChange(arg0) {
    const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
    if (null != selectedTeenId) {
      if (!arg0) {
        if (obj.shouldAgeVerifyForDMDefaultOff()) {
          const obj3 = { entryPoint: tmp2(8543).AgeVerificationModalEntryPoint.MESSAGE_REQUESTS_SETTINGS };
          const result = AgeVerificationActionCreatorsDefault.showAgeVerificationGetStartedModal(obj3);
        }
        obj = DefaultDMSettingsExperiment;
        tmp2 = require;
      }
      const ParentalControlledDefaultMessageRequestRestricted = ParentalControlledUserSettings.ParentalControlledDefaultMessageRequestRestricted;
      const result1 = ParentalControlledDefaultMessageRequestRestricted.updateControlledSetting(selectedTeenId, !arg0);
    }
  },
  unsearchable: true
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsMessageRequests.tsx");

export default toggle;
