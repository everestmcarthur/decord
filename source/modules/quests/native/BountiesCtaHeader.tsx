// Module ID: 15137
// Function ID: 15138
// Name: BountiesCtaHeader
// Dependencies: [19, 17, 4598, 15138, 5495, 21, 576, 5031, 4606, 504, 8393, 15108, 5026, 1114, 15109, 4602, 15125, 15139, 5502, 7790, 5498, 7800, 15057, 15059, 1178, 15140, 15141, 15136, 11867, 4317, 15118, 11871, 2]

// Module 15137 (BountiesCtaHeader)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import components_Button_Button from "components/Button/Button" /* 5026 */;
import QuestTypes from "QuestTypes" /* 5498 */;
import AdCreativeType from "AdCreativeType" /* 5502 */;
import AnalyticsActions from "AnalyticsActions" /* 7790 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7800 */;
import common_Video from "common/Video" /* 8393 */;
import BountiesModalActionCreatorsDefault from "BountiesModalActionCreators" /* 15057 */;
import BountiesModalTypes from "BountiesModalTypes" /* 15059 */;
import _modDef15108 from "module_15108" /* 15108 */;
import openBountiesNuxPromoSheetDefault from "openBountiesNuxPromoSheet" /* 15125 */;
import BountiesBannerBackgroundDefault from "BountiesBannerBackground" /* 15140 */;
import _modDef15141 from "module_15141" /* 15141 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4598 */;
import AdContentSeenStore from "AdContentSeenStore" /* 15138 */;

const require = globalThis.__r;

require = fn;
function StarfieldBackground() {
  const items = [AccessibilityStore];
  const stateFromStores = initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const obj2 = { source: null, style: null, resizeMode: "cover", muted: true, disableFocus: true, paused: null, importantForAccessibility: "no-hide-descendants" };
  obj2.source = { uri: _modDef15108 };
  obj2.style = absoluteFillObject.absoluteFillObject;
  obj2.paused = stateFromStores;
  return closure_1_10(common_Video.VideoComponent, obj2);
}
function StartEarningOrbsButton(arg0) {
  ({ variant, onPress } = arg0);
  const obj = { grow: true, size: "md", variant, text: null, onPress: null };
  const intl = util.intl;
  obj.text = intl.string(util.t["1kkbKw"]);
  obj.onPress = onPress;
  return closure_1_10(components_Button_Button.Button, obj);
}
function BountiesCtaDescription(arg0) {
  ({ isEmptyOrCompleted, inlineLearnMore } = arg0);
  if (inlineLearnMore === undefined) {
    inlineLearnMore = false;
  }
  let str = "text-subtle";
  if (inlineLearnMore) {
    str = "text-default";
  }
  const intl = util.intl;
  if (isEmptyOrCompleted) {
    let formatResult = intl.format(tmp2(1114).t.VHM37p, tmp2(15109).bountyProductNameIntlParams());
    let tmp6 = tmp2;
    const tmp2Result = tmp2(15109);
  } else {
    formatResult = intl.string(tmp2(1114).t.q3NQDg);
    tmp6 = tmp2;
  }
  const tmp8 = closure_1_10(tmp6(4602).Text, { variant: "text-sm/medium", color: str, children: formatResult });
  const intl2 = tmp6(1114).intl;
  const tmp = closure_16();
  const tmp7 = closure_1_10;
  const formatResult1 = intl2.format(tmp6(1114).t.fjSvsC, { onClick: openBountiesNuxPromoSheetDefault });
  if (!isEmptyOrCompleted) {
    if (!inlineLearnMore) {
      const obj2 = { style: tmp.description, children: null };
      const items = [tmp8, ];
      const obj3 = { variant: "text-sm/medium", children: formatResult1 };
      items[1] = tmp7(tmp6(4602).Text, obj3);
      obj2.children = items;
      let tmp12 = closure_1_11(hasOwnProperty, obj2);
    }
    return tmp12;
  }
  const obj4 = { variant: "text-sm/medium", children: null };
  const items1 = [tmp8, " ", formatResult1];
  obj4.children = items1;
  tmp12 = closure_1_11(tmp6(4602).Text, obj4);
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
  const tmp = closure_16();
  let tmp9Result2 = null != footer;
  let tmp11Result6 = !flag;
  const bountiesEntryPointButtonVariant = bounties(15139).getBountiesEntryPointButtonVariant(shopCarouselButtonVariant);
  let obj = bounties(15139);
  const items = [AdContentSeenStore];
  const items1 = [bounties];
  let stateFromStores = bounties(504).useStateFromStores(items, () => bounties.some((id) => !closure_1_7.hasSeen(bounties(closure_1_2[18]).AdCreativeType.BOUNTY, id.id)), items1);
  const items2 = [bounties];
  const callback = noop.useCallback(() => {
    const obj = AnalyticsActions;
    const result = obj.trackAdContentClicked({ adContentId, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, questContent: QuestTypes.QuestContent.QUEST_HOME_ENTRYPOINT_MOBILE, questContentCTA: AnalyticsTypes.QuestContentCTA.START_BOUNTY, sourceQuestContent: QuestTypes.QuestContent.QUEST_HOME_ENTRYPOINT_MOBILE, questContentPosition: 0 });
    const obj2 = { adContentId, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, questContent: QuestTypes.QuestContent.QUEST_HOME_ENTRYPOINT_MOBILE, questContentCTA: AnalyticsTypes.QuestContentCTA.START_BOUNTY, sourceQuestContent: QuestTypes.QuestContent.QUEST_HOME_ENTRYPOINT_MOBILE, questContentPosition: 0 };
    const obj3 = BountiesModalActionCreatorsDefault;
    obj3.showModal({ bountyId: bounties[0].id, sourceQuestContent: QuestTypes.QuestContent.VIDEO_MODAL_MOBILE, variant: BountiesModalTypes.BountiesModalVariant.VERTICAL_SCROLL });
  }, items2);
  let obj3 = { ref: containerRef, style: tmp.container, children: null };
  const items3 = [tmp.bannerClip, ];
  let headerRoundedBottom = tmp12;
  if (!tmp9Result2) {
    headerRoundedBottom = tmp.headerRoundedBottom;
  }
  const obj4 = { style: items3, children: null };
  items3[1] = headerRoundedBottom;
  if (null != replaceHeaderMediaWith) {
    const items4 = [tmp.headerReplaceMedia, ];
    let headerRoundedBottom3 = tmp12;
    if (!tmp9Result2) {
      headerRoundedBottom3 = tmp.headerRoundedBottom;
    }
    const obj6 = { style: null, children: null };
    items4[1] = headerRoundedBottom3;
    obj6.style = items4;
    const items5 = [tmp11(StarfieldBackground, {}), , , ];
    const obj7 = { style: tmp.headerTitleSection, children: null };
    const obj8 = { style: tmp.headerHeadingGroup, children: null };
    if (stateFromStores) {
      ({ newPillInline: obj12.containerStyle, newPillText: obj12.textStyle } = tmp);
      stateFromStores = tmp11(tmp4(1178).NewTag, { variant: "text-xs/bold", containerStyle: null, textStyle: null });
      const obj9 = { variant: "text-xs/bold", containerStyle: null, textStyle: null };
    }
    const items6 = [stateFromStores, ];
    const obj10 = { style: tmp.headerHeadingContent, children: null };
    const obj11 = { isEmptyOrCompleted: flag, inlineLearnMore: true };
    obj10.children = tmp11(BountiesCtaDescription, obj11);
    items6[1] = tmp11(tmp10, obj10);
    obj8.children = items6;
    obj7.children = tmp9(tmp10, obj8);
    items5[1] = tmp11(tmp10, obj7);
    items5[2] = replaceHeaderMediaWith;
    let tmp11Result = tmp11Result6;
    if (!flag) {
      tmp11Result = tmp12;
    }
    if (tmp11Result) {
      const obj13 = { style: tmp.headerReplaceMediaCta, children: null };
      const obj14 = { variant: bountiesEntryPointButtonVariant, onPress: callback };
      obj13.children = tmp11(StartEarningOrbsButton, obj14);
      tmp11Result = tmp11(tmp10, obj13);
    }
    items5[3] = tmp11Result;
    obj6.children = items5;
    let tmp9Result = tmp9(tmp10, obj6);
  } else {
    const obj15 = { uri: _modDef15141, style: null, children: null };
    const items7 = [tmp.header, , ];
    let headerWithFooter = tmp9Result2;
    if (tmp9Result2) {
      headerWithFooter = tmp.headerWithFooter;
    }
    items7[1] = headerWithFooter;
    let headerRoundedBottom2 = tmp12;
    if (!tmp9Result2) {
      headerRoundedBottom2 = tmp.headerRoundedBottom;
    }
    items7[2] = headerRoundedBottom2;
    obj15.style = items7;
    let tmp11Result4 = stateFromStores;
    if (stateFromStores) {
      ({ newPill: obj5.containerStyle, newPillText: obj5.textStyle } = tmp);
      tmp11Result4 = tmp11(tmp4(1178).NewTag, { variant: "text-xs/bold", containerStyle: null, textStyle: null });
      const obj16 = { variant: "text-xs/bold", containerStyle: null, textStyle: null };
    }
    const items8 = [tmp11Result4, ];
    const items9 = [tmp.headerTextBox, ];
    let headerTextBoxWithFooter = tmp9Result2;
    if (tmp9Result2) {
      headerTextBoxWithFooter = tmp.headerTextBoxWithFooter;
    }
    const obj17 = { style: null, children: null };
    items9[1] = headerTextBoxWithFooter;
    obj17.style = items9;
    const obj18 = { isEmptyOrCompleted: flag };
    const items10 = [tmp11(BountiesCtaDescription, obj18), ];
    let tmp11Result5 = tmp11Result6;
    if (!flag) {
      tmp11Result5 = tmp12;
    }
    if (tmp11Result5) {
      const obj19 = { variant: bountiesEntryPointButtonVariant, onPress: callback };
      tmp11Result5 = tmp11(StartEarningOrbsButton, obj19);
    }
    items10[1] = tmp11Result5;
    obj17.children = items10;
    items8[1] = tmp9(tmp10, obj17);
    obj15.children = items8;
    tmp9Result = tmp9(BountiesBannerBackgroundDefault, obj15);
  }
  obj4.children = tmp9Result;
  const items11 = [closure_10(closure_5, obj4), ];
  if (tmp9Result2) {
    const obj20 = { style: tmp.footerClip, children: null };
    const items12 = [tmp11(StarfieldBackground, {}), footer, ];
    if (!flag) {
      const obj38 = { style: tmp.footerCta, children: null };
      const obj39 = { variant: bountiesEntryPointButtonVariant, onPress: callback };
      obj38.children = tmp11(StartEarningOrbsButton, obj39);
      tmp11Result6 = tmp11(tmp10, obj38);
    }
    items12[2] = tmp11Result6;
    obj20.children = items12;
    tmp9Result2 = tmp9(tmp10, obj20);
  }
  items11[1] = tmp9Result2;
  obj3.children = items11;
  return closure_11(closure_5, obj3);
}
get_ActivityIndicator = fn(17);
({ StyleSheet: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const QuestConstants = fn(5495);
({ BountyCarouselEmptyStateReason: closure_8, DEFAULT_PLACEHOLDER_ENTRYPOINT_BOUNTY_ID: closure_9 } = QuestConstants);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const PX_16 = nativeDefault.space.PX_16;
const PX_20 = nativeDefault.space.PX_20;
const sum = 26 + nativeDefault.space.PX_8 + PX_16;
const minHeight = 472 - (sum + fn(5031).MEDIUM_BUTTON_HEIGHT + PX_20 + 170);
const createStyles = fn(4606);
let closure_16 = createStyles.createStyles(() => {
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
  const tmp2 = containerRef(15136)();
  containerRef = tmp2.containerRef;
  isEmptyOrCompleted = isEmptyOrCompleted.isEmptyOrCompleted;
  let tmp3 = undefined !== isEmptyOrCompleted;
  if (tmp3) {
    tmp3 = isEmptyOrCompleted;
  }
  if (!tmp3) {
    const bountyCarouselEmptyStateAnalytics = require("AnalyticsHooks").useBountyCarouselEmptyStateAnalytics(null);
    const obj2 = { theme: require("shared/ThemeTypes").ThemeTypes.DARK, children: null };
    if (tmp3) {
      const obj3 = {};
      let merged = Object.assign(isEmptyOrCompleted);
      obj3.containerRef = containerRef;
      let tmp9Result = tmp9(BountiesCtaHeaderInner, obj3);
    } else {
      const obj4 = {
        adContentId,
        adCreativeType: tmp7(5502).AdCreativeType.BOUNTY,
        questContent: tmp7(5498).QuestContent.QUEST_HOME_ENTRYPOINT_MOBILE,
        questContentPosition: 0,
        overrideVisibility: tmp2.isInView,
        sourceQuestContent: tmp7(5498).QuestContent.QUEST_HOME_ENTRYPOINT_MOBILE,
        children() {
              const obj = {};
              const merged = Object.assign(closure_0);
              obj.containerRef = containerRef;
              return closure_2_10(BountiesCtaHeaderInner, obj);
            }
      };
      tmp9Result = tmp9(tmp7(11871).QuestContentImpressionTrackerNative, obj4);
    }
    obj2.children = tmp9Result;
    return closure_10(require("native").ThemeContextProvider, obj2);
  } else if (0 === isEmptyOrCompleted.bounties.length) {
    let COMPLETED = constants.EMPTY;
  } else {
    COMPLETED = constants.COMPLETED;
  }
});
