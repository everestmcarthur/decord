// Module ID: 16183
// Function ID: 16184
// Name: DataAndPrivacySetting
// Dependencies: [19, 1074, 15127, 15130, 11723, 1115, 10038, 16184, 2]

// Module 16183 (DataAndPrivacySetting)
import util from "util" /* 1115 */;
import ConsentActionCreators from "ConsentActionCreators" /* 15127 */;
import RequestYourDataSetting from "RequestYourDataSetting" /* 15130 */;
import noop from "module_19" /* 19 */;

require = fn;
const SettingBuilders = fn(11723);
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.OAuOHD);
  },
  parent: null,
  IconComponent: fn(10038).ShieldLockIcon,
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
