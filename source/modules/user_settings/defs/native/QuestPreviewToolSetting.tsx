// Module ID: 15228
// Function ID: 15229
// Name: QuestPreviewToolSetting
// Dependencies: [1074, 11564, 1114, 11579, 15049, 15229, 2]

// Module 15228 (QuestPreviewToolSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1114 */;
import hooks_QuestHooks from "hooks/QuestHooks" /* 11579 */;
import QuestsIcon from "QuestsIcon" /* 15049 */;
import SettingBuilders from "SettingBuilders" /* 11564 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.BDUDau);
  },
  usePredicate() {
    return hooks_QuestHooks.useIsPreviewerOnAnyQuest();
  },
  parent: null,
  IconComponent: QuestsIcon.QuestsIcon,
  screen: {
    route: Constants.UserSettingsSections.QUEST_PREVIEW_TOOL_2,
    getComponent() {
      return require("SettingsQuestPreviewScreen").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/QuestPreviewToolSetting.tsx");

export default route;
