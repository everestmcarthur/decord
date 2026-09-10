// Module ID: 15022
// Function ID: 15023
// Name: defs/QuestHomeSetting
// Dependencies: [1074, 11500, 1114, 11516, 15023, 15025, 7736, 5463, 2]

// Module 15022 (defs/QuestHomeSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1114 */;
import QuestContent from "QuestContent" /* 5463 */;
import utils_QuestUtils from "utils/QuestUtils" /* 7736 */;
import QuestsEligibility from "QuestsEligibility" /* 11516 */;
import QuestsIcon from "QuestsIcon" /* 15023 */;
import SettingBuilders from "SettingBuilders" /* 11500 */;
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
