// Module ID: 15959
// Function ID: 15960
// Name: ParentalControlsDirectMessages
// Dependencies: [7610, 8049, 14879, 14880, 11562, 1114, 2]

// Module 15959 (ParentalControlsDirectMessages)
import util from "util" /* 1114 */;
import useParentalControlSettings from "useParentalControlSettings" /* 14879 */;
import ParentalControlledUserSettings from "ParentalControlledUserSettings" /* 14880 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7610 */;

require = fn;
const SettingBuilders = fn(11562);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.RAQUSN);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(util.t.wbYDfT);
  },
  parent: fn(8049).MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue() {
    return !useParentalControlSettings.useDefaultGuildsRestricted();
  },
  onValueChange: function onAllowDirectMessagesFromServerMembersValueChange(arg0) {
    const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
    if (null != selectedTeenId) {
      const ParentalControlledDefaultGuildsRestrictedV2 = ParentalControlledUserSettings.ParentalControlledDefaultGuildsRestrictedV2;
      const result = ParentalControlledDefaultGuildsRestrictedV2.updateControlledSetting(selectedTeenId, !arg0);
    }
  },
  unsearchable: true
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsDirectMessages.tsx");

export default toggle;
export const ParentalControlsDirectMessages = toggle;
