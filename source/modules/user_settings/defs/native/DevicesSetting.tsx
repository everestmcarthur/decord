// Module ID: 15023
// Function ID: 15024
// Name: DevicesSetting
// Dependencies: [1074, 11540, 1114, 15024, 15026, 2]

// Module 15023 (DevicesSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1114 */;
import LaptopPhoneIcon from "LaptopPhoneIcon" /* 15024 */;
import SettingBuilders from "SettingBuilders" /* 11540 */;
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
