// Module ID: 15606
// Function ID: 15607
// Name: ChangeLogSetting
// Dependencies: [1074, 11564, 1114, 4562, 15607, 2]

// Module 15606 (ChangeLogSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1114 */;
import CircleInformationIcon from "CircleInformationIcon" /* 4562 */;
import ChangeLogModal from "ChangeLogModal" /* 15607 */;
import SettingBuilders from "SettingBuilders" /* 11564 */;
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
