// Module ID: 15478
// Function ID: 15479
// Name: WebBrowserSetting
// Dependencies: [1074, 11473, 1114, 15479, 8892, 15480, 2]

// Module 15478 (WebBrowserSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1114 */;
import GlobeEarthIcon from "GlobeEarthIcon" /* 8892 */;
import SelectWebBrowserSetting from "SelectWebBrowserSetting" /* 15479 */;
import SettingBuilders from "SettingBuilders" /* 11473 */;
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
