// Module ID: 16138
// Function ID: 16139
// Name: ParentalControlsMessageRequests
// Dependencies: [7733, 8194, 8885, 15043, 16123, 8643, 8645, 15042, 11714, 1115, 2480, 2]

// Module 16138 (ParentalControlsMessageRequests)
import util from "util" /* 1115 */;
import _modDef2480 from "module_2480" /* 2480 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8643 */;
import useSelectedTeen from "useSelectedTeen" /* 8885 */;
import useParentalControlSettings from "useParentalControlSettings" /* 15042 */;
import ParentalControlledUserSettings from "ParentalControlledUserSettings" /* 15043 */;
import DefaultDMSettingsExperiment from "DefaultDMSettingsExperiment" /* 16123 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7733 */;

require = fn;
const SettingBuilders = fn(11714);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["3o2ojh"]);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2480["7aYkh1"]);
  },
  parent: fn(8194).MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
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
          const obj3 = { entryPoint: tmp2(8645).AgeVerificationModalEntryPoint.MESSAGE_REQUESTS_SETTINGS };
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
