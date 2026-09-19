// Module ID: 15723
// Function ID: 15724
// Name: ChatSetting
// Dependencies: [1074, 11723, 1115, 15724, 15726, 2]

// Module 15723 (ChatSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1115 */;
import ImageTextIcon from "ImageTextIcon" /* 15724 */;
import SettingBuilders from "SettingBuilders" /* 11723 */;
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
