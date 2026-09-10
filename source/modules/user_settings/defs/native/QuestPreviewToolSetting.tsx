// Module ID: 15249
// Function ID: 15250
// Name: QuestPreviewToolSetting
// Dependencies: [1074, 11540, 1114, 11555, 15072, 15250, 2]

// Module 15249 (QuestPreviewToolSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1114 */;
import hooks_QuestHooks from "hooks/QuestHooks" /* 11555 */;
import QuestsIcon from "QuestsIcon" /* 15072 */;
import SettingBuilders from "SettingBuilders" /* 11540 */;
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
