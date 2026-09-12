// Module ID: 15955
// Function ID: 15956
// Name: DataAndPrivacySetting
// Dependencies: [19, 1074, 14944, 14947, 11601, 1114, 9341, 15956, 2]

// Module 15955 (DataAndPrivacySetting)
import util from "util" /* 1114 */;
import ConsentActionCreators from "ConsentActionCreators" /* 14944 */;
import RequestYourDataSetting from "RequestYourDataSetting" /* 14947 */;
import noop from "module_19" /* 19 */;

require = fn;
const SettingBuilders = fn(11601);
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.OAuOHD);
  },
  parent: null,
  IconComponent: fn(9341).ShieldLockIcon,
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
