// Module ID: 14948
// Function ID: 14949
// Name: DevicesSetting
// Dependencies: [1074, 11473, 1114, 14949, 14951, 2]

// Module 14948 (DevicesSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1114 */;
import LaptopPhoneIcon from "LaptopPhoneIcon" /* 14949 */;
import SettingBuilders from "SettingBuilders" /* 11473 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["+1h0k/"]);
  },
  parent: null,
  IconComponent: LaptopPhoneIcon.LaptopPhoneIcon,
  screen: {
    route: Constants.UserSettingsSections.SESSIONS,
    getComponent() {
      return require("UserSettingsSessions").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DevicesSetting.tsx");

export default route;
