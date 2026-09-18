// Module ID: 15175
// Function ID: 15176
// Name: QuestCardPreview
// Dependencies: [21, 11783, 5447, 15176, 1114, 15093, 576, 2]
// Exports: QuestCardPreview

// Module 15175 (QuestCardPreview)
import jsxProd from "jsxProd" /* 21 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import QuestTypes from "QuestTypes" /* 5447 */;
import QuestCard from "QuestCard" /* 15093 */;
import MobileQuestPreviewContainerDefault from "MobileQuestPreviewContainer" /* 15176 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/user_settings/quests/native/QuestCardPreview.tsx");

export const QuestCardPreview = function QuestCardPreview(quest) {
  quest = quest.quest;
  return jsx(quest(11783).QuestContentImpressionTrackerNative, {
    questOrQuests: quest,
    questContent: quest(5447).QuestContent.INTERNAL_PREVIEW_TOOL,
    sourceQuestContent: quest(5447).QuestContent.INTERNAL_PREVIEW_TOOL,
    trackGuildAndChannelMetadata: false,
    children() {
      const obj = { title: null, children: null };
      const intl = util.intl;
      obj.title = intl.string(util.t.BDUDau);
      obj.children = jsx(QuestCard.QuestCard, { quest, containerPadding: nativeDefault.space.PX_16, sourceQuestContent: QuestTypes.QuestContent.INTERNAL_PREVIEW_TOOL });
      return <tmp title={null}>{null}</tmp>;
    }
  });
};
