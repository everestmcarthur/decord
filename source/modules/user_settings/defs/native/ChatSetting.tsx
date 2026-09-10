// Module ID: 15537
// Function ID: 15538
// Name: ChatSetting
// Dependencies: [1074, 11540, 1114, 15538, 15540, 2]

// Module 15537 (ChatSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1114 */;
import ImageTextIcon from "ImageTextIcon" /* 15538 */;
import SettingBuilders from "SettingBuilders" /* 11540 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["/VQax8"]);
  },
  parent: null,
  IconComponent: ImageTextIcon.ImageTextIcon,
  screen: {
    route: Constants.UserSettingsSections.TEXT,
    getComponent() {
      return require("SettingsChatScreen").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ChatSetting.tsx");

export default route;
