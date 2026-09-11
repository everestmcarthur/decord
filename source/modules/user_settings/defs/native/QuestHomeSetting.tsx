// Module ID: 15048
// Function ID: 15049
// Name: defs/QuestHomeSetting
// Dependencies: [1074, 11562, 1114, 11578, 15049, 15051, 7794, 5500, 2]

// Module 15048 (defs/QuestHomeSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1114 */;
import QuestContent from "QuestContent" /* 5500 */;
import utils_QuestUtils from "utils/QuestUtils" /* 7794 */;
import QuestsEligibility from "QuestsEligibility" /* 11578 */;
import QuestsIcon from "QuestsIcon" /* 15049 */;
import SettingBuilders from "SettingBuilders" /* 11562 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.JALI2K);
  },
  usePredicate() {
    return QuestsEligibility.getIsEligibleForQuests();
  },
  parent: null,
  IconComponent: QuestsIcon.QuestsIcon,
  screen: {
    route: Constants.UserSettingsSections.QUESTS,
    getComponent() {
      return require("QuestHomeSetting").default;
    }
  },
  usePreNavigationAction() {
    return () => {
      const obj = utils_QuestUtils;
      const result = obj.setQuestHomeUtmContext({ fromContent: QuestContent.QuestContent.USER_SETTINGS });
      return true;
    };
  }
});
let result = size.fileFinishedImporting("modules/user_settings/defs/native/QuestHomeSetting.tsx");

export default route;
