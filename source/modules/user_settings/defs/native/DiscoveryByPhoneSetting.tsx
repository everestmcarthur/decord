// Module ID: 14850
// Function ID: 14851
// Name: toggle
// Dependencies: [7975, 1074, 1114, 1935, 1384, 12688, 11473, 2]

// Module 14850 (toggle)
import set from "set" /* 2 */;
import ME from "ME" /* 1074 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import hasFlag from "hasFlag" /* 1384 */;
import explicitContentFromProto from "explicitContentFromProto" /* 1935 */;
import MobileUserSettings from "MobileUserSettings" /* 7975 */;
import _updateDiscoverabilityDefault from "_updateDiscoverability" /* 12688 */;
import createToggle from "createToggle" /* 11473 */;

const FriendDiscoveryFlags = ME.FriendDiscoveryFlags;
const toggle = createToggle.createToggle({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.dEYpSt);
  },
  parent: MobileUserSettings.MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useDescription: function useDiscoveryByPhoneSettingDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.X7pIKN);
  },
  useValue: function useDiscoveryByPhoneSettingValue() {
    const FriendDiscoverySettings = explicitContentFromProto.FriendDiscoverySettings;
    const setting = FriendDiscoverySettings.useSetting();
    return hasFlag.hasFlag(setting, FriendDiscoveryFlags.FIND_BY_PHONE);
  },
  onValueChange: function onDiscoveryByPhoneSettingValueChange(phone) {
    const FriendDiscoverySettings = explicitContentFromProto.FriendDiscoverySettings;
    const setting = FriendDiscoverySettings.getSetting();
    let obj = hasFlag;
    const hasFlagResult = obj.hasFlag(setting, FriendDiscoveryFlags.FIND_BY_EMAIL);
    obj = { phone, email: hasFlagResult };
    const result = _updateDiscoverabilityDefault.updateDiscoverability(obj);
  }
});
let obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.dEYpSt);
  },
  parent: MobileUserSettings.MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useDescription: function useDiscoveryByPhoneSettingDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.X7pIKN);
  },
  useValue: function useDiscoveryByPhoneSettingValue() {
    const FriendDiscoverySettings = explicitContentFromProto.FriendDiscoverySettings;
    const setting = FriendDiscoverySettings.useSetting();
    return hasFlag.hasFlag(setting, FriendDiscoveryFlags.FIND_BY_PHONE);
  },
  onValueChange: function onDiscoveryByPhoneSettingValueChange(phone) {
    const FriendDiscoverySettings = explicitContentFromProto.FriendDiscoverySettings;
    const setting = FriendDiscoverySettings.getSetting();
    let obj = hasFlag;
    const hasFlagResult = obj.hasFlag(setting, FriendDiscoveryFlags.FIND_BY_EMAIL);
    obj = { phone, email: hasFlagResult };
    const result = _updateDiscoverabilityDefault.updateDiscoverability(obj);
  }
};
let result = set.fileFinishedImporting("modules/user_settings/defs/native/DiscoveryByPhoneSetting.tsx");

export default toggle;
