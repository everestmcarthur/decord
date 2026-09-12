// Module ID: 15561
// Function ID: 15562
// Name: WebBrowserSetting
// Dependencies: [1074, 11601, 1114, 15562, 9015, 15563, 2]

// Module 15561 (WebBrowserSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1114 */;
import GlobeEarthIcon from "GlobeEarthIcon" /* 9015 */;
import SelectWebBrowserSetting from "SelectWebBrowserSetting" /* 15562 */;
import SettingBuilders from "SettingBuilders" /* 11601 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["C+DkPu"]);
  },
  usePredicate() {
    return SelectWebBrowserSetting.useWebBrowserSettingOptions().length > 1;
  },
  parent: null,
  IconComponent: GlobeEarthIcon.GlobeEarthIcon,
  screen: {
    route: Constants.UserSettingsSections.BROWSER,
    getComponent() {
      return require("SettingsWebBrowserScreen").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/WebBrowserSetting.tsx");

export default route;
