// Module ID: 15974
// Function ID: 15975
// Name: ParentalControlsDirectMessages
// Dependencies: [7589, 8027, 14902, 14903, 11540, 1114, 2]

// Module 15974 (ParentalControlsDirectMessages)
import util from "util" /* 1114 */;
import useParentalControlSettings from "useParentalControlSettings" /* 14902 */;
import ParentalControlledUserSettings from "ParentalControlledUserSettings" /* 14903 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7589 */;

require = fn;
const SettingBuilders = fn(11540);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.RAQUSN);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(util.t.wbYDfT);
  },
  parent: fn(8027).MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
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
