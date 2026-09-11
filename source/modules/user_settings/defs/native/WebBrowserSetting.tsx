// Module ID: 15539
// Function ID: 15540
// Name: WebBrowserSetting
// Dependencies: [1074, 11564, 1114, 15540, 8978, 15541, 2]

// Module 15539 (WebBrowserSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1114 */;
import GlobeEarthIcon from "GlobeEarthIcon" /* 8978 */;
import SelectWebBrowserSetting from "SelectWebBrowserSetting" /* 15540 */;
import SettingBuilders from "SettingBuilders" /* 11564 */;
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
