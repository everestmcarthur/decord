// Module ID: 15856
// Function ID: 15857
// Name: route
// Dependencies: [7975, 1074, 11473, 1114, 15857, 2]

// Module 15856 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 1074 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import MobileUserSettings from "MobileUserSettings" /* 7975 */;
import createToggle from "createToggle" /* 11473 */;

obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["5b3FNI"]);
  },
  parent: MobileUserSettings.MobileUserSettings.DATA_AND_PRIVACY,
  unsearchable: true,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.SECURE_FRAMES_VERIFIED_DEVICES,
  getComponent() {
    return require(15857) /* VerificationListItem */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/SecureFramesVerifiedDevicesSetting.tsx");

export default route;
