// Module ID: 15133
// Function ID: 15134
// Name: QuestDockContextMenuActionSheet
// Dependencies: [5, 19, 1074, 21, 15132, 5465, 11327, 1114, 5461, 7742, 11224, 11225, 11229, 7732, 7213, 9110, 8626, 11528, 4541, 7211, 7736, 15134, 11798, 5694, 11308, 15136, 11556, 11515, 8750, 15137, 15139, 15141, 6984, 7396, 4521, 7203, 11137, 15143, 2]
// Exports: default

// Module 15133 (QuestDockContextMenuActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4541 */;
import QuestTypes from "QuestTypes" /* 5461 */;
import AdCreativeType from "AdCreativeType" /* 5465 */;
import ClipboardUtils from "ClipboardUtils" /* 7203 */;
import openUserSettings from "openUserSettings" /* 7396 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7742 */;
import AdAnalyticsInterfaceExperiment from "AdAnalyticsInterfaceExperiment" /* 11224 */;
import QuestActionCreators from "QuestActionCreators" /* 11308 */;
import QuestCopyUtils from "QuestCopyUtils" /* 11327 */;
import QuestDisclosureModalActionCreatorsDefault from "QuestDisclosureModalActionCreators" /* 15143 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
function QuestDockPreviewTools(quest) {
  quest = quest.quest;
  c1 = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  c4 = undefined;
  const questPreviewActions = quest(11515).useQuestPreviewActions(quest.id);
  ({ handleComplete: c1, handleProgress: c2, handleResetDismissibilityClick: c3, handleResetStatusClick: c4 } = questPreviewActions);
  let obj2 = { title: null, hasIcons: true, children: null };
  const intl = quest(1114).intl;
  obj2.title = intl.string(quest(1114).t["Ape+mm"]);
  let obj3 = { icon: null, label: null, onPress: null };
  let obj = quest(11515);
  obj3.icon = closure_5(quest(7213).ActionSheetRow.Icon, { IconComponent: quest(8750).TrophyIcon });
  const obj5 = { text: null };
  const intl2 = quest(1114).intl;
  obj5.text = intl2.string(quest(1114).t.jQEfRT);
  obj3.label = closure_5(quest(8626).FormLabel, obj5);
  obj3.onPress = function onPress() {
    _undefined();
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  let items = [closure_5(quest(7213).ActionSheetRow, obj3), , , , , , ];
  const obj6 = { icon: null, label: null, onPress: null };
  const obj4 = { IconComponent: quest(8750).TrophyIcon };
  obj6.icon = closure_5(quest(7213).ActionSheetRow.Icon, { IconComponent: quest(15137).RedoIcon });
  const obj8 = { text: null };
  const intl3 = quest(1114).intl;
  obj8.text = intl3.string(quest(1114).t.cKSLr4);
  obj6.label = closure_5(quest(8626).FormLabel, obj8);
  obj6.onPress = function onPress() {
    _undefined2(0.9 * Math.random() + 0.03);
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  items[1] = closure_5(quest(7213).ActionSheetRow, obj6);
  const obj9 = { icon: null, label: null, onPress: null };
  const obj7 = { IconComponent: quest(15137).RedoIcon };
  obj9.icon = closure_5(quest(7213).ActionSheetRow.Icon, { IconComponent: quest(15139).UndoIcon });
  const obj11 = { text: null };
  const intl4 = quest(1114).intl;
  obj11.text = intl4.string(quest(1114).t.taqkwK);
  obj9.label = closure_5(quest(8626).FormLabel, obj11);
  obj9.onPress = function onPress() {
    _undefined4();
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  items[2] = closure_5(quest(7213).ActionSheetRow, obj9);
  const obj12 = { icon: null, label: null, onPress: null };
  const obj10 = { IconComponent: quest(15139).UndoIcon };
  obj12.icon = closure_5(quest(7213).ActionSheetRow.Icon, { IconComponent: quest(15141).UnsendIcon });
  const obj14 = { text: null };
  const intl5 = quest(1114).intl;
  obj14.text = intl5.string(quest(1114).t.JF6W66);
  obj12.label = closure_5(quest(8626).FormLabel, obj14);
  obj12.onPress = function onPress() {
    _undefined3();
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  items[3] = closure_5(quest(7213).ActionSheetRow, obj12);
  const obj15 = { icon: null, label: null, onPress: null };
  const obj13 = { IconComponent: quest(15141).UnsendIcon };
  obj15.icon = closure_5(quest(7213).ActionSheetRow.Icon, { IconComponent: quest(6984).EyeIcon });
  const obj17 = { text: null };
  const intl6 = quest(1114).intl;
  obj17.text = intl6.string(quest(1114).t["lL6/zF"]);
  obj15.label = closure_5(quest(8626).FormLabel, obj17);
  obj15.onPress = function onPress() {
    const items = [quest.id];
    QuestActionCreators.markAdContentUnseen(AdCreativeType.AdCreativeType.QUEST, items);
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  items[4] = closure_5(quest(7213).ActionSheetRow, obj15);
  const obj18 = { icon: null, label: null, onPress: null };
  const obj16 = { IconComponent: quest(6984).EyeIcon };
  obj18.icon = closure_5(quest(7213).ActionSheetRow.Icon, { IconComponent: quest(6984).EyeIcon });
  const obj20 = { text: null };
  const intl7 = quest(1114).intl;
  obj20.text = intl7.string(quest(1114).t.tx5Ax5);
  obj18.label = closure_5(quest(8626).FormLabel, obj20);
  obj18.onPress = function onPress() {
    const obj2 = { screen: UserSettingsSections.QUEST_PREVIEW_TOOL_2, params: { questId: quest.id } };
    openUserSettings.openUserSettings(obj2);
    const obj3 = { questId: quest.id };
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  items[5] = closure_5(quest(7213).ActionSheetRow, obj18);
  const obj21 = { icon: null, label: null, onPress: null };
  const obj19 = { IconComponent: quest(6984).EyeIcon };
  obj21.icon = closure_5(quest(7213).ActionSheetRow.Icon, { IconComponent: quest(4521).CopyIcon });
  const obj23 = { text: null };
  const intl8 = quest(1114).intl;
  obj23.text = intl8.string(quest(1114).t.oisrFi);
  obj21.label = closure_5(quest(8626).FormLabel, obj23);
  obj21.onPress = function onPress() {
    ClipboardUtils.copy(quest.id);
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  items[6] = closure_5(quest(7213).ActionSheetRow, obj21);
  obj2.children = items;
  return closure_6(quest(7213).ActionSheetRow.Group, obj2);
}
function QuestDockShareRow(quest) {
  quest = quest.quest;
  let obj = { icon: closure_5(quest(7213).ActionSheetRow.Icon, { IconComponent: quest(4521).CopyIcon }), label: null, onPress: null };
  const obj3 = { text: null };
  const intl = quest(1114).intl;
  obj3.text = intl.string(quest(1114).t.WqhZss);
  obj.label = closure_5(quest(8626).FormLabel, obj3);
  obj.onPress = function onPress() {
    const obj = QuestCopyUtils;
    obj.copyShareLink(quest.id, { content: QuestTypes.QuestContent.QUEST_BAR_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_COPY_LINK, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE });
    const obj2 = { content: QuestTypes.QuestContent.QUEST_BAR_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_COPY_LINK, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE };
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  return closure_5(quest(7213).ActionSheetRow, obj);
}
function QuestDockDisclosureRow(creative) {
  creative = creative.creative;
  let obj = { icon: closure_5(creative(7213).ActionSheetRow.Icon, { IconComponent: creative(11137).CircleQuestionIcon }), label: null, onPress: null };
  let obj3 = { text: null };
  const intl = creative(1114).intl;
  obj3.text = intl.string(creative(1114).t.GcsZKJ);
  obj.label = closure_5(creative(8626).FormLabel, obj3);
  obj.onPress = function onPress() {
    const obj2 = { creative, isTargetedDisclosure: true, trackingCtx: null };
    const obj = QuestDisclosureModalActionCreatorsDefault;
    obj2.trackingCtx = { content: QuestTypes.QuestContent.QUEST_BAR_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_OPEN_DISCLOSURE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE };
    obj.showModal(obj2);
    const obj3 = { content: QuestTypes.QuestContent.QUEST_BAR_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_OPEN_DISCLOSURE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE };
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  return closure_5(creative(7213).ActionSheetRow, obj);
}
const UserSettingsSections = fn(1074).UserSettingsSections;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockContextMenuActionSheet.tsx");

export default function QuestDockContextMenuActionSheet(creative) {
  creative = creative.creative;
  let obj2;
  function trackInternalClick(CONTEXT_MENU_HIDE_CONTENT) {
    if (obj.shouldMigrateToAdAnalyticsInterface(AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_dock_context_menu")) {
      obj2 = { type: tmp(11229).AdUserActionType.CLICK_INTERNAL };
      const merged = Object.assign(adCreativeType);
      obj2.questContentCTA = CONTEXT_MENU_HIDE_CONTENT;
      obj2.surfaceId = tmp(5461).QuestContent.QUEST_BAR_MOBILE;
      obj2.sourceQuestContent = tmp(5461).QuestContent.QUEST_BAR_MOBILE;
      tmp(11225).captureAdUserAction(obj2);
      const tmpResult = tmp(11225);
    } else if (adCreativeType.adCreativeType === tmp(5465).AdCreativeType.QUEST) {
      const obj4 = { questId: tmp3.adCreativeId, questContent: tmp(5461).QuestContent.QUEST_BAR_MOBILE, questContentCTA: CONTEXT_MENU_HIDE_CONTENT, sourceQuestContent: tmp(5461).QuestContent.QUEST_BAR_MOBILE };
      const result = tmp(7732).trackQuestContentClicked(obj4);
      const tmpResult3 = tmp(7732);
    } else {
      const obj5 = { adContentId: null, adCreativeType: null, questContent: null, questContentCTA: null, sourceQuestContent: null };
      ({ adCreativeId: obj3.adContentId, adCreativeType: obj3.adCreativeType } = tmp3);
      obj5.questContent = tmp(5461).QuestContent.QUEST_BAR_MOBILE;
      obj5.questContentCTA = CONTEXT_MENU_HIDE_CONTENT;
      obj5.sourceQuestContent = tmp(5461).QuestContent.QUEST_BAR_MOBILE;
      const result1 = tmp(7732).trackAdContentClicked(obj5);
      const tmpResult4 = tmp(7732);
    }
  }
  importDefault = creative(obj2[4]).getCreativeAnalyticsParams(creative);
  let type = creative.type;
  if (creative(obj2[5]).AdCreativeType.QUEST === type) {
    let buttonLabel = tmp(tmp2[6]).getExternalCtaLabel(creative.quest);
    const intl = tmp(tmp2[7]).intl;
    let stringResult = intl.string(tmp(tmp2[7]).t.LLLLPD);
    let tmpResult = tmp(tmp2[6]);
  } else if (tmp(tmp2[5]).AdCreativeType.BOUNTY === type) {
    buttonLabel = creative.bounty.cta.buttonLabel;
    const intl4 = tmp(tmp2[7]).intl;
    stringResult = intl4.string(tmp(tmp2[7]).t.QUe9zz);
  }
  obj2 = { content: tmp(tmp2[8]).QuestContent.QUEST_BAR_MOBILE, ctaContent: tmp(tmp2[9]).QuestContentCTA.CONTEXT_MENU_OPEN_GAME_LINK, impressionId: creative.impressionId, sourceQuestContent: tmp(tmp2[8]).QuestContent.QUEST_BAR_MOBILE };
  let obj3 = { icon: null, label: null, onPress: null };
  let obj = creative(obj2[4]);
  obj3.icon = closure_5(creative(obj2[14]).ActionSheetRow.Icon, { IconComponent: creative(obj2[15]).LinkExternalMediumIcon });
  obj3.label = closure_5(creative(obj2[16]).FormLabel, { text: buttonLabel });
  obj3.onPress = function onPress() {
    const type = creative.type;
    if (AdCreativeType.AdCreativeType.QUEST === type) {
      tmp2(11528).openGameLinkDirectly(tmp.quest, obj2);
      const tmp2Result = tmp2(11528);
    } else if (tmp2(5465).AdCreativeType.BOUNTY === type) {
      const obj = { adContentId: tmp.bounty.id, adCreativeType: tmp2(5465).AdCreativeType.BOUNTY, cta: tmp.bounty.cta };
      const result = tmp2(11528).openAdGameLinkDirectly(obj, obj2);
      const tmp2Result2 = tmp2(11528);
    }
    obj2 = ActionSheetActionCreatorsDefault;
    obj2.hideActionSheet();
  };
  let obj4 = { IconComponent: creative(obj2[15]).LinkExternalMediumIcon };
  const items = [closure_5(creative(obj2[14]).ActionSheetRow, obj3), ];
  let tmp4Result = null;
  if (creative.type === creative(obj2[5]).AdCreativeType.QUEST) {
    tmp4Result = null;
    if (tmpResult2.isShareableQuest(creative.quest.config)) {
      let obj5 = { quest: creative.quest };
      tmp4Result = tmp4(QuestDockShareRow, obj5);
    }
    tmpResult2 = tmp(tmp2[20]);
  }
  items[1] = tmp4Result;
  const children = [closure_6(creative(obj2[14]).ActionSheetRow.Group, { hasIcons: true, children: items }), , ];
  let obj6 = { hasIcons: true, children: null };
  let obj7 = { icon: null, label: null, onPress: null };
  const tmp5 = closure_5(creative(obj2[14]).ActionSheetRow, obj3);
  obj7.icon = closure_5(creative(obj2[14]).ActionSheetRow.Icon, { IconComponent: require("WreathIcon") });
  obj7.label = closure_5(creative(obj2[16]).FormLabel, { text: stringResult });
  obj7.onPress = function onPress() {
    trackInternalClick(AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_LEARN_MORE);
    const type = creative.type;
    if (AdCreativeType.AdCreativeType.QUEST === type) {
      const obj = { scrollToQuestId: creative.quest.id, fromContent: tmp(5461).QuestContent.QUEST_BAR_MOBILE };
      tmp(11798).openQuestHome(obj);
      const tmpResult = tmp(11798);
    } else if (tmp(5465).AdCreativeType.BOUNTY === type) {
      obj2 = { fromContent: tmp(5461).QuestContent.QUEST_BAR_MOBILE };
      tmp(11798).openQuestHome(obj2);
      const tmpResult2 = tmp(11798);
    }
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  const items2 = [closure_5(creative(obj2[14]).ActionSheetRow, obj7), closure_5(QuestDockDisclosureRow, { creative }), ];
  let obj9 = { icon: null, label: null, subLabel: null, onPress: null };
  const obj8 = { IconComponent: require("WreathIcon") };
  obj9.icon = closure_5(creative(obj2[14]).ActionSheetRow.Icon, { IconComponent: creative(obj2[23]).XSmallIcon });
  let obj11 = { text: null };
  const intl2 = tmp(tmp2[7]).intl;
  obj11.text = intl2.string(creative(obj2[7]).t.NN79E9);
  obj9.label = closure_5(creative(obj2[16]).FormLabel, obj11);
  const intl3 = tmp(tmp2[7]).intl;
  obj9.subLabel = intl3.string(creative(obj2[7]).t.V6htN5);
  obj9.onPress = trackInternalClick(function*(arg0, value) {
    if (dependencyMap === 2) {
      dependencyMap = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        dependencyMap = 2;
        if (0 === v2) {
          if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            trackInternalClick(tmp2(7742).QuestContentCTA.CONTEXT_MENU_HIDE_CONTENT);
            const type = creative.type;
            if (tmp2(5465).AdCreativeType.QUEST === type) {
              const obj7 = tmp2(11308);
              const dismissQuestContentResult = tmp2(11308).dismissQuestContent(tmp36.quest.id, tmp2(5461).QuestContent.QUEST_BAR_MOBILE);
              v2(4541).hideActionSheet();
              v2 = 1;
              dependencyMap = 1;
              const obj9 = { value: dismissQuestContentResult, done: false };
              return obj9;
            } else if (tmp2(5465).AdCreativeType.BOUNTY === type) {
              const obj4 = tmp2(11556);
              const dismissAdContentResult = tmp2(11556).dismissAdContent(closure_1, tmp2(5461).QuestContent.QUEST_BAR_MOBILE);
              v2(4541).hideActionSheet();
              v2 = 2;
              dependencyMap = 1;
              const obj10 = { value: dismissAdContentResult, done: false };
              return obj10;
            } else {
              dependencyMap = 3;
            }
            tmp36 = creative;
          }
        } else if (1 === tmp5) {
          if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 !== 2) {
            const result = tmp2(15136).displayQuestDismissalToast();
            obj2 = tmp2(15136);
          }
        } else if (arg0 === 1) {
          dependencyMap = 3;
          throw value;
        } else if (arg0 === 2) {
          dependencyMap = 3;
          const obj = { value, done: true };
          return obj;
        }
        dependencyMap = 3;
        const obj11 = { value, done: true };
        return obj11;
      } catch (tmp27) {
        dependencyMap = tmp;
        throw tmp27;
      }
    }
  });
  items2[2] = closure_5(creative(obj2[14]).ActionSheetRow, obj9);
  obj6.children = items2;
  children[1] = closure_6(creative(obj2[14]).ActionSheetRow.Group, obj6);
  let tmp4Result2 = null;
  if (creative.type === creative(obj2[5]).AdCreativeType.QUEST) {
    tmp4Result2 = null;
    if (creative.quest.preview) {
      const obj12 = { quest: creative.quest };
      tmp4Result2 = tmp4(QuestDockPreviewTools, obj12);
    }
  }
  children[2] = tmp4Result2;
  return closure_6(creative(obj2[19]).ActionSheet, { children });
};
