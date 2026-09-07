// Module ID: 14979
// Function ID: 14980
// Name: toggle
// Dependencies: [19, 7975, 1074, 1935, 6995, 14827, 11473, 1114, 2]

// Module 14979 (toggle)
import getSystemLocale from "getSystemLocale" /* 1114 */;
import explicitContentFromProto from "explicitContentFromProto" /* 1935 */;
import useParentalControlledExplicitContentSettings from "useParentalControlledExplicitContentSettings" /* 14827 */;
import closure_2 from "noop" /* 19 */;
import ME from "ME" /* 1074 */;
import createToggle from "createToggle" /* 11473 */;

require = arg1;
({ AllFriendSourceFlags: c3, FriendSourceFlags: c4 } = ME);
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.mGr3CX);
  },
  parent: require("MobileUserSettings").MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: function useFriendRequestsEveryoneSettingValue() {
    const FriendSourceFlagsSetting = setting(1935).FriendSourceFlagsSetting;
    setting = FriendSourceFlagsSetting.useSetting();
    const items = [setting];
    return React.useMemo(() => setting(closure_1_1[4]).computeFlags(setting), items).all;
  },
  onValueChange: function onFriendRequestsEveryoneSettingValueChange(arg0) {
    const FriendSourceFlagsSetting = explicitContentFromProto.FriendSourceFlagsSetting;
    if (arg0) {
      let tmp3 = tmp;
    } else {
      tmp3 = tmp & ~constants.NO_RELATION;
    }
    FriendSourceFlagsSetting.updateSetting(tmp3);
  },
  useIsDisabled() {
    return useParentalControlledExplicitContentSettings.useIsParentallyControlled();
  }
};
createToggle = createToggle.createToggle(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/FriendRequestsEveryoneSetting.tsx");

export default createToggle;
