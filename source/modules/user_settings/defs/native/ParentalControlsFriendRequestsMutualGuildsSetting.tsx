// Module ID: 16022
// Function ID: 16023
// Name: ParentalControlsFriendRequestsMutualGuildsSetting
// Dependencies: [19, 7647, 8091, 1074, 8782, 14941, 7105, 1385, 11614, 1115, 2]

// Module 16022 (ParentalControlsFriendRequestsMutualGuildsSetting)
import util from "util" /* 1115 */;
import FlagUtilsAll from "FlagUtils" /* 1385 */;
import UserSettingsUtils from "UserSettingsUtils" /* 7105 */;
import ParentalControlledUserSettings from "ParentalControlledUserSettings" /* 14941 */;
import noop from "module_19" /* 19 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7647 */;

require = fn;
const FriendSourceFlags = fn(1074).FriendSourceFlags;
const SettingBuilders = fn(11614);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.mozb8f);
  },
  parent: fn(8091).MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue: function useFriendRequestsMutualGuildsSettingValue() {
    const selectedTeenId = controlledSetting(8782).useSelectedTeenId();
    const ParentalControlledFriendSourceFlags = controlledSetting(14941).ParentalControlledFriendSourceFlags;
    controlledSetting = ParentalControlledFriendSourceFlags.useControlledSetting(selectedTeenId);
    const items = [controlledSetting];
    return noop.useMemo(() => UserSettingsUtils.computeFlags(controlledSetting), items).mutualGuilds;
  },
  onValueChange: function onFriendRequestsMutualGuildsSettingValueChange(arg0) {
    const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
    if (null != selectedTeenId) {
      const ParentalControlledFriendSourceFlags = ParentalControlledUserSettings.ParentalControlledFriendSourceFlags;
      const controlledSetting = ParentalControlledFriendSourceFlags.getControlledSetting(selectedTeenId);
      const ParentalControlledFriendSourceFlags2 = ParentalControlledUserSettings.ParentalControlledFriendSourceFlags;
      const obj = FlagUtilsAll;
      if (arg0) {
        let addFlagResult = obj.addFlag(controlledSetting, FriendSourceFlags.MUTUAL_GUILDS);
      } else {
        addFlagResult = obj.removeFlags(controlledSetting, FriendSourceFlags.MUTUAL_GUILDS, FriendSourceFlags.NO_RELATION);
      }
      const result = ParentalControlledFriendSourceFlags2.updateControlledSetting(selectedTeenId, addFlagResult);
    }
  },
  unsearchable: true
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsFriendRequestsMutualGuildsSetting.tsx");

export default toggle;
