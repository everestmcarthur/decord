// Module ID: 15185
// Function ID: 15186
// Name: useVideoQuestClickCtaAndMaybeCloseModal
// Dependencies: [19, 11518, 1365, 11327, 11528, 7742, 2]
// Exports: useVideoQuestClickCtaAndMaybeCloseModal

// Module 15185 (useVideoQuestClickCtaAndMaybeCloseModal)
import URLUtilsDefault from "URLUtils" /* 1365 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7742 */;
import QuestCopyUtils from "QuestCopyUtils" /* 11327 */;
import QuestPlatformUtils from "QuestPlatformUtils" /* 11528 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/VideoQuestModal/useVideoQuestClickCtaAndMaybeCloseModal.tsx");

export const useVideoQuestClickCtaAndMaybeCloseModal = function useVideoQuestClickCtaAndMaybeCloseModal(quest) {
  quest = quest.quest;
  const onClose = quest.onClose;
  const sourceQuestContent = quest.sourceQuestContent;
  const getQuestImpressionId = quest(sourceQuestContent[1]).useGetQuestImpressionId();
  const items = [quest, getQuestImpressionId, sourceQuestContent, onClose];
  return getQuestImpressionId.useCallback((content) => {
    const obj = URLUtilsDefault;
    if (obj.isDiscordUrl(obj2.getCtaLink(quest.config), true)) {
      onClose();
    }
    obj2 = QuestCopyUtils;
    const tmp3 = quest;
    const tmp2Result = QuestPlatformUtils;
    tmp2Result.openGameLinkDirectly(tmp3, { content, ctaContent: AnalyticsTypes.QuestContentCTA.OPEN_GAME_LINK, impressionId: getQuestImpressionId(), sourceQuestContent });
  }, items);
};
