// Module ID: 15154
// Function ID: 15155
// Name: openVideoQuestModal
// Dependencies: [7717, 15148, 1256, 4777, 15155, 1896, 11544, 2]
// Exports: default

// Module 15154 (openVideoQuestModal)
import v1All from "v1" /* 1256 */;
import VideoQuestUtils from "VideoQuestUtils" /* 11544 */;
import QuestStore from "QuestStore" /* 7717 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/VideoQuestModal/openVideoQuestModal.tsx");

export default function openVideoQuestModal(questId) {
  questId = questId.questId;
  const sourceQuestContent = questId.sourceQuestContent;
  ({ questContentPosition, initialStep } = questId);
  if (QuestStore.isQuestAccessSuspended) {
    const quest = obj.getQuest(questId);
    let completedAt;
    if (quest != null) {
      const userStatus = quest.userStatus;
      if (userStatus != null) {
        completedAt = userStatus.completedAt;
      }
    }
    if (null == completedAt) {
      sourceQuestContent(15148)();
    }
  }
  const v4Result = v1All.v4();
  importAll = v4Result;
  obj = QuestStore;
  const obj3 = sourceQuestContent(4777);
  const obj4 = {
    questId,
    questContentPosition,
    videoSessionId: v4Result,
    initialStep,
    onClose() {
      return VideoQuestUtils.handleVideoQuestModalClose({ questId, sourceQuestContent, videoSessionId: v4Result });
    },
    sourceQuestContent
  };
  const tmp8 = questId(1896)(15155, dependencyMap.paths);
  return obj3.pushLazy(tmp8, obj4, questId(11544).getVideoQuestModalKey(questId));
};
