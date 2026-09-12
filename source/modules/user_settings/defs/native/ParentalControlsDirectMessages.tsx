// Module ID: 15983
// Function ID: 15984
// Name: ParentalControlsDirectMessages
// Dependencies: [7640, 8079, 14913, 14914, 11601, 1114, 2]

// Module 15983 (ParentalControlsDirectMessages)
import util from "util" /* 1114 */;
import useParentalControlSettings from "useParentalControlSettings" /* 14913 */;
import ParentalControlledUserSettings from "ParentalControlledUserSettings" /* 14914 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7640 */;

require = fn;
const SettingBuilders = fn(11601);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.RAQUSN);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(util.t.wbYDfT);
  },
  parent: fn(8079).MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
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
