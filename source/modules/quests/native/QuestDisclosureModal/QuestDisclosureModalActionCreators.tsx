// Module ID: 15220
// Function ID: 15221
// Name: QuestDisclosureModalActionCreators
// Dependencies: [5537, 7832, 15209, 7837, 7838, 7848, 7826, 4841, 15221, 1897, 2]

// Module 15220 (QuestDisclosureModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4841 */;
import AdCreativeType from "AdCreativeType" /* 5537 */;
import AdAnalyticsInterfaceExperiment from "AdAnalyticsInterfaceExperiment" /* 7837 */;
import QuestDockCreativeContext from "QuestDockCreativeContext" /* 15209 */;
import size from "module_2" /* 2 */;

const QUEST_DISCLOSURE_MODAL = "QUEST_DISCLOSURE_MODAL";
let result = size.fileFinishedImporting("modules/quests/native/QuestDisclosureModal/QuestDisclosureModalActionCreators.tsx");

export default {
  showModal(isTargetedDisclosure) {
    ({ creative, trackingCtx } = isTargetedDisclosure);
    const creativeAnalyticsParams = QuestDockCreativeContext.getCreativeAnalyticsParams(creative);
    const tmp2 = dependencyMap;
    if (obj2.shouldMigrateToAdAnalyticsInterface(AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_disclosure_modal")) {
      const obj3 = { type: tmp(7848).AdUserActionType.CLICK_INTERNAL };
      const merged = Object.assign(creativeAnalyticsParams);
      ({ ctaContent: obj8.questContentCTA, content: obj8.surfaceId, sourceQuestContent: obj8.sourceQuestContent, position: obj8.questContentPosition } = trackingCtx);
      tmp(7838).captureAdUserAction(obj3);
      const tmpResult = tmp(7838);
    } else if (creativeAnalyticsParams.adCreativeType === tmp(5537).AdCreativeType.QUEST) {
      const obj5 = { questId: creativeAnalyticsParams.adCreativeId, questContent: null, questContentCTA: null, questContentPosition: null, sourceQuestContent: null };
      ({ content: obj6.questContent, ctaContent: obj6.questContentCTA, position: obj6.questContentPosition, sourceQuestContent: obj6.sourceQuestContent } = trackingCtx);
      const result = tmp(7826).trackQuestContentClicked(obj5);
      const tmpResult4 = tmp(7826);
    } else {
      ({ adCreativeId: obj4.adContentId, adCreativeType: obj4.adCreativeType } = creativeAnalyticsParams);
      ({ content: obj4.questContent, ctaContent: obj4.questContentCTA, position: obj4.questContentPosition, sourceQuestContent: obj4.sourceQuestContent } = trackingCtx);
      const result1 = tmp(7826).trackAdContentClicked({ adContentId: null, adCreativeType: null, questContent: null, questContentCTA: null, questContentPosition: null, sourceQuestContent: null });
      const obj7 = { adContentId: null, adCreativeType: null, questContent: null, questContentCTA: null, questContentPosition: null, sourceQuestContent: null };
      const tmpResult5 = tmp(7826);
    }
    obj2 = AdAnalyticsInterfaceExperiment;
    const type = creative.type;
    const obj9 = ModalActionCreatorsDefault;
    if (AdCreativeType.AdCreativeType.QUEST === type) {
      const obj10 = { adCreativeType: null, gamePublisher: null, gameTitle: null, cosponsorName: null, isVideoQuest: null };
      ({ gamePublisher, gameTitle } = creative.quest.config.messages);
      obj10.adCreativeType = tmp(5537).AdCreativeType.QUEST;
      obj10.gamePublisher = gamePublisher;
      obj10.gameTitle = gameTitle;
      const cosponsorMetadata = creative.quest.config.cosponsorMetadata;
      let name;
      if (cosponsorMetadata != null) {
        name = cosponsorMetadata.name;
      }
      obj10.cosponsorName = name;
      obj10.isVideoQuest = tmp(7832).hasWatchVideoTasks(creative.quest);
      let tmp11 = obj10;
      const tmpResult6 = tmp(7832);
    } else if (tmp(5537).AdCreativeType.BOUNTY === type) {
      const obj11 = { adCreativeType: tmp(5537).AdCreativeType.BOUNTY, gamePublisher: creative.bounty.advertiserName };
      tmp11 = obj11;
    }
    const obj12 = {};
    const merged1 = Object.assign(tmp11);
    obj12.isTargetedDisclosure = isTargetedDisclosure.isTargetedDisclosure;
    obj9.pushLazy(asyncRequireImpl(15221, tmp2.paths), obj12, QUEST_DISCLOSURE_MODAL);
  },
  hideModal() {
    ModalActionCreatorsDefault.popWithKey(QUEST_DISCLOSURE_MODAL);
  }
};
