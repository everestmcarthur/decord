// Module ID: 11051
// Function ID: 11052
// Name: PremiumGiftPurchaseButton
// Dependencies: [19, 17, 8193, 10670, 1074, 21, 4560, 576, 6981, 1483, 10704, 11052, 504, 10747, 10757, 10745, 10743, 10748, 8185, 10668, 10667, 11047, 1114, 10758, 10759, 2460, 10255, 10761, 7182, 4556, 2024, 4975, 4425, 2]
// Exports: default

// Module 11051 (PremiumGiftPurchaseButton)
import nativeDefault from "native" /* 576 */;
import ChatInputUtils from "ChatInputUtils" /* 4425 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 6981 */;
import PremiumGiftModal from "PremiumGiftModal" /* 10667 */;
import PremiumAnalyticsUtils from "PremiumAnalyticsUtils" /* 10668 */;
import PremiumGiftingGogoPromotionExperimentDefault from "PremiumGiftingGogoPromotionExperiment" /* 10745 */;
import useShouldShowGiftingPromotionDecoDefault from "useShouldShowGiftingPromotionDeco" /* 10757 */;
import noop from "module_19" /* 19 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 8193 */;
import PromotionsStore from "PromotionsStore" /* 10670 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
let HelpdeskArticles = fn(1074).HelpdeskArticles;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4560);
let closure_11 = createStyles.createStyles((arg0) => {
  const obj = { container: null, selectedRewardRow: null, promoDetails: null, previewDetails: null };
  const merged = Object.assign(nativeDefault.shadows.SHADOW_TOP_HIGH);
  obj.container = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingTop: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_12 + arg0, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
  const obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingTop: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_12 + arg0, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
  obj.selectedRewardRow = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_16 };
  const obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_16 };
  obj.promoDetails = { paddingVertical: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
  obj.previewDetails = { flex: 1 };
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/gifting/PremiumGiftPurchaseButton.tsx");

export default function PremiumGiftPurchaseButton(defaultSelection) {
  defaultSelection = defaultSelection.defaultSelection;
  dependencyMap = undefined;
  noop = undefined;
  claimableRewards = undefined;
  c7 = undefined;
  HelpdeskArticles = undefined;
  closure_9 = undefined;
  closure_10 = undefined;
  let tmp3 = closure_11(useSafeAreaInsetsKeyboardAwareDefault().insets.bottom);
  importDefault = defaultSelection(1483).useNavigation();
  let obj = defaultSelection(1483);
  const nativeGiftContext = defaultSelection(10704).useNativeGiftContext();
  ({ onPurchase: c2, isPurchasing, allRewards: c3, claimableRewards } = nativeGiftContext);
  const selectedGiftingPromotionReward = nativeGiftContext.selectedGiftingPromotionReward;
  const setSelectedGiftingPromotionReward = nativeGiftContext.setSelectedGiftingPromotionReward;
  ({ setCurrentAnalyticsStep: c7, productId } = nativeGiftContext);
  let obj2 = defaultSelection(10704);
  const canPurchaseIAP = defaultSelection(11052).useCanPurchaseIAP(productId);
  const obj3 = defaultSelection(11052);
  let items = [c7];
  const stateFromStores = defaultSelection(504).useStateFromStores(items, () => {
    const marketingComponentByType = _undefined2.getMarketingComponentByType(defaultSelection(_undefined[13]).MarketingComponentType.GIFT_CUSTOMIZATION_BANNER);
    let prop = null;
    if (null != marketingComponentByType) {
      prop = null;
      if ("giftCustomizationBanner" === marketingComponentByType.properties.properties.oneofKind) {
        prop = marketingComponentByType.properties.properties.giftCustomizationBanner;
      }
    }
    return prop;
  });
  let tmp8 = null != claimableRewards;
  if (tmp8) {
    tmp8 = claimableRewards.length > 0;
  }
  HelpdeskArticles = tmp8;
  let tmp9 = null != claimableRewards;
  if (tmp9) {
    tmp9 = 1 === claimableRewards.length;
  }
  closure_9 = tmp9;
  const tmp10 = useShouldShowGiftingPromotionDecoDefault();
  let tmp11 = tmp10;
  if (tmp10) {
    tmp11 = null == selectedGiftingPromotionReward;
  }
  closure_10 = tmp11;
  const obj4 = defaultSelection(504);
  const config = PremiumGiftingGogoPromotionExperimentDefault.useConfig({ location: "PremiumGiftPurchaseButton" });
  const GiftingBadgeExperiment = tmp4(10748).GiftingBadgeExperiment;
  const tmpResult = PremiumGiftingGogoPromotionExperimentDefault;
  let items1 = [setSelectedGiftingPromotionReward];
  const stateFromStoresObject = defaultSelection(504).useStateFromStoresObject(items1, () => ({ nextTier: setSelectedGiftingPromotionReward.getNextTier(defaultSelection(_undefined[18]).BadgeId.GIFTING), giftsToNextTier: setSelectedGiftingPromotionReward.getRemainingToNextTier(defaultSelection(_undefined[18]).BadgeId.GIFTING) }));
  const nextTier = stateFromStoresObject.nextTier;
  const items2 = [tmp9, claimableRewards, setSelectedGiftingPromotionReward];
  const effect = noop.useEffect(() => {
    if (closure_9) {
      setSelectedGiftingPromotionReward(claimableRewards[0]);
    }
  }, items2);
  const tmp4Result = defaultSelection(504);
  const product = defaultSelection(11047).useFetchCollectiblesProduct(selectedGiftingPromotionReward).product;
  let tmp15 = null != product;
  if (tmp15) {
    tmp15 = product.items.length > 0;
  }
  const intl = tmp4(1114).intl;
  const string = intl.string;
  const t = tmp4(1114).t;
  if (tmp11) {
    let stringResult = string(t["gNZY/B"]);
  } else {
    stringResult = string(t.ouo4FK);
  }
  let str = "active";
  if (tmp11) {
    str = "primary";
  }
  const tmp4Result3 = defaultSelection(11047);
  let asset;
  if (stateFromStores != null) {
    asset = stateFromStores.asset;
  }
  const themeAndReducedMotionAwareAssetUrl = defaultSelection(10758).useThemeAndReducedMotionAwareAssetUrl(asset);
  const obj5 = { style: tmp3.container, children: null };
  if (tmp10) {
    if (config.enabled) {
      if (selectedGiftingPromotionReward === tmp4(10743).GiftingPromotionRewardSKUIds.SUMMER_2026_GOGO_FAKE_SKU_ID) {
        const obj6 = { style: tmp3.promoDetails, imageUrl: themeAndReducedMotionAwareAssetUrl, title: null, subtitle: null };
        const intl6 = tmp4(1114).intl;
        obj6.title = intl6.string(tmp(2460)["P+DDLh"]);
        const intl7 = tmp4(1114).intl;
        obj6.subtitle = intl7.string(tmp(2460).dOZh6X);
        let tmp22Result = closure_9(tmp(10759), obj6);
        const tmpResult5 = tmp(10759);
      }
      const items3 = [tmp22Result, , ];
      let tmp33 = !tmp11;
      if (!tmp11) {
        const obj7 = { variant: "text-sm/normal", children: null };
        const intl8 = tmp4(1114).intl;
        const obj8 = { paidURL: tmp(2024).getArticleURL(HelpdeskArticles.PAID_TERMS) };
        obj7.children = intl8.format(tmp4(1114).t.hYoGUM, obj8);
        tmp33 = closure_9(tmp4(4556).Text, obj7);
        const tmpResult6 = tmp(2024);
      }
      items3[1] = tmp33;
      const obj9 = { loading: isPurchasing, variant: str, text: stringResult, disabled: null, onPress: null };
      let tmp37 = !canPurchaseIAP;
      if (canPurchaseIAP) {
        tmp37 = isPurchasing;
      }
      obj9.disabled = tmp37;
      let fn;
      if (!isPurchasing) {
        fn = () => {
          ChatInputUtils.dismissKeyboard();
          if (closure_10) {
            if (closure_8) {
              if (closure_8) {
                _undefined2(tmp(10668).PaymentFlowStep.REWARD_SKU_SELECT);
                const obj2 = { defaultHighlightedReward: defaultSelection, allRewards: null, claimableRewards: null, onSelect: null };
                let items = c3;
                if (c3 == null) {
                  items = [];
                }
                obj2.allRewards = items;
                let items1 = claimableRewards;
                if (claimableRewards == null) {
                  items1 = [];
                }
                obj2.claimableRewards = items1;
                obj2.onSelect = function onSelect(arg0) {
                  setSelectedGiftingPromotionReward(arg0);
                  navigation.navigate(defaultSelection(10667).PremiumGiftScreens.CUSTOMIZATION);
                };
                navigation.navigate(tmp(10667).PremiumGiftScreens.REWARD_SELECT, obj2);
              }
            }
          }
          _undefined(() => {
            navigation.navigate(defaultSelection(10667).PremiumGiftScreens.SUCCESS);
          });
        };
      }
      obj9.onPress = fn;
      items3[2] = closure_9(tmp4(4975).Button, obj9);
      obj5.children = items3;
      return tmp19(tmp20, obj5);
    }
  }
  if (tmp11) {
    if (tmp8) {
      const obj10 = { style: tmp3.promoDetails, imageUrl: themeAndReducedMotionAwareAssetUrl, title: null, subtitle: null };
      const intl4 = tmp4(1114).intl;
      obj10.title = intl4.string(tmp(2460)["7yaXr8"]);
      const intl5 = tmp4(1114).intl;
      obj10.subtitle = intl5.string(tmp(2460).QojGXK);
      tmp22Result = closure_9(tmp(10759), obj10);
      const tmpResult7 = tmp(10759);
    }
  }
  if (tmp15) {
    if (tmp10) {
      if (null != selectedGiftingPromotionReward) {
        const obj11 = { style: null, onPress: null, disabled: null, accessibilityRole: null, accessibilityLabel: null, children: null };
        const items4 = [, ];
        ({ selectedRewardRow: arr4[0], promoDetails: arr4[1] } = tmp3);
        obj11.style = items4;
        obj11.onPress = function onPress() {
          let tmp = selectedGiftingPromotionReward;
          if (closure_8) {
            _undefined2(PremiumAnalyticsUtils.PaymentFlowStep.REWARD_SKU_SELECT);
            if (null == tmp) {
              tmp = defaultSelection;
            }
            const obj = { defaultHighlightedReward: tmp, allRewards: null, claimableRewards: null, onSelect: null };
            let items = c3;
            if (c3 == null) {
              items = [];
            }
            obj.allRewards = items;
            let items1 = claimableRewards;
            if (claimableRewards == null) {
              items1 = [];
            }
            obj.claimableRewards = items1;
            obj.onSelect = function onSelect(arg0) {
              setSelectedGiftingPromotionReward(arg0);
              navigation.navigate(defaultSelection(10667).PremiumGiftScreens.CUSTOMIZATION);
            };
            navigation.navigate(PremiumGiftModal.PremiumGiftScreens.REWARD_SELECT, obj);
          }
        };
        obj11.disabled = tmp9;
        obj11.accessibilityRole = "button";
        let stringResult1;
        if (!tmp9) {
          const intl2 = tmp4(1114).intl;
          stringResult1 = intl2.string(tmp4(1114).t.bt75uw);
        }
        obj11.accessibilityLabel = stringResult1;
        const obj12 = { style: tmp3.previewDetails, product, title: null, subtitle: null };
        const intl3 = tmp4(1114).intl;
        obj12.title = intl3.string(tmp4(1114).t.Rh4oem);
        let name;
        if (product != null) {
          name = product.name;
        }
        obj12.subtitle = name;
        const items5 = [closure_9(tmp4(10759).PremiumGiftPromotionCollectibleRewardDetails, obj12), ];
        let tmp26Result = !tmp9;
        if (!tmp9) {
          tmp26Result = tmp26(tmp4(10255).PencilIcon, { size: "sm" });
        }
        items5[1] = tmp26Result;
        obj11.children = items5;
        tmp22Result = tmp19(claimableRewards, obj11);
      }
    }
  }
  tmp22Result = null;
  if (GiftingBadgeExperiment.useConfig({ location: "PremiumGiftPurchaseButton" }).enabled) {
    tmp22Result = null;
    if (null != nextTier) {
      const obj13 = { giftsToNextTier: stateFromStoresObject.giftsToNextTier, nextTierName: null, nextTierIcon: null, analyticsLocation: null };
      let str2 = nextTier.name;
      if (str2 == null) {
        str2 = "";
      }
      obj13.nextTierName = str2;
      obj13.nextTierIcon = nextTier.simple_icon_url;
      obj13.analyticsLocation = tmp(7182).PREMIUM_GIFT_CUSTOMIZATION;
      tmp22Result = closure_9(tmp(10761), obj13);
      const tmpResult8 = tmp(10761);
    }
  }
};
