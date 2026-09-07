// Module ID: 14948
// Function ID: 14949
// Name: route
// Dependencies: [1074, 11473, 1114, 14949, 14951, 2]

// Module 14948 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 1074 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import LaptopPhoneIcon from "LaptopPhoneIcon" /* 14949 */;
import createToggle from "createToggle" /* 11473 */;

obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["+1h0k/"]);
  },
  parent: null,
  IconComponent: LaptopPhoneIcon.LaptopPhoneIcon,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.SESSIONS,
  getComponent() {
    return require(14951) /* UserSettingsSessions */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/DevicesSetting.tsx");

export default route;
