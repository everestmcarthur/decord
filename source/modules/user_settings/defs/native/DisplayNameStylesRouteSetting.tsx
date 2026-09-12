// Module ID: 15418
// Function ID: 15419
// Name: DisplayNameStylesRouteSetting
// Dependencies: [1074, 11601, 1114, 2786, 15419, 2]

// Module 15418 (DisplayNameStylesRouteSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1114 */;
import _modDef2786 from "module_2786" /* 2786 */;
import SettingBuilders from "SettingBuilders" /* 11601 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2786.ZPMAlX);
  },
  parent: null,
  unsearchable: true,
  screen: {
    route: Constants.UserSettingsSections.DISPLAY_NAME_STYLES,
    getComponent() {
      return require("DisplayNameStylesEditScreen").default;
    }
  },
  usePredicate() {
    return true;
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DisplayNameStylesRouteSetting.tsx");

export default route;
