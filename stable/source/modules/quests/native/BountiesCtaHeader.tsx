// Module ID: 15082
// Function ID: 15083
// Name: BountiesCtaHeader
// Dependencies: [19, 17, 4552, 15083, 5444, 21, 576, 4980, 4560, 504, 8308, 15055, 4975, 1114, 4556, 15068, 15084, 5451, 11525, 5447, 7718, 7728, 15005, 1178, 15085, 15086, 15081, 11779, 4271, 13400, 11783, 2]

// Module 15082 (BountiesCtaHeader)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import components_Button_Button from "components/Button/Button" /* 4975 */;
import QuestTypes from "QuestTypes" /* 5447 */;
import AdCreativeType from "AdCreativeType" /* 5451 */;
import AnalyticsActions from "AnalyticsActions" /* 7718 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7728 */;
import common_Video from "common/Video" /* 8308 */;
import BountiesModalActionCreatorsDefault from "BountiesModalActionCreators" /* 15005 */;
import _modDef15055 from "module_15055" /* 15055 */;
import openBountiesNuxPromoSheetDefault from "openBountiesNuxPromoSheet" /* 15068 */;
import BountiesBannerBackgroundDefault from "BountiesBannerBackground" /* 15085 */;
import _modDef15086 from "module_15086" /* 15086 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;
import AdContentSeenStore from "AdContentSeenStore" /* 15083 */;

const require = globalThis.__r;

require = fn;
function StarfieldBackground() {
  const items = [AccessibilityStore];
  const stateFromStores = initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const obj2 = { source: null, style: null, resizeMode: "cover", muted: true, disableFocus: true, paused: null, importantForAccessibility: "no-hide-descendants" };
  obj2.source = { uri: _modDef15055 };
  obj2.style = absoluteFillObject.absoluteFillObject;
  obj2.paused = stateFromStores;
  return closure_1_11(common_Video.VideoComponent, obj2);
}
function StartEarningOrbsButton(arg0) {
  ({ variant, onPress } = arg0);
  const obj = { grow: true, size: "md", variant, text: null, onPress: null };
  const intl = util.intl;
  obj.text = intl.string(util.t["1kkbKw"]);
  obj.onPress = onPress;
  return closure_1_11(components_Button_Button.Button, obj);
}
function BountiesCtaDescription(arg0) {
  ({ isEmptyOrCompleted, inlineLearnMore } = arg0);
  if (inlineLearnMore === undefined) {
    inlineLearnMore = false;
  }
  const t = util.t;
  if (isEmptyOrCompleted) {
    let AZGGo1 = t.q4wlOE;
    let tmp5 = tmp2;
  } else {
    AZGGo1 = t.AZGGo1;
    tmp5 = tmp2;
  }
  let str = "text-subtle";
  if (inlineLearnMore) {
    str = "text-default";
  }
  const obj = { variant: "text-sm/medium", color: str, children: null };
  const intl = tmp5(1114).intl;
  obj.children = intl.string(AZGGo1);
  const tmp7 = closure_1_11(tmp5(4556).Text, obj);
  const intl2 = tmp5(1114).intl;
  const tmp = closure_17();
  const tmp6 = closure_1_11;
  const formatResult = intl2.format(tmp5(1114).t.fjSvsC, { onClick: openBountiesNuxPromoSheetDefault });
  if (!isEmptyOrCompleted) {
    if (!inlineLearnMore) {
      const obj3 = { style: tmp.description, children: null };
      const items = [tmp7, ];
      const obj4 = { variant: "text-sm/medium", children: formatResult };
      items[1] = tmp6(tmp5(4556).Text, obj4);
      obj3.children = items;
      let tmp11 = closure_1_12(hasOwnProperty, obj3);
    }
    return tmp11;
  }
  const obj5 = { variant: "text-sm/medium", children: null };
  const items1 = [tmp7, " ", formatResult];
  obj5.children = items1;
  tmp11 = closure_1_12(tmp5(4556).Text, obj5);
}
function BountiesCtaHeaderInner(bounties) {
  bounties = bounties.bounties;
  let flag = bounties.isEmptyOrCompleted;
  if (flag === undefined) {
    flag = false;
  }
  ({ footer, replaceHeaderMediaWith, shopCarouselButtonVariant, containerRef } = bounties);
  if (shopCarouselButtonVariant === undefined) {
    shopCarouselButtonVariant = "default";
  }
  const tmp = closure_17();
  let tmp10Result2 = null != footer;
  let tmp12Result8 = !flag;
  const bountiesEntryPointButtonVariant = bounties(15084).getBountiesEntryPointButtonVariant(shopCarouselButtonVariant);
  let obj = bounties(15084);
  const items = [AdContentSeenStore];
  const items1 = [bounties];
  const stateFromStores = bounties(504).useStateFromStores(items, () => bounties.some((id) => !closure_1_7.hasSeen(bounties(closure_1_2[17]).AdCreativeType.BOUNTY, id.id)), items1);
  let obj2 = bounties(504);
  const QuestContent = bounties(5447).QuestContent;
  const tmp8 = bounties(11525).useBountiesExperience(constants2.QUEST_HOME_MOBILE).verticalScrollEnabled ? QuestContent.VIDEO_MODAL_MOBILE : QuestContent.QUEST_HOME_MOBILE_CAROUSEL;
  importDefault = tmp8;
  const items2 = [bounties, tmp8];
  const callback = noop.useCallback(() => {
    const obj = AnalyticsActions;
    const result = obj.trackAdContentClicked({ adContentId, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, questContent: QuestTypes.QuestContent.QUEST_HOME_ENTRYPOINT_MOBILE, questContentCTA: AnalyticsTypes.QuestContentCTA.START_BOUNTY, sourceQuestContent: QuestTypes.QuestContent.QUEST_HOME_ENTRYPOINT_MOBILE, questContentPosition: 0 });
    const obj2 = { adContentId, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, questContent: QuestTypes.QuestContent.QUEST_HOME_ENTRYPOINT_MOBILE, questContentCTA: AnalyticsTypes.QuestContentCTA.START_BOUNTY, sourceQuestContent: QuestTypes.QuestContent.QUEST_HOME_ENTRYPOINT_MOBILE, questContentPosition: 0 };
    BountiesModalActionCreatorsDefault.showModal({ bountyId: bounties[0].id, sourceQuestContent });
  }, items2);
  const obj4 = { ref: containerRef, style: tmp.container, children: null };
  const items3 = [tmp.bannerClip, ];
  let headerRoundedBottom = tmp13;
  if (!tmp10Result2) {
    headerRoundedBottom = tmp.headerRoundedBottom;
  }
  const obj5 = { style: items3, children: null };
  items3[1] = headerRoundedBottom;
  if (null != replaceHeaderMediaWith) {
    const items4 = [tmp.headerReplaceMedia, ];
    let headerRoundedBottom3 = tmp13;
    if (!tmp10Result2) {
      headerRoundedBottom3 = tmp.headerRoundedBottom;
    }
    const obj7 = { style: null, children: null };
    items4[1] = headerRoundedBottom3;
    obj7.style = items4;
    const items5 = [tmp12(StarfieldBackground, {}), , , ];
    const obj8 = { style: tmp.headerTitleSection, children: null };
    const obj9 = { style: tmp.headerHeadingGroup, children: null };
    let tmp12Result = stateFromStores;
    if (stateFromStores) {
      ({ newPillInline: obj14.containerStyle, newPillText: obj14.textStyle } = tmp);
      tmp12Result = tmp12(tmp4(1178).NewTag, { variant: "text-xs/bold", containerStyle: null, textStyle: null });
      const obj10 = { variant: "text-xs/bold", containerStyle: null, textStyle: null };
    }
    const items6 = [tmp12Result, ];
    const obj11 = { style: tmp.headerHeadingContent, children: null };
    const obj12 = { variant: "text-lg/semibold", color: "text-strong", children: null };
    const intl2 = tmp4(1114).intl;
    obj12.children = intl2.string(tmp4(1114).t.qetVDw);
    const items7 = [tmp12(tmp4(4556).Text, obj12), ];
    const obj13 = { isEmptyOrCompleted: flag, inlineLearnMore: true };
    items7[1] = tmp12(BountiesCtaDescription, obj13);
    obj11.children = items7;
    items6[1] = tmp10(tmp11, obj11);
    obj9.children = items6;
    obj8.children = tmp10(tmp11, obj9);
    items5[1] = tmp12(tmp11, obj8);
    items5[2] = replaceHeaderMediaWith;
    let tmp12Result5 = tmp12Result8;
    if (!flag) {
      tmp12Result5 = tmp13;
    }
    if (tmp12Result5) {
      const obj15 = { style: tmp.headerReplaceMediaCta, children: null };
      const obj16 = { variant: bountiesEntryPointButtonVariant, onPress: callback };
      obj15.children = tmp12(StartEarningOrbsButton, obj16);
      tmp12Result5 = tmp12(tmp11, obj15);
    }
    items5[3] = tmp12Result5;
    obj7.children = items5;
    let tmp10Result = tmp10(tmp11, obj7);
  } else {
    const obj17 = { uri: _modDef15086, style: null, children: null };
    const items8 = [tmp.header, , ];
    let headerWithFooter = tmp10Result2;
    if (tmp10Result2) {
      headerWithFooter = tmp.headerWithFooter;
    }
    items8[1] = headerWithFooter;
    let headerRoundedBottom2 = tmp13;
    if (!tmp10Result2) {
      headerRoundedBottom2 = tmp.headerRoundedBottom;
    }
    items8[2] = headerRoundedBottom2;
    obj17.style = items8;
    let tmp12Result6 = stateFromStores;
    if (stateFromStores) {
      ({ newPill: obj6.containerStyle, newPillText: obj6.textStyle } = tmp);
      tmp12Result6 = tmp12(tmp4(1178).NewTag, { variant: "text-xs/bold", containerStyle: null, textStyle: null });
      const obj18 = { variant: "text-xs/bold", containerStyle: null, textStyle: null };
    }
    const items9 = [tmp12Result6, ];
    const items10 = [tmp.headerTextBox, ];
    let headerTextBoxWithFooter = tmp10Result2;
    if (tmp10Result2) {
      headerTextBoxWithFooter = tmp.headerTextBoxWithFooter;
    }
    const obj19 = { style: null, children: null };
    items10[1] = headerTextBoxWithFooter;
    obj19.style = items10;
    const obj20 = { variant: "text-lg/semibold", color: "text-strong", children: null };
    const intl = tmp4(1114).intl;
    obj20.children = intl.string(tmp4(1114).t.qetVDw);
    const items11 = [tmp12(tmp4(4556).Text, obj20), , ];
    const obj21 = { isEmptyOrCompleted: flag };
    items11[1] = tmp12(BountiesCtaDescription, obj21);
    let tmp12Result7 = tmp12Result8;
    if (!flag) {
      tmp12Result7 = tmp13;
    }
    if (tmp12Result7) {
      const obj22 = { variant: bountiesEntryPointButtonVariant, onPress: callback };
      tmp12Result7 = tmp12(StartEarningOrbsButton, obj22);
    }
    items11[2] = tmp12Result7;
    obj19.children = items11;
    items9[1] = tmp10(tmp11, obj19);
    obj17.children = items9;
    tmp10Result = tmp10(BountiesBannerBackgroundDefault, obj17);
  }
  obj5.children = tmp10Result;
  const items12 = [closure_11(closure_5, obj5), ];
  if (tmp10Result2) {
    const obj23 = { style: tmp.footerClip, children: null };
    const items13 = [tmp12(StarfieldBackground, {}), footer, ];
    if (!flag) {
      const obj43 = { style: tmp.footerCta, children: null };
      const obj44 = { variant: bountiesEntryPointButtonVariant, onPress: callback };
      obj43.children = tmp12(StartEarningOrbsButton, obj44);
      tmp12Result8 = tmp12(tmp11, obj43);
    }
    items13[2] = tmp12Result8;
    obj23.children = items13;
    tmp10Result2 = tmp10(tmp11, obj23);
  }
  items12[1] = tmp10Result2;
  obj4.children = items12;
  return closure_12(closure_5, obj4);
}
get_ActivityIndicator = fn(17);
({ StyleSheet: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const QuestConstants = fn(5444);
({ BountyCarouselEmptyStateReason: closure_8, DEFAULT_PLACEHOLDER_ENTRYPOINT_BOUNTY_ID: closure_9, QuestsExperimentLocations: c10 } = QuestConstants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const PX_16 = nativeDefault.space.PX_16;
const PX_20 = nativeDefault.space.PX_20;
const sum = 26 + nativeDefault.space.PX_8 + PX_16;
const minHeight = 472 - (sum + fn(4980).MEDIUM_BUTTON_HEIGHT + PX_20 + 170);
const createStyles = fn(4560);
let closure_17 = createStyles.createStyles(() => {
  const obj = { container: { width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderLeftWidth: 1, borderRightWidth: 1, borderBottomWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED, borderBottomLeftRadius: nativeDefault.radii.xxl, borderBottomRightRadius: nativeDefault.radii.xxl, overflow: "hidden" }, bannerClip: { overflow: "hidden" }, footerClip: null, header: null, headerWithFooter: null, headerReplaceMedia: null, headerTitleSection: null, headerHeadingGroup: null, headerHeadingContent: null, headerReplaceMediaCta: null, headerRoundedBottom: null, newPill: null, newPillInline: null, newPillText: null, headerTextBox: null, headerTextBoxWithFooter: null, description: null, footerCta: null };
  const obj2 = { width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderLeftWidth: 1, borderRightWidth: 1, borderBottomWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED, borderBottomLeftRadius: nativeDefault.radii.xxl, borderBottomRightRadius: nativeDefault.radii.xxl, overflow: "hidden" };
  obj.footerClip = { overflow: "hidden", borderBottomLeftRadius: nativeDefault.radii.xxl, borderBottomRightRadius: nativeDefault.radii.xxl };
  const obj3 = { overflow: "hidden", borderBottomLeftRadius: nativeDefault.radii.xxl, borderBottomRightRadius: nativeDefault.radii.xxl };
  obj.header = { width: "100%", minHeight: 296, justifyContent: "flex-end", overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
  obj.headerWithFooter = { minHeight };
  obj.headerReplaceMedia = { width: "100%", overflow: "hidden" };
  const obj4 = { width: "100%", minHeight: 296, justifyContent: "flex-end", overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
  const obj5 = { minHeight };
  obj.headerTitleSection = { paddingTop: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_20 };
  const obj6 = { paddingTop: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_20 };
  obj.headerHeadingGroup = { gap: nativeDefault.space.PX_24 };
  const obj7 = { gap: nativeDefault.space.PX_24 };
  obj.headerHeadingContent = { gap: nativeDefault.space.PX_4 };
  obj.headerReplaceMediaCta = { paddingTop: PX_16, paddingBottom: PX_20, paddingHorizontal: PX_20 };
  const obj8 = { gap: nativeDefault.space.PX_4 };
  const obj9 = { paddingTop: PX_16, paddingBottom: PX_20, paddingHorizontal: PX_20 };
  obj.headerRoundedBottom = { borderBottomLeftRadius: nativeDefault.radii.xxl, borderBottomRightRadius: nativeDefault.radii.xxl };
  const rect = { position: "absolute", top: nativeDefault.space.PX_20, left: nativeDefault.space.PX_20, zIndex: 1, backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_PRIMARY_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.round, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: 2 };
  obj.newPill = rect;
  const obj10 = { borderBottomLeftRadius: nativeDefault.radii.xxl, borderBottomRightRadius: nativeDefault.radii.xxl };
  obj.newPillInline = { alignSelf: "flex-start", backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_PRIMARY_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.round, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: 2 };
  const obj11 = { alignSelf: "flex-start", backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_PRIMARY_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.round, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: 2 };
  obj.newPillText = { color: nativeDefault.colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT };
  const obj12 = { color: nativeDefault.colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT };
  obj.headerTextBox = { paddingBottom: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_20, gap: nativeDefault.space.PX_8 };
  const obj13 = { paddingBottom: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_20, gap: nativeDefault.space.PX_8 };
  obj.headerTextBoxWithFooter = { paddingBottom: nativeDefault.space.PX_12 };
  obj.description = { marginBottom: 16 };
  const obj14 = { paddingBottom: nativeDefault.space.PX_12 };
  obj.footerCta = { paddingTop: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_20, paddingHorizontal: nativeDefault.space.PX_20 };
  return obj;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/BountiesCtaHeader.tsx");

export default noop.memo(function BountiesCtaHeader(isEmptyOrCompleted) {
  _require = isEmptyOrCompleted;
  const tmp2 = containerRef(15081)();
  containerRef = tmp2.containerRef;
  isEmptyOrCompleted = isEmptyOrCompleted.isEmptyOrCompleted;
  let tmp3 = undefined !== isEmptyOrCompleted;
  if (tmp3) {
    tmp3 = isEmptyOrCompleted;
  }
  if (!tmp3) {
    const bountyCarouselEmptyStateAnalytics = require("AnalyticsHooks").useBountyCarouselEmptyStateAnalytics(null);
    const obj2 = { theme: require("shared/ThemeTypes").ThemeTypes.DARKER, children: null };
    if (tmp3) {
      const obj3 = {};
      let merged = Object.assign(isEmptyOrCompleted);
      obj3.containerRef = containerRef;
      let tmp9Result = tmp9(BountiesCtaHeaderInner, obj3);
    } else {
      const obj4 = {
        adContentId,
        adCreativeType: tmp7(5451).AdCreativeType.BOUNTY,
        questContent: tmp7(5447).QuestContent.QUEST_HOME_ENTRYPOINT_MOBILE,
        questContentPosition: 0,
        overrideVisibility: tmp2.isInView,
        sourceQuestContent: tmp7(5447).QuestContent.QUEST_HOME_ENTRYPOINT_MOBILE,
        children() {
              const obj = {};
              const merged = Object.assign(closure_0);
              obj.containerRef = containerRef;
              return closure_2_11(BountiesCtaHeaderInner, obj);
            }
      };
      tmp9Result = tmp9(tmp7(11783).QuestContentImpressionTrackerNative, obj4);
    }
    obj2.children = tmp9Result;
    return closure_11(require("native").ThemeContextProvider, obj2);
  } else if (0 === isEmptyOrCompleted.bounties.length) {
    let COMPLETED = constants.EMPTY;
  } else {
    COMPLETED = constants.COMPLETED;
  }
});
