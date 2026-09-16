// Module ID: 15990
// Function ID: 15991
// Name: DataAndPrivacySetting
// Dependencies: [19, 1074, 14971, 14974, 11614, 1115, 9355, 15991, 2]

// Module 15990 (DataAndPrivacySetting)
import util from "util" /* 1115 */;
import ConsentActionCreators from "ConsentActionCreators" /* 14971 */;
import RequestYourDataSetting from "RequestYourDataSetting" /* 14974 */;
import noop from "module_19" /* 19 */;

require = fn;
const SettingBuilders = fn(11614);
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.OAuOHD);
  },
  parent: null,
  IconComponent: fn(9355).ShieldLockIcon,
  screen: {
    route: fn(1074).UserSettingsSections.DATA_AND_PRIVACY,
    getComponent() {
      return require("DataAndPrivacyScreen").default;
    }
  },
  usePreNavigationAction() {
    return noop.useCallback(() => {
      const consents = ConsentActionCreators.fetchConsents();
      const harvestStatus = RequestYourDataSetting.fetchHarvestStatus();
      return true;
    }, []);
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DataAndPrivacySetting.tsx");

export default route;
