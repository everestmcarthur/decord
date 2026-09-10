// Module ID: 15283
// Function ID: 15284
// Name: QuestDockBountyBody
// Dependencies: [19, 5494, 21, 15261, 15181, 15171, 15178, 11558, 11265, 11269, 5501, 7779, 5497, 15080, 15082, 15279, 11369, 1114, 2]

// Module 15283 (QuestDockBountyBody)
import QuestTypes from "QuestTypes" /* 5497 */;
import AdCreativeType from "AdCreativeType" /* 5501 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7779 */;
import captureAdUserAction from "captureAdUserAction" /* 11265 */;
import captureAdUserActionTypes from "captureAdUserActionTypes" /* 11269 */;
import BountiesModalActionCreatorsDefault from "BountiesModalActionCreators" /* 15080 */;
import BountiesModalTypes from "BountiesModalTypes" /* 15082 */;
import noop from "module_19" /* 19 */;

require = fn;
const QuestDockMode = fn(5494).QuestDockMode;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockBountyBody.tsx");

export default noop.memo(function QuestDockBountyBody() {
  const isRendered = noop.useContext(setRestingQuestDockMode(getQuestImpressionId[3])).isRendered;
  questDockBounty = questDockBounty(getQuestImpressionId[4]).useQuestDockBounty();
  let obj = questDockBounty(getQuestImpressionId[4]);
  let isQuestDockExpanded = questDockBounty(getQuestImpressionId[5]).useIsQuestDockExpanded();
  setRestingQuestDockMode = noop.useContext(questDockBounty(getQuestImpressionId[6]).QuestDockExternalCoordinationContext).setRestingQuestDockMode;
  let obj2 = questDockBounty(getQuestImpressionId[5]);
  getQuestImpressionId = questDockBounty(getQuestImpressionId[7]).useGetQuestImpressionId();
  const items = [questDockBounty, getQuestImpressionId, setRestingQuestDockMode];
  const callback = noop.useCallback(() => {
    const obj = captureAdUserAction;
    obj.captureAdUserAction({ type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, adCreativeId: questDockBounty.id, questContentCTA: AnalyticsTypes.QuestContentCTA.START_BOUNTY, surfaceId: QuestTypes.QuestContent.QUEST_BAR_MOBILE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE, impressionId: getQuestImpressionId() });
    const obj2 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, adCreativeId: questDockBounty.id, questContentCTA: AnalyticsTypes.QuestContentCTA.START_BOUNTY, surfaceId: QuestTypes.QuestContent.QUEST_BAR_MOBILE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE, impressionId: getQuestImpressionId() };
    const obj3 = BountiesModalActionCreatorsDefault;
    obj3.showModal({ bountyId: questDockBounty.id, variant: BountiesModalTypes.BountiesModalVariant.SINGLE_VIDEO, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE });
    setRestingQuestDockMode(QuestDockMode.COLLAPSED);
  }, items);
  let obj3 = questDockBounty(getQuestImpressionId[7]);
  const obj4 = { assetUrl: setRestingQuestDockMode(getQuestImpressionId[16]), isAnimatedAsset: true, paused: null, withAnimation: null };
  let tmp9 = !isQuestDockExpanded;
  if (isQuestDockExpanded) {
    tmp9 = !isRendered;
  }
  obj4.paused = tmp9;
  if (isQuestDockExpanded) {
    isQuestDockExpanded = isRendered;
  }
  const obj5 = { rewardTile: jsx(questDockBounty(getQuestImpressionId[15]).QuestDockBodyRewardTile, { assetUrl: setRestingQuestDockMode(getQuestImpressionId[16]), isAnimatedAsset: true, paused: null, withAnimation: null }), title: null, description: null, ctaText: null, onCtaPress: null };
  obj4.withAnimation = isQuestDockExpanded;
  let str = questDockBounty.productName;
  if (str == null) {
    str = "";
  }
  obj5.title = str;
  const intl = tmp2(tmp[17]).intl;
  obj5.description = intl.string(questDockBounty(getQuestImpressionId[17]).t["1uzE2S"]);
  const intl2 = tmp2(tmp[17]).intl;
  obj5.ctaText = intl2.string(questDockBounty(getQuestImpressionId[17]).t["1IPUq9"]);
  obj5.onCtaPress = callback;
  return jsx(setRestingQuestDockMode(getQuestImpressionId[15]), { rewardTile: jsx(questDockBounty(getQuestImpressionId[15]).QuestDockBodyRewardTile, { assetUrl: setRestingQuestDockMode(getQuestImpressionId[16]), isAnimatedAsset: true, paused: null, withAnimation: null }), title: null, description: null, ctaText: null, onCtaPress: null });
});
