// Module ID: 15897
// Function ID: 15898
// Name: toggle
// Dependencies: [19, 7537, 7975, 1074, 8652, 14828, 6995, 11473, 1114, 2]

// Module 15897 (toggle)
import getSystemLocale from "getSystemLocale" /* 1114 */;
import result2 from "result" /* 14828 */;
import closure_2 from "noop" /* 19 */;
import closure_3 from "freshTeenActivityWithMap" /* 7537 */;
import ME from "ME" /* 1074 */;
import createToggle from "createToggle" /* 11473 */;

require = arg1;
({ AllFriendSourceFlags: c4, FriendSourceFlags: c5 } = ME);
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.mGr3CX);
  },
  parent: require("MobileUserSettings").MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue: function useFriendRequestsEveryoneSettingValue() {
    const selectedTeenId = controlledSetting(8652).useSelectedTeenId();
    const ParentalControlledFriendSourceFlags = controlledSetting(14828).ParentalControlledFriendSourceFlags;
    controlledSetting = ParentalControlledFriendSourceFlags.useControlledSetting(selectedTeenId);
    const items = [controlledSetting];
    return React.useMemo(() => controlledSetting(closure_1_1[6]).computeFlags(controlledSetting), items).all;
  },
  onValueChange: function onFriendRequestsEveryoneSettingValueChange(arg0) {
    selectedTeenId = selectedTeenId.getSelectedTeenId();
    if (null != selectedTeenId) {
      const ParentalControlledFriendSourceFlags = result2.ParentalControlledFriendSourceFlags;
      if (arg0) {
        let tmp7 = tmp5;
      } else {
        tmp7 = tmp5 & ~constants.NO_RELATION;
      }
      const result = ParentalControlledFriendSourceFlags.updateControlledSetting(selectedTeenId, tmp7);
    }
  },
  unsearchable: true
};
createToggle = createToggle.createToggle(createToggle);
let result = require("set").fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsFriendRequestsEveryoneSetting.tsx");

export default createToggle;
