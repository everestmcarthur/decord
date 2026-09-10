// Module ID: 14982
// Function ID: 14983
// Name: ConnectionsSetting
// Dependencies: [1074, 11500, 1114, 14983, 14985, 2]

// Module 14982 (ConnectionsSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1114 */;
import PuzzlePieceIcon from "PuzzlePieceIcon" /* 14983 */;
import SettingBuilders from "SettingBuilders" /* 11500 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["3fe7U5"]);
  },
  parent: null,
  IconComponent: PuzzlePieceIcon.PuzzlePieceIcon,
  screen: {
    route: Constants.UserSettingsSections.CONNECTIONS,
    getComponent() {
      return require("ConnectionsSettingScreen").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ConnectionsSetting.tsx");

export default route;
