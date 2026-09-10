// Module ID: 16988
// Function ID: 16989
// Name: useMainViewTooltipActionSheetEligibilityMap
// Dependencies: [32, 19, 8218, 16972, 10697, 1221, 1951, 1074, 1373, 1084, 504, 16989, 1608, 8075, 7461, 16990, 13379, 10774, 10773, 13598, 8223, 8210, 4394, 1943, 16991, 16986, 16969, 13494, 16980, 9209, 11997, 2]
// Exports: useMainViewTooltipActionSheetMap

// Module 16988 (useMainViewTooltipActionSheetEligibilityMap)
import BadgeId from "BadgeId" /* 8210 */;
import BadgeDirectoryActionCreators from "BadgeDirectoryActionCreators" /* 8223 */;
import MainViewTooltipActionSheetsDisabledExperimentDefault from "MainViewTooltipActionSheetsDisabledExperiment" /* 16989 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 8218 */;
import GooglePlayPriceChangeStore from "GooglePlayPriceChangeStore" /* 16972 */;
import PromotionsStore from "PromotionsStore" /* 10697 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1221 */;
import UserRequiredActionStore from "UserRequiredActionStore" /* 1951 */;

const useGiftingPromotionAssetsReadyDefault = tmp4(16991);
require = fn;
const PlatformTypes = fn(1074).PlatformTypes;
const PremiumConstants = fn(1373);
({ PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID, PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID, PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID, PREMIUM_TIER_2_REACTIVATION_TRIAL_ID } = PremiumConstants);
const UserSettingsTypes = fn(1084).UserSettingsTypes;
const MainViewTooltipActionSheets = "MainViewTooltipActionSheets";
let items = [PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID, PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID, PREMIUM_TIER_2_REACTIVATION_TRIAL_ID, PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID];
const set = new Set(items);
const size = fn(2);
const result = size.fileFinishedImporting("modules/upsell_tooltip/native/useMainViewTooltipActionSheetEligibilityMap.tsx");

export const useMainViewTooltipActionSheetMap = function useMainViewTooltipActionSheetMap() {
  let items = [UserSettingsProtoStore];
  let stateFromStores = isEligibleToShowGiftingBadgeCoachmark(504).useStateFromStores(items, () => UserSettingsProtoStore.hasLoaded(constants.PRELOADED_USER_SETTINGS));
  let obj = isEligibleToShowGiftingBadgeCoachmark(504);
  const obj2 = MainViewTooltipActionSheetsDisabledExperimentDefault;
  const obj3 = { location: MainViewTooltipActionSheets };
  const items1 = [UserRequiredActionStore];
  const stateFromStores1 = isEligibleToShowGiftingBadgeCoachmark(504).useStateFromStores(items1, () => UserRequiredActionStore.hasAction());
  if (stateFromStores) {
    stateFromStores = !obj2.getConfig(obj3).disabled;
  }
  if (stateFromStores) {
    stateFromStores = !stateFromStores1;
  }
  if (stateFromStores) {
    stateFromStores = !tmp(1608).isMetaQuest();
    const tmpResult = tmp(1608);
  }
  const obj4 = isEligibleToShowGiftingBadgeCoachmark(504);
  const items2 = [GooglePlayPriceChangeStore];
  const tmpResult19 = isEligibleToShowGiftingBadgeCoachmark(504);
  [tmp8, tmp9] = isEligibleToShowGiftingBadgeCoachmark(504).useStateFromStoresArray(items2, () => {
    const items = [, ];
    ({ shouldShowGooglePlayPriceChange: arr[0], priceChangeRecord: arr[1] } = GooglePlayPriceChangeStore);
    return items;
  });
  const tmp7 = _slicedToArray(isEligibleToShowGiftingBadgeCoachmark(504).useStateFromStoresArray(items2, () => {
    const items = [, ];
    ({ shouldShowGooglePlayPriceChange: arr[0], priceChangeRecord: arr[1] } = GooglePlayPriceChangeStore);
    return items;
  }), 2);
  const premiumDiscountOffer = isEligibleToShowGiftingBadgeCoachmark(8075).usePremiumDiscountOffer();
  const tmpResult20 = isEligibleToShowGiftingBadgeCoachmark(8075);
  const premiumTrialOffer = isEligibleToShowGiftingBadgeCoachmark(7461).usePremiumTrialOffer();
  const PremiumTrialOfferActionSheetKillSwitchExperiment = tmp(16990).PremiumTrialOfferActionSheetKillSwitchExperiment;
  const tmpResult21 = isEligibleToShowGiftingBadgeCoachmark(7461);
  const promotionMarketingComponent = isEligibleToShowGiftingBadgeCoachmark(13379).usePromotionMarketingComponent(tmp(10774).MarketingComponentType.MOBILE_BOTTOM_SHEET);
  let oneofKind;
  if (promotionMarketingComponent != null) {
    oneofKind = promotionMarketingComponent.properties.properties.oneofKind;
  }
  let mobileBottomSheet = null;
  if ("mobileBottomSheet" === oneofKind) {
    mobileBottomSheet = promotionMarketingComponent.properties.properties.mobileBottomSheet;
  }
  const tmpResult22 = isEligibleToShowGiftingBadgeCoachmark(13379);
  const items3 = [PromotionsStore];
  const stateFromStores2 = isEligibleToShowGiftingBadgeCoachmark(504).useStateFromStores(items3, () => {
    const giftPromotion = PromotionsStore.getGiftPromotion();
    let id;
    if (giftPromotion != null) {
      id = giftPromotion.id;
    }
    return id;
  });
  const tmpResult23 = isEligibleToShowGiftingBadgeCoachmark(504);
  const items4 = [PromotionsStore];
  const stateFromStores3 = isEligibleToShowGiftingBadgeCoachmark(504).useStateFromStores(items4, () => {
    const marketingComponentByType = PromotionsStore.getMarketingComponentByType(isEligibleToShowGiftingBadgeCoachmark(10774).MarketingComponentType.GIFT_ICON_COACHMARK);
    let giftIconCoachmark = null;
    if (null != marketingComponentByType) {
      giftIconCoachmark = null;
      if ("giftIconCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
        giftIconCoachmark = marketingComponentByType.properties.properties.giftIconCoachmark;
      }
    }
    return giftIconCoachmark;
  });
  const tmpResult24 = isEligibleToShowGiftingBadgeCoachmark(504);
  const items5 = [PromotionsStore];
  const stateFromStores4 = isEligibleToShowGiftingBadgeCoachmark(504).useStateFromStores(items5, () => {
    const marketingComponentByType = PromotionsStore.getMarketingComponentByType(isEligibleToShowGiftingBadgeCoachmark(10774).MarketingComponentType.GIFT_REMINDER_COACHMARK);
    let prop = null;
    if (null != marketingComponentByType) {
      prop = null;
      if ("giftReminderCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
        prop = marketingComponentByType.properties.properties.giftReminderCoachmark;
      }
    }
    return prop;
  });
  const GiftPromotionReminderExperiment = tmp(10773).GiftPromotionReminderExperiment;
  const tmpResult25 = isEligibleToShowGiftingBadgeCoachmark(504);
  isEligibleToShowGiftingBadgeCoachmark = isEligibleToShowGiftingBadgeCoachmark(13598).useIsEligibleToShowGiftingBadgeCoachmark({ platform: "native", location: tmp5 });
  const items6 = [isEligibleToShowGiftingBadgeCoachmark];
  const effect = noop.useEffect(() => {
    if (isEligibleToShowGiftingBadgeCoachmark) {
      const badge = BadgeDirectoryActionCreators.fetchBadge(BadgeId.BadgeId.GIFTING);
    }
  }, items6);
  const tmpResult26 = isEligibleToShowGiftingBadgeCoachmark(13598);
  const items7 = [BadgeDirectoryStore];
  let isDismissed = null != stateFromStores2;
  const stateFromStores5 = isEligibleToShowGiftingBadgeCoachmark(504).useStateFromStores(items7, () => null != badgeById.getBadgeById(isEligibleToShowGiftingBadgeCoachmark(8210).BadgeId.GIFTING));
  if (isDismissed) {
    isDismissed = tmp(4394).UNSAFE_isSnowflakeBoundDismissibleContentDismissed(tmp(1943).DismissibleContent.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET, stateFromStores2).isDismissed;
    const tmpResult28 = tmp(4394);
  }
  let isDismissed2 = null != stateFromStores2;
  if (isDismissed2) {
    isDismissed2 = tmp(4394).UNSAFE_isSnowflakeBoundDismissibleContentDismissed(tmp(1943).DismissibleContent.GIFTING_PROMOTION_REMINDER, stateFromStores2).isDismissed;
    const tmpResult29 = tmp(4394);
  }
  let tmp22 = null;
  const tmpResult27 = isEligibleToShowGiftingBadgeCoachmark(504);
  if (!isDismissed) {
    tmp22 = stateFromStores3;
  }
  let tmp23 = null;
  if (!isDismissed2) {
    tmp23 = stateFromStores4;
  }
  const tmp4Result = useGiftingPromotionAssetsReadyDefault;
  ({ isGiftCoachmarkAssetReady, isGiftReminderAssetReady } = useGiftingPromotionAssetsReadyDefault(tmp22, tmp23));
  const tmp4ResultResult = useGiftingPromotionAssetsReadyDefault(tmp22, tmp23);
  const tmpResult30 = isEligibleToShowGiftingBadgeCoachmark(16986);
  const shouldShowRobloxConnectionCoachmark = isEligibleToShowGiftingBadgeCoachmark(16969).useShouldShowRobloxConnectionCoachmark();
  const tmpResult31 = isEligibleToShowGiftingBadgeCoachmark(16969);
  const items8 = [, ];
  ({ LEAGUE_OF_LEGENDS: arr9[0], RIOT_GAMES: arr9[1] } = PlatformTypes);
  const isEligibleForBogoPromotion = isEligibleToShowGiftingBadgeCoachmark(13494).useIsEligibleForBogoPromotion();
  const tmp27 = PlatformTypes;
  const tmpResult32 = isEligibleToShowGiftingBadgeCoachmark(13494);
  const shouldShowConnectionDeprecationBottomSheet = isEligibleToShowGiftingBadgeCoachmark(16980).useShouldShowConnectionDeprecationBottomSheet({ deprecatedPlatformTypes: items8 });
  const tmpResult33 = isEligibleToShowGiftingBadgeCoachmark(16980);
  const obj5 = { deprecatedPlatformTypes: null };
  const items9 = [PlatformTypes.BATTLENET];
  obj5.deprecatedPlatformTypes = items9;
  const shouldShowConnectionDeprecationBottomSheet1 = isEligibleToShowGiftingBadgeCoachmark(16980).useShouldShowConnectionDeprecationBottomSheet(obj5);
  const tmpResult34 = isEligibleToShowGiftingBadgeCoachmark(16980);
  const isDisplayNameStylesFlywheelSettersEnabled = isEligibleToShowGiftingBadgeCoachmark(9209).useIsDisplayNameStylesFlywheelSettersEnabled(tmp5);
  isEligibleToShowGiftingBadgeCoachmark(11997);
  const obj6 = {};
  if (stateFromStores) {
    const obj7 = { isEligible: tmp8, newSnowflakeId: null, actionSheetProperties: null };
    let priceChangeId;
    if (tmp9 != null) {
      priceChangeId = tmp9.priceChangeId;
    }
    obj7.newSnowflakeId = priceChangeId;
    obj7.actionSheetProperties = {};
    obj6[tmp(1943).DismissibleContent.GOOGLE_PLAY_PRICE_CHANGE_ACTION_SHEET] = obj7;
    let tmp36 = null != premiumDiscountOffer;
    if (tmp36) {
      tmp36 = null == premiumDiscountOffer.expiresAt;
    }
    const obj8 = { isEligible: tmp36, newSnowflakeId: null, actionSheetProperties: null };
    let id;
    if (premiumDiscountOffer != null) {
      id = premiumDiscountOffer.id;
    }
    obj8.newSnowflakeId = id;
    if (null != premiumDiscountOffer) {
      const obj9 = { userDiscountOffer: premiumDiscountOffer };
      let obj10 = obj9;
    } else {
      obj10 = {};
    }
    obj8.actionSheetProperties = obj10;
    obj6[tmp(1943).DismissibleContent.DISCOUNT_OFFER_ACTION_SHEET] = obj8;
    let hasItem = null != premiumTrialOffer;
    if (hasItem) {
      hasItem = null == premiumTrialOffer.expiresAt;
    }
    if (hasItem) {
      hasItem = !PremiumTrialOfferActionSheetKillSwitchExperiment.useConfig({ location: tmp5 }).enabled;
    }
    if (hasItem) {
      hasItem = set.has(premiumTrialOffer.trialId);
    }
    const obj11 = { isEligible: hasItem, newSnowflakeId: null, actionSheetProperties: null };
    let id1;
    if (premiumTrialOffer != null) {
      id1 = premiumTrialOffer.id;
    }
    obj11.newSnowflakeId = id1;
    if (null != premiumTrialOffer) {
      const obj12 = { userTrialOffer: premiumTrialOffer };
      let obj13 = obj12;
    } else {
      obj13 = {};
    }
    obj11.actionSheetProperties = obj13;
    obj6[tmp(1943).DismissibleContent.MOBILE_PREMIUM_TRIAL_OFFER_ACTION_SHEET] = obj11;
    let dismissibleContent;
    if (mobileBottomSheet != null) {
      dismissibleContent = mobileBottomSheet.dismissibleContent;
    }
    const obj14 = { isEligible: dismissibleContent === tmp(1943).DismissibleContent.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL, newSnowflakeId: null, actionSheetProperties: null };
    let promotionId;
    if (promotionMarketingComponent != null) {
      promotionId = promotionMarketingComponent.promotionId;
    }
    obj14.newSnowflakeId = promotionId;
    const obj15 = { bottomSheetData: mobileBottomSheet, componentId: null, promotionId: null };
    let id2;
    if (promotionMarketingComponent != null) {
      id2 = promotionMarketingComponent.id;
    }
    obj15.componentId = id2;
    let promotionId1;
    if (promotionMarketingComponent != null) {
      promotionId1 = promotionMarketingComponent.promotionId;
    }
    obj15.promotionId = promotionId1;
    obj14.actionSheetProperties = obj15;
    obj6[tmp(1943).DismissibleContent.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL] = obj14;
    let dismissibleContent1;
    if (mobileBottomSheet != null) {
      dismissibleContent1 = mobileBottomSheet.dismissibleContent;
    }
    const obj16 = { isEligible: dismissibleContent1 === tmp(1943).DismissibleContent.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL, newSnowflakeId: null, actionSheetProperties: null };
    let promotionId2;
    if (promotionMarketingComponent != null) {
      promotionId2 = promotionMarketingComponent.promotionId;
    }
    obj16.newSnowflakeId = promotionId2;
    const obj17 = { bottomSheetData: mobileBottomSheet, componentId: null, promotionId: null };
    let id3;
    if (promotionMarketingComponent != null) {
      id3 = promotionMarketingComponent.id;
    }
    obj17.componentId = id3;
    let promotionId3;
    if (promotionMarketingComponent != null) {
      promotionId3 = promotionMarketingComponent.promotionId;
    }
    obj17.promotionId = promotionId3;
    obj16.actionSheetProperties = obj17;
    obj6[tmp(1943).DismissibleContent.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL] = obj16;
    let tmp49 = tmp33;
    if (tmp33) {
      tmp49 = isGiftCoachmarkAssetReady;
    }
    const obj18 = { isEligible: tmp49, newSnowflakeId: stateFromStores2, actionSheetProperties: null };
    const obj19 = { coachmarkComponent: stateFromStores3 };
    obj18.actionSheetProperties = obj19;
    obj6[tmp(1943).DismissibleContent.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET] = obj18;
    let tmp50 = !tmp33;
    if (tmp33) {
      tmp50 = null == stateFromStores4;
    }
    let enabled = !tmp50;
    if (!tmp50) {
      enabled = null != stateFromStores2;
    }
    if (enabled) {
      enabled = isDismissed;
    }
    if (enabled) {
      enabled = GiftPromotionReminderExperiment.useConfig({ location: tmp5 }).enabled;
    }
    if (enabled) {
      enabled = null != stateFromStores4;
    }
    if (enabled) {
      enabled = isGiftReminderAssetReady;
    }
    const obj20 = { isEligible: enabled, newSnowflakeId: stateFromStores2, actionSheetProperties: null };
    const obj21 = { coachmarkComponent: stateFromStores4 };
    obj20.actionSheetProperties = obj21;
    obj6[tmp(1943).DismissibleContent.GIFTING_PROMOTION_REMINDER] = obj20;
    if (isEligibleToShowGiftingBadgeCoachmark) {
      isEligibleToShowGiftingBadgeCoachmark = stateFromStores5;
    }
    const obj22 = { isEligible: isEligibleToShowGiftingBadgeCoachmark, actionSheetProperties: {} };
    obj6[tmp(1943).DismissibleContent.NEW_GIFTING_BADGES_COACHMARK] = obj22;
    const obj23 = { isEligible: true, actionSheetProperties: {} };
    obj6[tmp(1943).DismissibleContent.CUSTOM_APP_ICONS_COACHMARK] = obj23;
    const obj24 = { isEligible: shouldShowRobloxConnectionCoachmark, actionSheetProperties: {} };
    obj6[tmp(1943).DismissibleContent.ROBLOX_CONNECTION_COACHMARK] = obj24;
    const obj25 = { isEligible: isEligibleForBogoPromotion, actionSheetProperties: {} };
    obj6[tmp(1943).DismissibleContent.MOBILE_BOGO_PROMOTION_ACTION_SHEET] = obj25;
    const obj26 = { isEligible: isDisplayNameStylesFlywheelSettersEnabled, actionSheetProperties: {} };
    obj6[tmp(1943).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_COACHMARK] = obj26;
    const obj27 = { isEligible: shouldShowConnectionDeprecationBottomSheet, actionSheetProperties: null };
    const obj28 = { platformTypes: items8 };
    obj27.actionSheetProperties = obj28;
    obj6[tmp(1943).DismissibleContent.RIOT_CONNECTION_DEPRECATION_DISABLE] = obj27;
    const obj29 = { isEligible: shouldShowConnectionDeprecationBottomSheet1, actionSheetProperties: null };
    const obj30 = { platformTypes: null };
    const items10 = [tmp27.BATTLENET];
    obj30.platformTypes = items10;
    obj29.actionSheetProperties = obj30;
    obj6[tmp(1943).DismissibleContent.BATTLENET_CONNECTION_DEPRECATION_DISABLE] = obj29;
    const obj31 = { isEligible: tmpResult30.useProfileFramesMarketing(tmp5).isAnnouncementEligible, actionSheetProperties: {} };
    obj6[tmp(1943).DismissibleContent.COLLECTIBLES_PROFILE_FRAMES_ANNOUNCEMENT] = obj31;
    const obj32 = { isEligible: tmp32, actionSheetProperties: {} };
    obj6[tmp(1943).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_COACHMARK] = obj32;
    let tmp34 = obj6;
  } else {
    tmp34 = obj6;
  }
  return tmp34;
};
