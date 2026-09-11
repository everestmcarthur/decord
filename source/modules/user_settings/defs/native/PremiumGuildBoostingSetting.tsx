// Module ID: 15046
// Function ID: 15047
// Name: PremiumGuildBoostingSetting
// Dependencies: [1074, 11564, 1114, 9468, 13555, 2]

// Module 15046 (PremiumGuildBoostingSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1114 */;
import BoostGemIcon from "BoostGemIcon" /* 9468 */;
import SettingBuilders from "SettingBuilders" /* 11564 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["+CbP2v"]);
  },
  parent: null,
  IconComponent: BoostGemIcon.BoostGemIcon,
  screen: {
    route: Constants.UserSettingsSections.GUILD_BOOSTING,
    getComponent() {
      return require("UserSettingsPremiumGuildSubscriptions").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/PremiumGuildBoostingSetting.tsx");

export default route;
