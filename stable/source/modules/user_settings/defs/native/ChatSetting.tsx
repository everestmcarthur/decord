// Module ID: 15459
// Function ID: 15460
// Name: ChatSetting
// Dependencies: [1074, 11473, 1114, 15460, 15462, 2]

// Module 15459 (ChatSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1114 */;
import ImageTextIcon from "ImageTextIcon" /* 15460 */;
import SettingBuilders from "SettingBuilders" /* 11473 */;
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
