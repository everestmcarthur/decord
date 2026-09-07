// Module ID: 14996
// Function ID: 14997
// Name: route
// Dependencies: [1074, 11473, 1114, 11489, 14997, 14999, 7722, 5449, 2]

// Module 14996 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 1074 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import getIsEligibleForQuests from "getIsEligibleForQuests" /* 11489 */;
import QuestsIcon from "QuestsIcon" /* 14997 */;
import createToggle from "createToggle" /* 11473 */;

obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.JALI2K);
  },
  usePredicate() {
    return getIsEligibleForQuests.getIsEligibleForQuests();
  },
  parent: null,
  IconComponent: QuestsIcon.QuestsIcon,
  screen: obj,
  usePreNavigationAction() {
    return () => {
      let obj = callback(7722);
      obj = { fromContent: callback(5449).QuestContent.USER_SETTINGS };
      const result = obj.setQuestHomeUtmContext(obj);
      return true;
    };
  }
};
obj = {
  route: ME.UserSettingsSections.QUESTS,
  getComponent() {
    return require(14999) /* QuestHomeSetting */.default;
  }
};
const route = createToggle.createRoute(obj);
let result = set.fileFinishedImporting("modules/user_settings/defs/native/QuestHomeSetting.tsx");

export default route;
