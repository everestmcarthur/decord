// Module ID: 13519
// Function ID: 13520
// Name: ReferralProgramPerkCard
// Dependencies: [19, 17, 7504, 13520, 1074, 21, 4605, 576, 1178, 4601, 13521, 13522, 1114, 2024, 6380, 5968, 7505, 504, 7214, 7234, 13523, 1242, 4572, 13524, 1896, 13531, 13534, 5025, 2]
// Exports: ReferralProgramPerkCard

// Module 13519 (ReferralProgramPerkCard)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1178 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4572 */;
import Text_Text from "Text/Text" /* 4601 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7214 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7234 */;
import ReferralTrialActionCreators from "ReferralTrialActionCreators" /* 7505 */;
import useReferralProgramBannerDetails from "useReferralProgramBannerDetails" /* 13521 */;
import noop from "module_19" /* 19 */;
import ReferralTrialStore from "ReferralTrialStore" /* 7504 */;

const require = globalThis.__r;

require = fn;
function ReferredFriendAvatar(user) {
  user = user.user;
  const obj = { style: closure_12().referredFriendAvatar, children: closure_1_10(native.Avatar, { source: user.getAvatarSource(undefined, false, 24), size: native.AvatarSizes.XSMALL }) };
  return closure_1_10(View, obj);
}
function AvailableReferralSlot(children) {
  return closure_1_10(View, { style: closure_12().availableReferralSlot, children: closure_1_10(Text_Text.Text, { variant: "text-xs/medium", color: "text-strong", children: children.slotIndex }) });
}
function ProgressIndicator(referralSentUsers) {
  referralSentUsers = referralSentUsers.referralSentUsers;
  const items = [];
  let num = 0;
  if (0 < useReferralProgramBannerDetails.MAX_REFERRALS_SENT) {
    do {
      if (null != referralSentUsers[num]) {
        let obj2 = { user: referralSentUsers[num] };
        let arr = items.push(closure_1_10(ReferredFriendAvatar, obj2, referralSentUsers[num].id));
      } else {
        let obj = { slotIndex: num + 1 };
        let arr3 = items.push(closure_1_10(AvailableReferralSlot, obj, num));
      }
      num = num + 1;
    } while (num < useReferralProgramBannerDetails.MAX_REFERRALS_SENT);
  }
  const tmp = closure_12();
  return closure_1_10(View, { style: closure_12().progressIndicatorContainer, children: items });
}
const View = fn(17).View;
let Constants = fn(13520);
({ REFERRAL_INCENTIVE_DISCOUNT_PERCENTAGE: metroRequire, REFERRAL_INCENTIVE_ORBS_PER_CONVERSION: closure_7 } = Constants);
Constants = fn(1074);
({ AnalyticEvents: closure_8, HelpdeskArticles: closure_9 } = Constants);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4605);
let obj2 = { container: null, betaBadge: null, progressIndicatorContainer: null, availableReferralSlot: null, referredFriendAvatar: null, contentContainer: null, heading: null, bodyText: null, buttonContainer: null };
const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
obj2.container = { width: 320, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, alignItems: "center" };
const rect = { position: "absolute", top: nativeDefault.space.PX_16, left: nativeDefault.space.PX_16, zIndex: 1 };
obj2.betaBadge = rect;
obj2.progressIndicatorContainer = { flexDirection: "row", alignItems: "center", alignSelf: "flex-start", gap: 8, marginTop: 16, marginLeft: 24 };
let size = { width: 24, height: 24, borderRadius: nativeDefault.radii.xxl, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, justifyContent: "center", alignItems: "center" };
obj2.availableReferralSlot = size;
let obj3 = { width: 320, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, alignItems: "center" };
obj2.referredFriendAvatar = { borderWidth: 2, borderColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.round };
obj2.contentContainer = { alignItems: "flex-start", paddingHorizontal: 24, gap: 8, marginTop: 12 };
obj2.heading = { textAlign: "left" };
obj2.bodyText = { textAlign: "left" };
const obj4 = { borderWidth: 2, borderColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.round };
obj2.buttonContainer = { paddingHorizontal: nativeDefault.space.PX_16, width: "100%", marginTop: nativeDefault.space.PX_24, marginBottom: nativeDefault.space.PX_16 };
let closure_12 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/premium/referral_program/native/ReferralProgramPerkCard.tsx");

export const ReferralProgramPerkCard = function ReferralProgramPerkCard() {
  const tmp = closure_12();
  let obj = require("useReferralProgramBannerDetails");
  const items = [ReferralTrialStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => ReferralTrialStore.getRecipientStatus());
  let obj2 = require("initialize");
  const items1 = [ReferralTrialStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => ReferralTrialStore.getHasEligibleFriends());
  const obj3 = require("initialize");
  const analyticsLocations = useAnalyticsLocationsDefault(AnalyticsLocationDefault.PREMIUM_MARKETING_REFERALL_PROGRAM_PROGRESS_BAR).analyticsLocations;
  _require = analyticsLocations;
  const referralIncentiveEligibility = require("useReferralIncentiveEligibility").useReferralIncentiveEligibility({ location: "PremiumNitroHomeReferralProgramPerkCard" });
  let isEligibleForIncentive = referralIncentiveEligibility.isEligibleForIncentive;
  const items2 = [analyticsLocations];
  ({ referralRewardType, useAltReferralCardArt } = referralIncentiveEligibility);
  closure_129_0 = 0;
  closure_129_1 = 0;
  closure_129_2 = 0;
  const callback = noop.useCallback(() => {
    AnalyticsUtilsDefault.track(constants.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, { location_stack });
    const obj2 = { location_stack };
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13524, dependencyMap.paths), "referral-program-share-action-sheet");
  }, items2);
  const item = stateFromStores.forEach((item) => {
    if (item === ReferralTrialActionCreators.ReferralOfferStatus.REFERRER_REWARD_GRANTED) {
      closure_0 = closure_0 + 1;
      closure_1 = closure_1 + 1;
      closure_2 = closure_2 + 1;
    } else if (item === tmp(7505).ReferralOfferStatus.CONVERTED) {
      closure_1 = closure_1 + 1;
      closure_2 = closure_2 + 1;
    } else if (item === tmp(7505).ReferralOfferStatus.REDEEMED) {
      closure_2 = closure_2 + 1;
    }
  });
  const size = stateFromStores.size;
  let tmp12 = null;
  if (isEligibleForIncentive) {
    tmp12 = referralRewardType;
  }
  const obj5 = { style: tmp.container, children: null };
  let tmp15 = isEligibleForIncentive;
  if (isEligibleForIncentive) {
    const obj6 = { text: null, color: null, style: null };
    const intl = tmp2(1114).intl;
    obj6.text = intl.string(tmp2(1114).t.oW0eUd);
    obj6.color = tmp2(1178).BadgeColors.BRAND;
    obj6.style = tmp.betaBadge;
    tmp15 = closure_10(tmp2(1178).TextBadge, obj6);
  }
  const items3 = [tmp15, , , , ];
  const obj7 = { nReferralsSent: size, altImage: null };
  if (!useAltReferralCardArt) {
    obj7.altImage = undefined;
    items3[1] = tmp17(tmp18, obj7);
    const obj8 = { referralSentUsers: obj.useReferralProgramBannerDetails().referralSentUsers };
    items3[2] = tmp17(ProgressIndicator, obj8);
    const obj9 = { style: tmp.contentContainer, children: null };
    let str = "heading-lg/semibold";
    if (isEligibleForIncentive) {
      str = "heading-lg/bold";
    }
    const obj10 = { variant: str, color: "text-strong", style: tmp.heading, children: null };
    if (tmp12 === tmp2(13522).ReferralRewardType.ORBS) {
      const intl4 = tmp2(1114).intl;
      let stringResult = intl4.string(tmp2(1114).t.tAlkl4);
    } else if (tmp12 === tmp2(13522).ReferralRewardType.DISCOUNT) {
      const intl3 = tmp2(1114).intl;
      const obj11 = { discountPercent };
      stringResult = intl3.formatToPlainString(tmp2(1114).t["/JJ9I5"], obj11);
    } else {
      const intl2 = tmp2(1114).intl;
      stringResult = intl2.string(tmp2(1114).t.USo4s7);
    }
    obj10.children = stringResult;
    const items4 = [tmp17(tmp2(4601).Text, obj10), , ];
    let str2 = "text-md/medium";
    if (isEligibleForIncentive) {
      str2 = "text-sm/medium";
    }
    const obj12 = { variant: str2, color: "text-subtle", style: tmp.bodyText, children: null };
    const articleURL = tmp5(2024).getArticleURL(constants2.REFERRAL_PROGRAM);
    if (null != tmp12) {
      if (!tmp24) {
        const intl9 = tmp2(1114).intl;
        const obj13 = { helpdeskArticle: articleURL };
        intl9.format(tmp2(1114).t["zWhX/Q"], obj13);
      }
      if (size !== tmp2(13521).MAX_REFERRALS_SENT) {
        if (tmp12 === tmp2(13522).ReferralRewardType.ORBS) {
          const intl11 = tmp2(1114).intl;
          const obj14 = { numOrbs, helpdeskArticle: articleURL };
          let formatResult1 = intl11.format(tmp2(1114).t.cfE0uG, obj14);
        } else {
          const intl10 = tmp2(1114).intl;
          const obj15 = { helpdeskArticle: articleURL };
          formatResult1 = intl10.format(tmp2(1114).t.kBsllF, obj15);
        }
      }
      if (tmp11 === tmp2(13521).MAX_REFERRALS_SENT) {
        const intl13 = tmp2(1114).intl;
        const obj16 = { helpdeskArticle: articleURL };
        let formatResult2 = intl13.format(tmp2(1114).t.ZskKu1, obj16);
      } else {
        const intl12 = tmp2(1114).intl;
        const obj17 = { helpdeskArticle: articleURL };
        formatResult2 = intl12.format(tmp2(1114).t.tSiyfF, obj17);
      }
    } else if (tmp24) {
      if (size !== tmp2(13521).MAX_REFERRALS_SENT) {
        const intl6 = tmp2(1114).intl;
        const obj18 = { helpdeskArticle: articleURL };
        intl6.format(tmp2(1114).t["omMr+V"], obj18);
      }
      if (tmp11 === tmp2(13521).MAX_REFERRALS_SENT) {
        const intl8 = tmp2(1114).intl;
        const obj19 = { helpdeskArticle: articleURL };
        let formatResult4 = intl8.format(tmp2(1114).t["1aEjsH"], obj19);
      } else {
        const intl7 = tmp2(1114).intl;
        const obj20 = { helpdeskArticle: articleURL };
        formatResult4 = intl7.format(tmp2(1114).t["+u3AOO"], obj20);
      }
    } else {
      const intl5 = tmp2(1114).intl;
      const obj21 = { helpdeskArticle: articleURL };
      obj12.children = intl5.format(tmp2(1114).t["zWhX/Q"], obj21);
      items4[1] = tmp17(tmp2(4601).Text, obj12);
      if (isEligibleForIncentive) {
        const obj22 = { nRewardsGranted: closure_129_0, referralRewardType: tmp12 };
        isEligibleForIncentive = tmp17(tmp5(13534), obj22);
      }
      items4[2] = isEligibleForIncentive;
      obj9.children = items4;
      items3[3] = tmp13(tmp14, obj9);
      const obj23 = { style: tmp.buttonContainer, children: null };
      let tmp36 = !tmp24;
      if (tmp24) {
        tmp36 = size === tmp2(13521).MAX_REFERRALS_SENT;
      }
      const obj24 = { variant: "primary", size: "sm", disabled: tmp36, text: null, onPress: null };
      const intl14 = tmp2(1114).intl;
      obj24.text = intl14.string(tmp2(1114).t.Lm2nFc);
      obj24.onPress = callback;
      obj23.children = tmp17(tmp2(5025).Button, obj24);
      items3[4] = tmp17(tmp14, obj23);
      obj5.children = items3;
      return tmp13(tmp14, obj5);
    }
    const tmp5Result = tmp5(2024);
  } else if (tmp12 === tmp2(13522).ReferralRewardType.ORBS) {
    let tmp5Result2 = tmp5(6380);
  } else if (tmp12 === tmp2(13522).ReferralRewardType.DISCOUNT) {
    tmp5Result2 = tmp5(5968);
  }
};
