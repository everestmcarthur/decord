// Module ID: 15888
// Function ID: 15889
// Name: toggle
// Dependencies: [7975, 11473, 1114, 1935, 15889, 2]

// Module 15888 (toggle)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import explicitContentFromProto from "explicitContentFromProto" /* 1935 */;
import MobileUserSettings from "MobileUserSettings" /* 7975 */;
import useIsAllowGameFriendDMsSettingVisible from "useIsAllowGameFriendDMsSettingVisible" /* 15889 */;
import createToggle from "createToggle" /* 11473 */;

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.XpBObB);
  },
  parent: MobileUserSettings.MobileUserSettings.CONNECTED_GAMES,
  useValue: explicitContentFromProto.AllowGameFriendDmsInDiscord.useSetting,
  onValueChange: explicitContentFromProto.AllowGameFriendDmsInDiscord.updateSetting,
  useSearchTerms() {
    const intl = getSystemLocale.intl;
    const items = [intl.string(getSystemLocale.t.XpBObB)];
    return items;
  },
  usePredicate: useIsAllowGameFriendDMsSettingVisible.useIsAllowGameFriendDMsSettingVisible
});
const obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.XpBObB);
  },
  parent: MobileUserSettings.MobileUserSettings.CONNECTED_GAMES,
  useValue: explicitContentFromProto.AllowGameFriendDmsInDiscord.useSetting,
  onValueChange: explicitContentFromProto.AllowGameFriendDmsInDiscord.updateSetting,
  useSearchTerms() {
    const intl = getSystemLocale.intl;
    const items = [intl.string(getSystemLocale.t.XpBObB)];
    return items;
  },
  usePredicate: useIsAllowGameFriendDMsSettingVisible.useIsAllowGameFriendDMsSettingVisible
};
const result = set.fileFinishedImporting("modules/user_settings/defs/native/AllowGameFriendDMsSetting.tsx");

export default toggle;
