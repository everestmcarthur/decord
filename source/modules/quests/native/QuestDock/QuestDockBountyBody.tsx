// Module ID: 15262
// Function ID: 15263
// Name: QuestDockBountyBody
// Dependencies: [19, 5496, 21, 15240, 15160, 15150, 15157, 11582, 11289, 11293, 5503, 7801, 5499, 15057, 15059, 11592, 15258, 11393, 15263, 1114, 15109, 8173, 9171, 2]

// Module 15262 (QuestDockBountyBody)
import QuestTypes from "QuestTypes" /* 5499 */;
import AdCreativeType from "AdCreativeType" /* 5503 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7801 */;
import captureAdUserAction from "captureAdUserAction" /* 11289 */;
import captureAdUserActionTypes from "captureAdUserActionTypes" /* 11293 */;
import QuestPlatformUtils from "QuestPlatformUtils" /* 11592 */;
import BountiesModalActionCreatorsDefault from "BountiesModalActionCreators" /* 15057 */;
import BountiesModalTypes from "BountiesModalTypes" /* 15059 */;
import noop from "module_19" /* 19 */;

require = fn;
const QuestDockMode = fn(5496).QuestDockMode;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockBountyBody.tsx");

export default noop.memo(function QuestDockBountyBody() {
  const isRendered = noop.useContext(setRestingQuestDockMode(getQuestImpressionId[3])).isRendered;
  questDockBounty = questDockBounty(getQuestImpressionId[4]).useQuestDockBounty();
  let obj = questDockBounty(getQuestImpressionId[4]);
  let isQuestDockExpanded = questDockBounty(getQuestImpressionId[5]).useIsQuestDockExpanded();
  setRestingQuestDockMode = noop.useContext(questDockBounty(getQuestImpressionId[6]).QuestDockExternalCoordinationContext).setRestingQuestDockMode;
  let obj2 = questDockBounty(getQuestImpressionId[5]);
  getQuestImpressionId = questDockBounty(getQuestImpressionId[7]).useGetQuestImpressionId();
  const items = [questDockBounty, getQuestImpressionId, setRestingQuestDockMode];
  const items1 = [, , ];
  ({ id: arr2[0], cta: arr2[1] } = questDockBounty);
  items1[2] = getQuestImpressionId;
  const callback = noop.useCallback(() => {
    const obj = captureAdUserAction;
    obj.captureAdUserAction({ type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, adCreativeId: questDockBounty.id, questContentCTA: AnalyticsTypes.QuestContentCTA.START_BOUNTY, surfaceId: QuestTypes.QuestContent.QUEST_BAR_MOBILE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE, impressionId: getQuestImpressionId() });
    const obj2 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, adCreativeId: questDockBounty.id, questContentCTA: AnalyticsTypes.QuestContentCTA.START_BOUNTY, surfaceId: QuestTypes.QuestContent.QUEST_BAR_MOBILE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE, impressionId: getQuestImpressionId() };
    const obj3 = BountiesModalActionCreatorsDefault;
    obj3.showModal({ bountyId: questDockBounty.id, variant: BountiesModalTypes.BountiesModalVariant.SINGLE_VIDEO, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE });
    setRestingQuestDockMode(QuestDockMode.COLLAPSED);
  }, items);
  const callback1 = noop.useCallback(() => {
    const obj = QuestPlatformUtils;
    const obj2 = { adContentId: questDockBounty.id, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, cta: questDockBounty.cta };
    const result = obj.openAdGameLinkDirectly(obj2, { content: QuestTypes.QuestContent.QUEST_BAR_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.OPEN_GAME_LINK, impressionId: getQuestImpressionId(), sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE });
  }, items1);
  let obj3 = questDockBounty(getQuestImpressionId[7]);
  const obj4 = { assetUrl: setRestingQuestDockMode(getQuestImpressionId[17]), isAnimatedAsset: true, paused: null, withAnimation: null };
  let tmp11 = !isQuestDockExpanded;
  if (isQuestDockExpanded) {
    tmp11 = !isRendered;
  }
  obj4.paused = tmp11;
  if (isQuestDockExpanded) {
    isQuestDockExpanded = isRendered;
  }
  const obj5 = { rewardTile: jsx(questDockBounty(getQuestImpressionId[16]).QuestDockBodyRewardTile, { assetUrl: setRestingQuestDockMode(getQuestImpressionId[17]), isAnimatedAsset: true, paused: null, withAnimation: null }), contentBadge: jsx(setRestingQuestDockMode(getQuestImpressionId[18]), {}), title: null, description: null, ctaText: null, onCtaPress: null, secondaryCta: null };
  obj4.withAnimation = isQuestDockExpanded;
  let str = questDockBounty.productName;
  if (str == null) {
    str = "";
  }
  obj5.title = str;
  const intl = tmp3(tmp2[19]).intl;
  obj5.description = intl.string(questDockBounty(getQuestImpressionId[19]).t["1uzE2S"]);
  const intl2 = tmp3(tmp2[19]).intl;
  const tmp10 = setRestingQuestDockMode(getQuestImpressionId[16]);
  obj5.ctaText = intl2.format(questDockBounty(getQuestImpressionId[19]).t.zCbUvd, questDockBounty(getQuestImpressionId[20]).bountyProductNameIntlParams());
  obj5.onCtaPress = callback;
  const tmp3Result = questDockBounty(getQuestImpressionId[20]);
  obj5.secondaryCta = jsx(questDockBounty(getQuestImpressionId[21]).IconButton, { variant: "secondary", size: "md", icon: setRestingQuestDockMode(getQuestImpressionId[22]), accessibilityLabel: questDockBounty.cta.buttonLabel, onPress: callback1 });
  return <tmp10 rewardTile={jsx(questDockBounty(getQuestImpressionId[16]).QuestDockBodyRewardTile, { assetUrl: setRestingQuestDockMode(getQuestImpressionId[17]), isAnimatedAsset: true, paused: null, withAnimation: null })} contentBadge={jsx(setRestingQuestDockMode(getQuestImpressionId[18]), {})} title={null} description={null} ctaText={null} onCtaPress={null} secondaryCta={null} />;
});
