// Module ID: 15639
// Function ID: 15640
// Name: ChangeLogSetting
// Dependencies: [1074, 11606, 1115, 4594, 15640, 2]

// Module 15639 (ChangeLogSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1115 */;
import CircleInformationIcon from "CircleInformationIcon" /* 4594 */;
import ChangeLogModal from "ChangeLogModal" /* 15640 */;
import SettingBuilders from "SettingBuilders" /* 11606 */;
import size from "module_2" /* 2 */;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.LRmNAl);
  },
  parent: null,
  IconComponent: CircleInformationIcon.CircleInformationIcon,
  screen: {
    route: Constants.UserSettingsSections.CHANGE_LOG,
    getComponent() {
      return ChangeLogModal.ChangeLogScreen;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ChangeLogSetting.tsx");

export default route;
