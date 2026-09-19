// Module ID: 15412
// Function ID: 15413
// Name: QuestContextMenu
// Dependencies: [109, 19, 7937, 1074, 21, 8178, 8181, 1115, 11736, 504, 5659, 12025, 11739, 11556, 7956, 1364, 4736, 12018, 11749, 7962, 4467, 15374, 5663, 11540, 8854, 15413, 4702, 7958, 7429, 4706, 7963, 7964, 7974, 8173, 2]

// Module 15412 (QuestContextMenu)
import util from "util" /* 1115 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4467 */;
import CheckmarkLargeIcon2 from "CheckmarkLargeIcon" /* 4706 */;
import parseURLDefault from "parseURL" /* 4736 */;
import QuestTypes from "QuestTypes" /* 5659 */;
import AdCreativeType from "AdCreativeType" /* 5663 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7962 */;
import AdAnalyticsInterfaceExperiment from "AdAnalyticsInterfaceExperiment" /* 7963 */;
import IconButton from "IconButton" /* 8178 */;
import _modDef8181 from "module_8181" /* 8181 */;
import LinkExternalSmallIcon from "LinkExternalSmallIcon" /* 8854 */;
import QuestActionCreators from "QuestActionCreators" /* 11540 */;
import QuestCopyUtils from "QuestCopyUtils" /* 11556 */;
import QuestPlatformUtils from "QuestPlatformUtils" /* 11749 */;
import QuestDisclosureModalActionCreatorsDefault from "QuestDisclosureModalActionCreators" /* 15374 */;
import _modDef15413 from "module_15413" /* 15413 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import QuestStore from "QuestStore" /* 7937 */;

require = fn;
function renderDefaultButton(ref) {
  const obj = { ref: ref.ref };
  const merged = Object.assign(_objectWithoutProperties(ref, closure_3));
  obj.icon = _modDef8181;
  obj.variant = "secondary";
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t.CAgr1w);
  const intl2 = util.intl;
  obj.accessibilityHint = intl2.string(util.t.hd0b7t);
  return jsx(IconButton.IconButton, { ref: ref.ref });
}
let closure_3 = ["ref"];
const LinkingTypes = fn(1074).LinkingTypes;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestContextMenu.tsx");

export default noop.memo((children) => {
  children = children.children;
  if (children === undefined) {
    children = stateFromStores;
  }
  const quest = children.quest;
  let flag = children.showShareLink;
  if (flag === undefined) {
    flag = false;
  }
  let additionalItems = children.additionalItems;
  if (additionalItems === undefined) {
    additionalItems = [];
  }
  const sourceQuestContent = children.sourceQuestContent;
  flag = undefined;
  let action;
  let callback1;
  let callback2;
  let callback3;
  let callback4;
  let memo;
  let memo1;
  let memo2;
  let shouldShowQuestPreviewOverrides;
  let memo3;
  const questPreviewActions = quest(sourceQuestContent[8]).useQuestPreviewActions(quest.id);
  const handleComplete = questPreviewActions.handleComplete;
  const handleProgress = questPreviewActions.handleProgress;
  const handleResetDismissibilityClick = questPreviewActions.handleResetDismissibilityClick;
  const handleResetStatusClick = questPreviewActions.handleResetStatusClick;
  const handleOverridePreviewClick = questPreviewActions.handleOverridePreviewClick;
  const handleResetHasBeenSeenClick = questPreviewActions.handleResetHasBeenSeenClick;
  let obj = quest(sourceQuestContent[8]);
  let items = [handleResetStatusClick];
  stateFromStores = quest(sourceQuestContent[9]).useStateFromStores(items, () => handleResetStatusClick.getQuestPreviewOverride(quest(sourceQuestContent[10]).QuestContent.QUEST_BAR_MOBILE), []);
  let obj2 = quest(sourceQuestContent[9]);
  const trackQuestContentClickedWithImpression = quest(sourceQuestContent[11]).useTrackQuestContentClickedWithImpression();
  let obj3 = quest(sourceQuestContent[11]);
  const questImpressionId = quest(sourceQuestContent[12]).useQuestImpressionId();
  const obj4 = quest(sourceQuestContent[12]);
  const externalCtaLabel = quest(sourceQuestContent[13]).getExternalCtaLabel(quest);
  if (flag) {
    flag = tmp(tmp2[14]).isShareableQuest(quest.config);
    let tmpResult = tmp(tmp2[14]);
  }
  let items1 = [quest, questImpressionId, sourceQuestContent];
  action = handleResetDismissibilityClick.useCallback(() => {
    let isIOSResult = PlatformUtils.isIOS();
    if (isIOSResult) {
      const tmp5 = parseURLDefault;
      isIOSResult = tmp5(tmp(11556).getCtaLink(quest.config)).payload.type === LinkingTypes.INVITE;
      const tmpResult = tmp(11556);
    }
    if (isIOSResult) {
      const result = tmp(12018).dismissOverlayScreens();
      const tmpResult3 = tmp(12018);
    }
    const tmpResult4 = QuestPlatformUtils;
    tmpResult4.openGameLinkDirectly(quest, { content: QuestTypes.QuestContent.QUEST_HOME_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_OPEN_GAME_LINK, impressionId: questImpressionId, sourceQuestContent });
  }, items1);
  let items2 = [flag, quest.id, questImpressionId, sourceQuestContent];
  callback1 = handleResetDismissibilityClick.useCallback(() => {
    if (flag) {
      const obj2 = { content: QuestTypes.QuestContent.QUEST_HOME_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_COPY_LINK, impressionId: questImpressionId, sourceQuestContent };
      QuestCopyUtils.copyShareLink(quest.id, obj2);
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      const intl = util.intl;
      AccessibilityAnnouncer.announce(intl.string(util.t["+5kSoW"]));
    }
  }, items2);
  let items3 = [quest, sourceQuestContent];
  callback2 = handleResetDismissibilityClick.useCallback(() => {
    const obj2 = { creative: null, isTargetedDisclosure: false, trackingCtx: null };
    const obj = QuestDisclosureModalActionCreatorsDefault;
    obj2.creative = { type: AdCreativeType.AdCreativeType.QUEST, quest };
    const obj3 = { type: AdCreativeType.AdCreativeType.QUEST, quest };
    obj2.trackingCtx = { content: QuestTypes.QuestContent.QUEST_HOME_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_OPEN_DISCLOSURE, sourceQuestContent };
    obj.showModal(obj2);
  }, items3);
  const items4 = [quest.id];
  callback3 = handleResetDismissibilityClick.useCallback(() => QuestActionCreators.manuallyStartConsoleQuest(quest.id, true), items4);
  const items5 = [quest.id];
  callback4 = handleResetDismissibilityClick.useCallback(() => QuestActionCreators.manualStopConsoleQuest(quest.id), items5);
  const items6 = [externalCtaLabel, action, callback2, flag, callback1];
  memo = handleResetDismissibilityClick.useMemo(() => {
    const items = [{ label: externalCtaLabel, IconComponent: LinkExternalSmallIcon.LinkExternalSmallIcon, action, accessibilityRole: "link" }, ];
    const obj2 = { label: null, action: null, iconSource: null };
    const intl = util.intl;
    obj2.label = intl.string(util.t.GcsZKJ);
    obj2.action = callback2;
    obj2.iconSource = _modDef15413;
    items[1] = obj2;
    if (flag) {
      const obj3 = { label: null, IconComponent: null, action: null };
      const intl2 = tmp(1115).intl;
      obj3.label = intl2.string(tmp(1115).t.WqhZss);
      obj3.IconComponent = tmp(4702).CopyIcon;
      obj3.action = callback1;
      const items1 = [obj3];
      let items2 = items1;
    } else {
      items2 = [];
    }
    HermesBuiltin.arraySpread(items2, 2);
    return items;
  }, items6);
  const items7 = [quest, callback3, callback4];
  memo1 = handleResetDismissibilityClick.useMemo(() => {
    if (obj.isConsoleQuest(quest)) {
      const obj2 = { label: "Start Console Heartbeat", action: callback3 };
      const items = [obj2, ];
      const obj3 = { label: "Stop Console Heartbeat", action: callback4 };
      items[1] = obj3;
      let items1 = items;
    } else {
      items1 = [];
    }
    return items1;
  }, items7);
  const items8 = [memo1, handleComplete, handleResetDismissibilityClick, handleProgress, handleResetStatusClick, handleResetHasBeenSeenClick, quest.id];
  memo2 = handleResetDismissibilityClick.useMemo(() => {
    const items = [
      {
        label: "Set Random Quest Progress",
        action() {
          return handleProgress(0.9 * Math.random() + 0.03);
        }
      },
      { label: "Complete Quest", action: handleComplete },
      { label: "Reset Quest", action: handleResetStatusClick },
      { label: "Reset Dismissibility", action: handleResetDismissibilityClick },
      { label: "Reset Quest Seen", action: handleResetHasBeenSeenClick },

    ];
    items[HermesBuiltin.arraySpread(memo1, 5)] = {
      label: "Copy Quest ID",
      action() {
        return quest(sourceQuestContent[28]).copy(id.id);
      }
    };
    return items;
  }, items8);
  const obj5 = quest(sourceQuestContent[13]);
  shouldShowQuestPreviewOverrides = quest(sourceQuestContent[8]).useShouldShowQuestPreviewOverrides(quest);
  const items9 = [handleOverridePreviewClick, quest.id, ];
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  items9[2] = id;
  memo3 = handleResetDismissibilityClick.useMemo(() => {
    const obj = {
      label: "Show in Quest Bar",
      action() {
        return handleOverridePreviewClick(quest(sourceQuestContent[10]).QuestContent.QUEST_BAR_MOBILE);
      },
      IconComponent: null
    };
    let id;
    if (stateFromStores != null) {
      id = stateFromStores.id;
    }
    let CheckmarkLargeIcon;
    if (id === quest.id) {
      CheckmarkLargeIcon = CheckmarkLargeIcon2.CheckmarkLargeIcon;
    }
    obj.IconComponent = CheckmarkLargeIcon;
    return obj;
  }, items9);
  const items10 = [memo, memo2, quest.preview, shouldShowQuestPreviewOverrides, memo3, additionalItems];
  const items11 = [quest.id, trackQuestContentClickedWithImpression, questImpressionId, sourceQuestContent];
  const items12 = obj7.useMemo(() => {
    if (null != additionalItems) {
      const items = [memo, tmp];
      let items1 = items;
    } else {
      items1 = [memo];
    }
    if (shouldShowQuestPreviewOverrides) {
      const items2 = [memo3];
      items1.push(items2);
    }
    let tmp6 = items1;
    if (quest.preview) {
      const items3 = [];
      items3[HermesBuiltin.arraySpread(items1, 0)] = memo2;
      tmp6 = items3;
    }
    return tmp6;
  }, items10);
  const onOpen = obj7.useCallback(() => {
    if (obj.shouldMigrateToAdAnalyticsInterface(AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_context_menu")) {
      const obj2 = { type: tmp(7974).AdUserActionType.CLICK_INTERNAL, adCreativeType: tmp(5663).AdCreativeType.QUEST, adCreativeId: quest.id, questContentCTA: tmp(7962).QuestContentCTA.OPEN_CONTEXT_MENU, surfaceId: tmp(5659).QuestContent.QUEST_HOME_MOBILE, sourceQuestContent, impressionId: questImpressionId };
      tmp(7964).captureAdUserAction(obj2);
      const tmpResult = tmp(7964);
    } else {
      const obj3 = { questId: quest.id, questContent: tmp(5659).QuestContent.QUEST_HOME_MOBILE, questContentCTA: tmp(7962).QuestContentCTA.OPEN_CONTEXT_MENU, sourceQuestContent };
      trackQuestContentClickedWithImpression(obj3);
    }
  }, items11);
  return handleResetHasBeenSeenClick(quest(sourceQuestContent[33]).ContextMenu, { items: items12, onOpen, triggerOnTap: true, children });
});
