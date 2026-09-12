// Module ID: 15939
// Function ID: 15940
// Name: EncryptionSetting
// Dependencies: [9280, 8079, 1074, 504, 15940, 1114, 11601, 15941, 2]

// Module 15939 (EncryptionSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1114 */;
import useSecureFramesVerifiedUsers from "useSecureFramesVerifiedUsers" /* 15940 */;
import SecureFramesPersistedStore from "SecureFramesPersistedStore" /* 9280 */;

require = fn;
const SettingBuilders = fn(11601);
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.x8U2eC);
  },
  useDescription: function useSecureFramesEncryptionDescription() {
    const secureFramesVerifiedUserIds = useSecureFramesVerifiedUsers.useSecureFramesVerifiedUserIds();
    const intl = util.intl;
    return intl.formatToPlainString(util.t["6vrePS"], { count: secureFramesVerifiedUserIds.length });
  },
  parent: fn(8079).MobileUserSettings.DATA_AND_PRIVACY,
  usePredicate: function useSecureFramesPersistentCodesValue() {
    const items = [SecureFramesPersistedStore];
    return initialize.useStateFromStores(items, () => persistentCodesEnabled.getPersistentCodesEnabled());
  },
  screen: {
    route: fn(1074).UserSettingsSections.SECURE_FRAMES,
    getComponent() {
      return require("SettingsSecureFramesScreen").default;
    }
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/EncryptionSetting.tsx");

export default route;
export const SecureFramesEncryptionSetting = route;
