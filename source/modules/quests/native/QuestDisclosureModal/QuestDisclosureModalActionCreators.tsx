// Module ID: 15171
// Function ID: 15172
// Name: QuestDisclosureModalActionCreators
// Dependencies: [5503, 7797, 15160, 11288, 11289, 11293, 7791, 4810, 15172, 1896, 2]

// Module 15171 (QuestDisclosureModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4810 */;
import AdCreativeType from "AdCreativeType" /* 5503 */;
import AdAnalyticsInterfaceExperiment from "AdAnalyticsInterfaceExperiment" /* 11288 */;
import QuestDockCreativeContext from "QuestDockCreativeContext" /* 15160 */;
import size from "module_2" /* 2 */;

const QUEST_DISCLOSURE_MODAL = "QUEST_DISCLOSURE_MODAL";
let result = size.fileFinishedImporting("modules/quests/native/QuestDisclosureModal/QuestDisclosureModalActionCreators.tsx");

export default {
  showModal(isTargetedDisclosure) {
    ({ creative, trackingCtx } = isTargetedDisclosure);
    const creativeAnalyticsParams = QuestDockCreativeContext.getCreativeAnalyticsParams(creative);
    const tmp2 = dependencyMap;
    if (obj2.shouldMigrateToAdAnalyticsInterface(AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_disclosure_modal")) {
      const obj3 = { type: tmp(11293).AdUserActionType.CLICK_INTERNAL };
      const merged = Object.assign(creativeAnalyticsParams);
      ({ ctaContent: obj8.questContentCTA, content: obj8.surfaceId, sourceQuestContent: obj8.sourceQuestContent, position: obj8.questContentPosition } = trackingCtx);
      tmp(11289).captureAdUserAction(obj3);
      const tmpResult = tmp(11289);
    } else if (creativeAnalyticsParams.adCreativeType === tmp(5503).AdCreativeType.QUEST) {
      const obj5 = { questId: creativeAnalyticsParams.adCreativeId, questContent: null, questContentCTA: null, questContentPosition: null, sourceQuestContent: null };
      ({ content: obj6.questContent, ctaContent: obj6.questContentCTA, position: obj6.questContentPosition, sourceQuestContent: obj6.sourceQuestContent } = trackingCtx);
      const result = tmp(7791).trackQuestContentClicked(obj5);
      const tmpResult4 = tmp(7791);
    } else {
      ({ adCreativeId: obj4.adContentId, adCreativeType: obj4.adCreativeType } = creativeAnalyticsParams);
      ({ content: obj4.questContent, ctaContent: obj4.questContentCTA, position: obj4.questContentPosition, sourceQuestContent: obj4.sourceQuestContent } = trackingCtx);
      const result1 = tmp(7791).trackAdContentClicked({ adContentId: null, adCreativeType: null, questContent: null, questContentCTA: null, questContentPosition: null, sourceQuestContent: null });
      const obj7 = { adContentId: null, adCreativeType: null, questContent: null, questContentCTA: null, questContentPosition: null, sourceQuestContent: null };
      const tmpResult5 = tmp(7791);
    }
    obj2 = AdAnalyticsInterfaceExperiment;
    const type = creative.type;
    const obj9 = ModalActionCreatorsDefault;
    if (AdCreativeType.AdCreativeType.QUEST === type) {
      const obj10 = { adCreativeType: null, gamePublisher: null, gameTitle: null, cosponsorName: null, isVideoQuest: null };
      ({ gamePublisher, gameTitle } = creative.quest.config.messages);
      obj10.adCreativeType = tmp(5503).AdCreativeType.QUEST;
      obj10.gamePublisher = gamePublisher;
      obj10.gameTitle = gameTitle;
      const cosponsorMetadata = creative.quest.config.cosponsorMetadata;
      let name;
      if (cosponsorMetadata != null) {
        name = cosponsorMetadata.name;
      }
      obj10.cosponsorName = name;
      obj10.isVideoQuest = tmp(7797).hasWatchVideoTasks(creative.quest);
      let tmp11 = obj10;
      const tmpResult6 = tmp(7797);
    } else if (tmp(5503).AdCreativeType.BOUNTY === type) {
      const obj11 = { adCreativeType: tmp(5503).AdCreativeType.BOUNTY, gamePublisher: creative.bounty.advertiserName };
      tmp11 = obj11;
    }
    const obj12 = {};
    const merged1 = Object.assign(tmp11);
    obj12.isTargetedDisclosure = isTargetedDisclosure.isTargetedDisclosure;
    obj9.pushLazy(asyncRequireImpl(15172, tmp2.paths), obj12, QUEST_DISCLOSURE_MODAL);
  },
  hideModal() {
    ModalActionCreatorsDefault.popWithKey(QUEST_DISCLOSURE_MODAL);
  }
};
