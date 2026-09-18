// Module ID: 14984
// Function ID: 14985
// Name: PremiumTabBadge
// Dependencies: [32, 19, 17, 4224, 1373, 7432, 21, 4560, 576, 4411, 4495, 4556, 8774, 1250, 10747, 1178, 14985, 7447, 8061, 4218, 4380, 1943, 504, 7388, 8057, 8056, 13356, 1114, 4987, 1093, 1115, 2]
// Exports: default

// Module 14984 (PremiumTabBadge)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1250 */;
import dismissible_content from "dismissible_content" /* 1943 */;
import PremiumUtils from "PremiumUtils" /* 4218 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4380 */;
import shared from "shared" /* 4411 */;
import useThemeDefault from "useTheme" /* 4495 */;
import Text_Text from "Text/Text" /* 4556 */;
import LinearGradientDefault from "LinearGradient" /* 4987 */;
import useSelectedDismissibleContent from "useSelectedDismissibleContent" /* 7388 */;
import usePremiumTrialOffer from "usePremiumTrialOffer" /* 7447 */;
import usePremiumDiscountOffer from "usePremiumDiscountOffer" /* 8061 */;
import useTrackImpressionDefault from "useTrackImpression" /* 8774 */;
import MarketingComponentType from "MarketingComponentType" /* 10747 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import SubscriptionStore from "SubscriptionStore" /* 4224 */;

const _modDef14985 = tmp2(14985);
require = fn;
function ThemedTabBadge(children) {
  const tmp = closure_10();
  const isThemeDarkResult = shared.isThemeDark(useThemeDefault());
  const items = [tmp.badge, ];
  const obj2 = { style: items, children: null };
  items[1] = isThemeDarkResult ? tmp.badgeBackgroundDarkTheme : tmp.badgeBackgroundLightTheme;
  let str = "text-overlay-light";
  if (isThemeDarkResult) {
    str = "text-overlay-dark";
  }
  const obj3 = { variant: "eyebrow", color: str, style: null, children: children.label };
  const items1 = [, ];
  ({ uppercase: arr2[0], text: arr2[1] } = tmp);
  obj3.style = items1;
  obj2.children = React6(Text_Text.Text, obj3);
  return React6(View, obj2);
}
function OfferBadge(componentId) {
  componentId = componentId.componentId;
  ({ acked, badgeCopy, ackedBadgeCopy, promotionId } = componentId);
  const tmp = closure_10();
  const obj = { type: discord_common_AnalyticsUtils.ImpressionTypes.VIEW, name: discord_common_AnalyticsUtils.ImpressionNames.PREMIUM_MARKETING_COMPONENT, properties: null };
  const tmp4 = useTrackImpressionDefault;
  obj.properties = { component_type: MarketingComponentType.MarketingComponentType.PREMIUM_TAB, component_id: componentId, promotion_id: promotionId };
  tmp4(obj, { disableTrack: null == componentId });
  if (acked) {
    const obj4 = { style: tmp.acked, children: null };
    const obj5 = { source: _modDef14985, size: tmp5(1178).Icon.Sizes.EXTRA_SMALL, color: tmp.icon.color, style: tmp.icon };
    const items = [React6(tmp5(1178).Icon, obj5), ];
    const obj6 = { variant: "eyebrow", color: "interactive-text-default", style: null, children: null };
    const items1 = [, ];
    ({ uppercase: arr2[0], text: arr2[1] } = tmp);
    obj6.style = items1;
    obj6.children = ackedBadgeCopy;
    items[1] = React6(tmp5(4556).Text, obj6);
    obj4.children = items;
    let tmp9 = React7(View, obj4);
  } else {
    const obj7 = { label: badgeCopy };
    tmp9 = React6(ThemedTabBadge, obj7);
  }
  return tmp9;
}
const View = fn(17).View;
let closure_6 = fn(1373).PREMIUM_TIER_2_REFERRAL_TRIAL_ID;
const Gradients = fn(7432).Gradients;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4560);
let obj2 = { tag: { paddingVertical: 4, paddingHorizontal: 8, borderRadius: nativeDefault.radii.round }, badge: null, badgeBackgroundLightTheme: null, badgeBackgroundDarkTheme: null, acked: null, ackedBadge: null, icon: null, uppercase: null, text: null, premiumDiscountBadge: null };
let obj3 = { paddingVertical: 4, paddingHorizontal: 8, borderRadius: nativeDefault.radii.round };
obj2.badge = { display: "flex", minWidth: 16, minHeight: 16, paddingHorizontal: 8, justifyContent: "center", alignItems: "center", gap: 4, borderRadius: nativeDefault.radii.round };
let obj4 = { display: "flex", minWidth: 16, minHeight: 16, paddingHorizontal: 8, justifyContent: "center", alignItems: "center", gap: 4, borderRadius: nativeDefault.radii.round };
obj2.badgeBackgroundLightTheme = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
let obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj2.badgeBackgroundDarkTheme = { backgroundColor: nativeDefault.colors.WHITE };
let obj6 = { backgroundColor: nativeDefault.colors.WHITE };
obj2.acked = { paddingVertical: 2, paddingHorizontal: 12, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, display: "flex", flexDirection: "row", alignItems: "center", textAlignVertical: "center" };
let obj7 = { paddingVertical: 2, paddingHorizontal: 12, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, display: "flex", flexDirection: "row", alignItems: "center", textAlignVertical: "center" };
obj2.ackedBadge = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let obj8 = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj2.icon = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, marginRight: 2 };
obj2.uppercase = { textTransform: "uppercase" };
obj2.text = { paddingBottom: 2 };
let obj9 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, marginRight: 2 };
obj2.premiumDiscountBadge = { paddingVertical: 2, paddingHorizontal: 12, borderRadius: nativeDefault.radii.round, display: "flex", flexDirection: "row", alignItems: "center", textAlignVertical: "center" };
let closure_10 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/native/PremiumTabBadge.tsx");

export default function PremiumTabBadge() {
  let tmp = closure_10();
  const premiumTrialOffer = usePremiumTrialOffer.usePremiumTrialOffer();
  const premiumDiscountOffer = usePremiumDiscountOffer.usePremiumDiscountOffer();
  const hasTier2Premium = PremiumUtils.useHasTier2Premium();
  const result = DismissibleContentUnsafeUtils.useIsDismissibleContentDismissed_UNSAFE(dismissible_content.DismissibleContent.MOBILE_NITRO_HOME_SETTINGS_BADGE);
  let tmp7 = !result;
  if (!result) {
    tmp7 = hasTier2Premium;
  }
  const items = [SubscriptionStore];
  const stateFromStores = initialize.useStateFromStores(items, () => premiumTypeSubscription.getPremiumTypeSubscription());
  let trialId;
  if (stateFromStores != null) {
    trialId = stateFromStores.trialId;
  }
  useSelectedDismissibleContent;
  if (trialId === closure_6) {
    if (!tmp7) {
      let items1 = [tmp2(1943).DismissibleContent.REFERRAL_TRIAL_MOBILE_NITRO_HOME_BADGE];
    }
    [tmp14, r10051] = tmp11(items1, undefined, true);
    tmp2(7388);
    if (!tmp7) {
      if (hasTier2Premium) {
        let items2 = [tmp2(1943).DismissibleContent.WHATS_NEW_TENURE_BADGE_REWARD];
      }
      [tmp18, r10063] = tmp12(tmp16(items2, undefined, true), 2);
      const tmp12Result = tmp12(tmp16(items2, undefined, true), 2);
      const isEligibleSenderForReferralProgram = tmp2(8057).useIsEligibleSenderForReferralProgram();
      const tmp2Result11 = tmp2(8057);
      const isReferralProgramEntrypointBadgeAcknowledged = tmp2(8056).useIsReferralProgramEntrypointBadgeAcknowledged();
      const tmp2Result12 = tmp2(8056);
      const promotionMarketingComponent = tmp2(13356).usePromotionMarketingComponent(tmp2(10747).MarketingComponentType.PREMIUM_TAB);
      const tmp2Result14 = tmp2(7388);
      let prop = null;
      if (null != promotionMarketingComponent) {
        prop = null;
        if ("premiumTab" === promotionMarketingComponent.properties.properties.oneofKind) {
          prop = tmp2(1943).DismissibleContent.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE;
        }
      }
      let str2;
      if (promotionMarketingComponent != null) {
        str2 = promotionMarketingComponent.promotionId;
      }
      if (str2 == null) {
        str2 = "";
      }
      const tmp2Result13 = tmp2(13356);
      if (null != promotionMarketingComponent) {
        if ("premiumTab" === promotionMarketingComponent.properties.properties.oneofKind) {
          const obj3 = { acked: tmp27 !== tmp2(1943).DismissibleContent.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE, badgeCopy: promotionMarketingComponent.properties.properties.premiumTab.badgeLabel, ackedBadgeCopy: promotionMarketingComponent.properties.properties.premiumTab.acknowledgedBadgeLabel, componentId: null, promotionId: null };
          ({ id: obj24.componentId, promotionId: obj24.promotionId } = promotionMarketingComponent);
          return React6(OfferBadge, obj3);
        }
      }
      if (tmp14 === tmp2(1943).DismissibleContent.REFERRAL_TRIAL_MOBILE_NITRO_HOME_BADGE) {
        const intl2 = tmp2(1114).intl;
        let stringResult = intl2.string(tmp2(1114).t.uO4bXn);
      } else {
        stringResult = null;
        if (tmp18 === tmp2(1943).DismissibleContent.WHATS_NEW_TENURE_BADGE_REWARD) {
          const intl = tmp2(1114).intl;
          stringResult = intl.string(tmp2(1114).t["jyYgZ+"]);
        }
      }
      if (isEligibleSenderForReferralProgram) {
        if (!isReferralProgramEntrypointBadgeAcknowledged) {
          const obj6 = { label: null };
          const intl3 = tmp2(1114).intl;
          obj6.label = intl3.string(tmp2(1114).t.RDE0Sc);
          return React6(ThemedTabBadge, obj6);
        }
      }
      if (tmp7) {
        const obj7 = { style: tmp.tag, colors: Gradients.PREMIUM_TIER_2, start: tmp2(1093).HorizontalGradient.START, end: tmp2(1093).HorizontalGradient.END, children: null };
        const items3 = [tmp.uppercase, ];
        const tmp52 = LinearGradientDefault;
        let text;
        if (tmp2Result15.isAndroid()) {
          text = tmp.text;
        }
        const obj8 = { variant: "eyebrow", color: "text-overlay-light", style: null, children: null };
        items3[1] = text;
        obj8.style = items3;
        const intl8 = tmp2(1114).intl;
        obj8.children = intl8.string(tmp2(1114).t.y2b7CA);
        tmp = tmp50(tmp2(4556).Text, obj8);
        obj7.children = tmp;
        let tmp47Result = tmp50(tmp52, obj7);
        tmp2Result15 = tmp2(1115);
      } else if (null != premiumTrialOffer) {
        let hasAcknowledged;
        if (premiumTrialOffer != null) {
          hasAcknowledged = premiumTrialOffer.hasAcknowledged;
        }
        const obj9 = { acked: true === hasAcknowledged, badgeCopy: null, ackedBadgeCopy: null };
        const intl6 = tmp2(1114).intl;
        obj9.badgeCopy = intl6.string(tmp2(1114).t.OS9KPu);
        const intl7 = tmp2(1114).intl;
        obj9.ackedBadgeCopy = intl7.string(tmp2(1114).t.OS9KPu);
        tmp47Result = React6(OfferBadge, obj9);
      } else if (null != premiumDiscountOffer) {
        if (premiumDiscountOffer.hasAcknowledged()) {
          const obj10 = { style: null, children: null };
          const items4 = [, ];
          ({ premiumDiscountBadge: arr6[0], ackedBadge: arr6[1] } = tmp);
          obj10.style = items4;
          const obj11 = { source: _modDef14985, size: tmp2(1178).Icon.Sizes.EXTRA_SMALL, color: tmp.icon.color, style: tmp.icon };
          const items5 = [React6(tmp2(1178).Icon, obj11), ];
          const obj12 = { variant: "eyebrow", color: "interactive-text-default", style: null, children: null };
          const items6 = [, ];
          ({ uppercase: arr8[0], text: arr8[1] } = tmp);
          obj12.style = items6;
          const intl5 = tmp2(1114).intl;
          obj12.children = intl5.string(tmp2(1114).t["/DTtr6"]);
          items5[1] = React6(tmp2(4556).Text, obj12);
          obj10.children = items5;
          let tmp41 = React7(View, obj10);
        } else {
          const obj13 = { style: tmp.premiumDiscountBadge, colors: ["#db00a4", "#5968f0"], start: tmp2(1093).HorizontalGradient.START, end: tmp2(1093).HorizontalGradient.END, children: null };
          const obj14 = { variant: "eyebrow", color: "text-overlay-light", style: null, children: null };
          const items7 = [, ];
          ({ uppercase: arr5[0], text: arr5[1] } = tmp);
          obj14.style = items7;
          const intl4 = tmp2(1114).intl;
          obj14.children = intl4.string(tmp2(1114).t["/DTtr6"]);
          obj13.children = React6(tmp2(4556).Text, obj14);
          tmp41 = React6(LinearGradientDefault, obj13);
        }
      } else {
        tmp47Result = null;
        if (null != stringResult) {
          const obj15 = { style: tmp.tag, colors: Gradients.PREMIUM_TIER_2, start: tmp2(1093).HorizontalGradient.START, end: tmp2(1093).HorizontalGradient.END, children: null };
          const items8 = [tmp.uppercase, ];
          const tmp34 = LinearGradientDefault;
          let text1;
          if (tmp2Result16.isAndroid()) {
            text1 = tmp.text;
          }
          const obj16 = { variant: "eyebrow", color: "text-overlay-light", style: null, children: null };
          items8[1] = text1;
          obj16.style = items8;
          obj16.children = stringResult;
          obj15.children = React6(tmp2(4556).Text, obj16);
          tmp47Result = tmp32(tmp34, obj15);
          tmp2Result16 = tmp2(1115);
        }
      }
      const tmp12Result2 = tmp12(tmp2Result14.useSelectedSnowflakeBoundDismissibleContent(prop, str2, undefined, true), 2);
    }
    items2 = [];
    const tmp13 = _slicedToArray(tmp11(items1, undefined, true), 2);
  }
  items1 = [];
};
