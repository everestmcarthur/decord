// Module ID: 15867
// Function ID: 15868
// Name: route
// Dependencies: [19, 1074, 14858, 14861, 11473, 1114, 9217, 15868, 2]

// Module 15867 (route)
import getSystemLocale from "getSystemLocale" /* 1114 */;
import closure_2 from "noop" /* 19 */;
import createToggle from "createToggle" /* 11473 */;

require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.OAuOHD);
  },
  parent: null,
  IconComponent: require("ShieldLockIcon").ShieldLockIcon,
  screen: createToggle,
  usePreNavigationAction() {
    return React.useCallback(() => {
      const consents = callback(14858).fetchConsents();
      const obj = callback(14858);
      const harvestStatus = callback(14861).fetchHarvestStatus();
      return true;
    }, []);
  }
};
createToggle = {
  route: require("ME").UserSettingsSections.DATA_AND_PRIVACY,
  getComponent() {
    return require(15868) /* DataAndPrivacySettings */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/DataAndPrivacySetting.tsx");

export default createToggle;
