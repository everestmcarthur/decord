// Module ID: 13155
// Function ID: 13156
// Name: ProductDetailsActionSheetPurchaseSection
// Dependencies: [32, 19, 17, 7558, 1076, 1074, 11089, 1373, 21, 4560, 576, 8098, 11035, 4527, 11012, 1114, 13153, 8875, 8848, 1483, 7162, 4763, 13156, 1896, 7541, 13160, 1077, 13161, 11082, 8843, 4556, 4976, 1889, 4495, 4411, 4262, 8179, 504, 11161, 4218, 7554, 7553, 8856, 11088, 13163, 13164, 10712, 13166, 1611, 4987, 8457, 4975, 1116, 7182, 2024, 13167, 2]
// Exports: default

// Module 13155 (ProductDetailsActionSheetPurchaseSection)
import nativeDefault from "native" /* 576 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1889 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import Text_Text from "Text/Text" /* 4556 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4763 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7162 */;
import OrbsIcon from "OrbsIcon" /* 8843 */;
import openGiftModal from "openGiftModal" /* 11012 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import CollectiblesPurchaseStore from "CollectiblesPurchaseStore" /* 7558 */;

require = fn;
function GiftButton(onTrackPress) {
  ({ product: require, analyticsLocations: importDefault, variant } = onTrackPress);
  if (variant === undefined) {
    variant = "primary";
  }
  onTrackPress = onTrackPress.onTrackPress;
  let obj = { size: "lg", variant, icon: null, onPress: null, accessibilityLabel: null };
  if ("primary" === variant) {
    let TEXT_STRONG = require("native").colors.WHITE;
  } else {
    TEXT_STRONG = require("native").colors.TEXT_STRONG;
  }
  obj.icon = closure_15(require("GiftIcon").GiftIcon, { size: "md", color: TEXT_STRONG });
  obj.onPress = function onPress() {
    if (onTrackPress != null) {
      tmp(constants.SEND_AS_GIFT);
    }
    ActionSheetActionCreatorsDefault.hideAllActionSheets();
    openGiftModal.openShopGiftModal({ skuId: skuId.skuId, analyticsLocations });
  };
  const intl = tmp2(tmp3[15]).intl;
  obj.accessibilityLabel = intl.string(require("util").t.PEjaCx);
  return closure_15(require("IconButton").IconButton, obj);
}
function VCButton(balance) {
  balance = balance.balance;
  const product = balance.product;
  importDefault = product;
  let flag = balance.hasShopDiscount;
  if (flag === undefined) {
    flag = false;
  }
  ({ onTrackPress: dependencyMap, stageCollectibleChangeForEditProfile } = balance);
  let navigation;
  let analyticsLocations;
  closure_7 = undefined;
  let color;
  const tmp = closure_20();
  noop = tmp;
  const virtualCurrencyData = balance(13153).useVirtualCurrencyData(product, flag);
  ({ price, canAfford } = virtualCurrencyData);
  let obj = balance(13153);
  let isPartiallyOwnedBundle = balance(8875).useProductDisableState(product.skuId).isDisabled;
  const obj2 = balance(8875);
  if (!isPartiallyOwnedBundle) {
    isPartiallyOwnedBundle = !canAfford;
  }
  if (!isPartiallyOwnedBundle) {
    isPartiallyOwnedBundle = obj3.useProductPurchaseState(product).isPartiallyOwnedBundle;
  }
  obj3 = balance(8848);
  navigation = balance(1483).useNavigation();
  analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
  const items = [navigation, product, balance, analyticsLocations, stageCollectibleChangeForEditProfile];
  closure_7 = noop.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideAllActionSheets();
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(13156, dependencyMap.paths), {
      skuId: product.skuId,
      analyticsLocations,
      onCheckoutSuccess(arg0) {
        const collectiblesPurchases = balance(7541).fetchCollectiblesPurchases();
        const obj = balance(7541);
        product(4763).popWithKey(ORB_CHECKOUT_MODAL);
        if (closure_1_1.skuId === constants.ORB_PROFILE_BADGE) {
          const obj3 = {
            modalKey,
            onPressViewBadge() {
                return navigation.navigate(constants3.YOU, { showOrbsBadgeCoachmark: true });
              },
            orbBalancePriorToPurchase
          };
          tmp4(4763).pushLazy(tmp(1896)(13160, tmp2.paths), obj3, modalKey);
          const tmp4Result = tmp4(4763);
        } else {
          const ALL = tmp(1077).FractionalPremiumSKUsSets.ALL;
          if (ALL.has(tmp6.skuId)) {
            const obj4 = { skuId: tmp6.skuId, consumed: null, onPressExplorePerks: null, onPressViewCredits: null };
            const first = arg0.entitlements[0];
            let flag;
            const tmp4Result3 = tmp4(4527);
            if (first != null) {
              flag = first.consumed;
            }
            if (flag == null) {
              flag = false;
            }
            obj4.consumed = flag;
            obj4.onPressExplorePerks = function onPressExplorePerks() {
              navigation.navigate(constants2.PREMIUM);
              closure_2_1(4527).hideActionSheet();
            };
            obj4.onPressViewCredits = function onPressViewCredits() {
              navigation.navigate(constants2.PREMIUM_MANAGE_PLAN);
              closure_2_1(4527).hideActionSheet();
            };
            tmp4Result3.openLazy(tmp(1896)(13161, tmp2.paths), "FractionalNitroCollectedActionSheet", obj4);
            const tmp10 = tmp(1896)(13161, tmp2.paths);
          } else {
            const obj5 = { product: tmp6, useCategoryImage: true, showOrbBalancePill: true, orbBalancePriorToPurchase, stageCollectibleChangeForEditProfile };
            tmp4(11082).open(obj5);
            const tmp4Result4 = tmp4(11082);
          }
        }
      }
    }, ORB_CHECKOUT_MODAL);
  }, items);
  if (null == price) {
    return null;
  } else {
    const colors = nativeDefault.colors;
    color = isPartiallyOwnedBundle ? colors.INTERACTIVE_TEXT_ACTIVE : colors.WHITE;
    let str = "text-overlay-light";
    if (isPartiallyOwnedBundle) {
      str = "interactive-text-active";
    }
    const intl = tmp2(1114).intl;
    let obj4 = {
      orbPrice: price.amount,
      orbIconHook() {
          return __initData(OrbsIcon.OrbsIcon, { size: "sm", color }, "orbs-icon");
        }
    };
    const formatResult = intl.format(tmp2(1114).t.JC15qj, obj4);
    const _Array = Array;
    let arr2 = formatResult;
    if (!Array.isArray(formatResult)) {
      const items1 = [formatResult];
      arr2 = items1;
    }
    let obj5 = { style: tmp.orbsButtonLabel, accessibilityLabel: null, children: null };
    const intl2 = tmp2(1114).intl;
    const obj6 = { orbPrice: price.amount };
    obj5.accessibilityLabel = intl2.formatToPlainString(tmp2(1114).t.yi41qQ, obj6);
    obj5.children = arr2.map((children, index) => {
      if (typeof children === "string") {
        const obj = { style: orbsButtonText.orbsButtonText, variant: "text-md/semibold", color: str, children };
        let tmp7 = __initData(Text_Text.Text, obj, index);
      } else {
        tmp7 = children;
      }
      return tmp7;
    });
    const obj7 = { style: tmp.buttonContainer, children: null };
    const obj8 = {
      loading: false,
      textElement: closure_15(navigation, obj5),
      onPress() {
          if (dependencyMap != null) {
            tmp(constants.BUY_WITH_ORBS);
          }
          closure_7();
        },
      disabled: isPartiallyOwnedBundle,
      size: "lg",
      variant: null,
      grow: true
    };
    let str2 = "primary";
    if (isPartiallyOwnedBundle) {
      str2 = "secondary";
    }
    obj8.variant = str2;
    obj7.children = closure_15(tmp2(4976).BaseTextButton, obj8);
    return closure_15(navigation, obj7);
  }
  const tmp2Result = balance(1483);
}
function PurchaseDisclaimer(arg0) {
  ({ product, buyButtonLabel } = arg0);
  const obj = { style: closure_20().disclaimer, variant: "text-xxs/normal", color: "interactive-text-active", children: null };
  let formatResult = product.type !== CollectiblesItemType.CollectiblesItemType.EXTERNAL_SKU;
  if (formatResult) {
    const intl = tmp3(1114).intl;
    const obj2 = { buyButtonLabel, paidServiceTermURL: constants3.PAID_TERMS };
    formatResult = intl.format(tmp3(1114).t.iIglwJ, obj2);
  }
  obj.children = formatResult;
  return __initData(Text_Text.Text, obj);
}
const View = fn(17).View;
const CollectiblesShopConstants = fn(1076);
({ EXTERNAL_PRODUCT_SKU_IDS: closure_7, ShopCtaEnum: closure_8 } = CollectiblesShopConstants);
const Constants = fn(1074);
({ HelpdeskArticles: closure_9, MarketingURLs: c10, UserSettingsSections: closure_11 } = Constants);
const RootNavigatorScreen = fn(11089).RootNavigatorScreen;
const PremiumConstants = fn(1373);
({ PremiumTypes: map1, SubscriptionIntervalTypes: closure_14 } = PremiumConstants);
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16, Fragment: closure_17 } = jsxProd);
const ORB_BADGE_COLLECTED_MODAL = "ORB_BADGE_COLLECTED_MODAL";
const ORB_CHECKOUT_MODAL = "ORB_CHECKOUT_MODAL";
const createStyles = fn(4560);
let obj2 = { container: { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_8 }, containerFramesEA: null, gradientOverlay: null, purchaseSection: null, disclaimer: null, buttonContainer: null, framesEAContainer: null, orbsButtonLabel: null, orbsButtonText: null };
let obj3 = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_8 };
obj2.containerFramesEA = { borderWidth: 1, borderStyle: "solid", borderColor: nativeDefault.colors.BORDER_MUTED };
obj2.gradientOverlay = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0 };
let obj4 = { borderWidth: 1, borderStyle: "solid", borderColor: nativeDefault.colors.BORDER_MUTED };
obj2.purchaseSection = { gap: nativeDefault.space.PX_12 };
obj2.disclaimer = { opacity: 0.75 };
let obj5 = { gap: nativeDefault.space.PX_12 };
obj2.buttonContainer = { flexDirection: "row", gap: nativeDefault.space.PX_12 };
let obj6 = { flexDirection: "row", gap: nativeDefault.space.PX_12 };
obj2.framesEAContainer = { flexDirection: "column", gap: nativeDefault.space.PX_8 };
obj2.orbsButtonLabel = { flexDirection: "row", alignItems: "center" };
obj2.orbsButtonText = { flexShrink: 1 };
let closure_20 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/ProductDetailsActionSheetPurchaseSection.tsx");

export default function ProductDetailsActionSheetPurchaseSection(product) {
  product = product.product;
  require = product;
  ({ analyticsLocations, isBuying, onStartPurchase: importDefault, onTrackPress } = product);
  const stageCollectibleChangeForEditProfile = product.stageCollectibleChangeForEditProfile;
  _slicedToArray = undefined;
  c4 = undefined;
  const tmp = closure_20();
  const tmp3 = onTrackPress;
  const tmp4 = require("useTheme")();
  const isThemeDarkResult = require("shared").isThemeDark(tmp4);
  const obj = require("shared");
  const token = require("useToken").useToken(require("native").colors.MOBILE_ACTIONSHEET_BACKGROUND);
  const obj2 = require("useToken");
  const currentUser = require("useCurrentUser").useCurrentUser();
  const obj3 = require("useCurrentUser");
  const productPurchaseState = require("useProductPurchaseState").useProductPurchaseState(product);
  ({ isPurchased, isPartiallyOwnedBundle } = productPurchaseState);
  const obj4 = require("useProductPurchaseState");
  let items = [CollectiblesPurchaseStore];
  const items1 = [product];
  const obj5 = require("initialize");
  const isPremiumSubscriber = require("useIsPremiumSubscriber").useIsPremiumSubscriber(TIER_2.TIER_2);
  const obj6 = require("useIsPremiumSubscriber");
  const canUseShopDiscountsResult = require("PremiumUtils").canUseShopDiscounts(currentUser);
  const obj7 = require("PremiumUtils");
  const result = require("CollectiblesUtils").isPremiumCollectiblesProduct(product);
  const obj8 = require("CollectiblesUtils");
  const result1 = require("CollectiblesUtils").isFreeCollectiblesProduct(product);
  const obj9 = require("CollectiblesUtils");
  const result2 = require("CollectiblesProductUtils").isOrbsExclusiveProduct(product);
  const obj10 = require("CollectiblesProductUtils");
  const balance = require("module_8856").useFetchVirtualCurrencyBalance().balance;
  const obj11 = require("module_8856");
  const canAfford = require("useVirtualCurrencyData").useVirtualCurrencyData(product, canUseShopDiscountsResult).canAfford;
  const obj12 = require("useVirtualCurrencyData");
  const handleUseNow = require("useHandleUseNow").useHandleUseNow({ product, analyticsLocations, stageCollectibleChangeForEditProfile });
  ({ handleUseNow: c3, handleEditProfile: c4, isApplying, canUseNow } = handleUseNow);
  const obj13 = require("useHandleUseNow");
  const handleClaim = require("useHandleClaim").useHandleClaim({ product, stageCollectibleChangeForEditProfile }).handleClaim;
  const tmp16 = require("useShouldShowPremiumProfileFrameCTA")({ location: "ProductDetailsActionSheetPurchaseSection", product });
  let tmp21Result = tmp16;
  if (tmp16) {
    tmp21Result = !isPurchased;
  }
  const obj14 = require("useHandleClaim");
  const tmp5Result = require("useIsEligibleForBogoOffer");
  const tmp19 = require("useIsEligibleForBogoOffer").useIsEligibleForBogoOffer() ? constants.MONTH : constants.YEAR;
  let canGiftProduct = require("useCanGiftProduct").useCanGiftProduct(product);
  let PX_16 = tmp2(tmp3[48])().bottom;
  const items2 = [tmp.container, , ];
  let containerFramesEA = tmp21Result;
  if (tmp21Result) {
    containerFramesEA = tmp.containerFramesEA;
  }
  items2[1] = containerFramesEA;
  if (PX_16 == null) {
    PX_16 = tmp2(tmp3[10]).space.PX_16;
  }
  const obj15 = { style: items2, children: null };
  items2[2] = { paddingBottom: PX_16 };
  if (tmp21Result) {
    const obj16 = { colors: ["rgba(160, 86, 242, 0.45)", "rgba(22, 26, 138, 0.45)"], locations: [0.0854, 0.7847], start: { x: 0, y: 0 }, end: { x: 1, y: 1 }, style: null, pointerEvents: "none" };
    const items3 = [tmp.gradientOverlay, ];
    let obj17 = !isThemeDarkResult;
    if (!isThemeDarkResult) {
      obj17 = { opacity: 0.4 };
    }
    const obj18 = { children: null };
    items3[1] = obj17;
    obj16.style = items3;
    const items4 = [closure_15(tmp2(tmp3[49]), obj16), ];
    const obj19 = { style: tmp.gradientOverlay, preserveAspectRatio: "none", viewBox: "0 0 100 100", pointerEvents: "none", children: null };
    const tmp23 = closure_17;
    const tmp2Result = tmp2(tmp3[49]);
    const obj20 = { children: null };
    const obj21 = { id: "frameEAVignette", cx: "50%", cy: "100%", rx: "100%", ry: "100%", fx: "50%", fy: "100%", children: null };
    const obj22 = { offset: "60%", stopColor: token, stopOpacity: 1 };
    const items5 = [closure_15(tmp5(tmp3[50]).Stop, obj22), ];
    const obj23 = { offset: "100%", stopColor: token, stopOpacity: 0 };
    items5[1] = closure_15(tmp5(tmp3[50]).Stop, obj23);
    obj21.children = items5;
    obj20.children = tmp21(tmp5(tmp3[50]).RadialGradient, obj21);
    const items6 = [closure_15(tmp5(tmp3[50]).Defs, obj20), closure_15(tmp5(tmp3[50]).Rect, { x: "0", y: "0", width: "100", height: "100", fill: "url(#frameEAVignette)" })];
    obj19.children = items6;
    items4[1] = tmp21(tmp2(tmp3[50]), obj19);
    obj18.children = items4;
    tmp21Result = tmp21(tmp23, obj18);
    const tmp2Result4 = tmp2(tmp3[50]);
  }
  const items7 = [tmp21Result, ];
  if (isPurchased) {
    let tmp21Result4 = product.type !== tmp5(tmp3[32]).CollectiblesItemType.EXTERNAL_SKU;
    if (tmp21Result4) {
      const obj24 = { style: tmp.buttonContainer, children: null };
      if (canUseNow) {
        const obj25 = { loading: isApplying, text: null, onPress: null, size: "lg", grow: true };
        const intl13 = tmp5(tmp3[15]).intl;
        obj25.text = intl13.string(tmp5(tmp3[15]).t.MAS7uK);
        obj25.onPress = function onPress() {
          if (onTrackPress != null) {
            tmp(constants.USE_NOW);
          }
          _undefined();
        };
        let obj26 = obj25;
      } else {
        obj26 = { text: null, onPress: null, size: "lg", grow: true };
        const intl12 = tmp5(tmp3[15]).intl;
        obj26.text = intl12.string(tmp5(tmp3[15]).t["2p2aYz"]);
        obj26.onPress = function onPress() {
          if (onTrackPress != null) {
            tmp(constants.EDIT_PROFILE);
          }
          _undefined2();
        };
      }
      const items8 = [closure_15(tmp5(tmp3[51]).Button, obj26), ];
      if (canGiftProduct) {
        const obj27 = { product, analyticsLocations, onTrackPress };
        canGiftProduct = tmp53(GiftButton, obj27);
      }
      items8[1] = canGiftProduct;
      obj24.children = items8;
      tmp21Result4 = tmp21(tmp22, obj24);
    }
    let tmp21Result6 = tmp21Result4;
  } else if (tmp16) {
    const tmp5Result4 = tmp5(tmp3[52]);
    const t = tmp5(tmp3[15]).t;
    const isAndroidResult = tmp5(tmp3[52]).isAndroid();
    const obj28 = { value: null, children: null };
    const items9 = [];
    const tmp45 = tmp5(tmp3[52]).isAndroid() ? t.COObWR : t["7wpqfj"];
    items9[HermesBuiltin.arraySpread(analyticsLocations, 0)] = tmp2(tmp3[53]).PROFILE_FRAMES_EA_MARKETING;
    obj28.value = items9;
    const obj29 = { style: tmp.framesEAContainer, children: null };
    const obj30 = { variant: "text-xs/semibold", color: "text-strong", children: null };
    const intl8 = tmp5(tmp3[15]).intl;
    const obj31 = { articleURL: null };
    const arraySpreadResult = HermesBuiltin.arraySpread(analyticsLocations, 0);
    obj31.articleURL = tmp2(tmp3[54]).getArticleURL(constants2.SHOP_FRAMES_EARLY_ACCESS);
    obj30.children = intl8.format(tmp5(tmp3[15]).t["3cglst"], obj31);
    const items10 = [closure_15(tmp5(tmp3[30]).Text, obj30), , ];
    const obj32 = { onTrackPress, text: null };
    const intl9 = tmp5(tmp3[15]).intl;
    obj32.text = intl9.string(tmp5(tmp3[15]).t["9wfL34"]);
    items10[1] = closure_15(tmp5(tmp3[55]).UnlockWithNitroButton, obj32);
    const obj33 = { variant: "text-xxs/normal", children: null };
    const intl10 = tmp5(tmp3[15]).intl;
    const obj34 = { paidURL: constants3.PAID_TERMS, interval: null, ctaText: null };
    const tmp2Result5 = tmp2(tmp3[54]);
    obj34.interval = tmp2(tmp3[39]).getIntervalStringAsNoun(tmp19);
    const intl11 = tmp5(tmp3[15]).intl;
    obj34.ctaText = intl11.string(tmp5(tmp3[15]).t["9wfL34"]);
    obj33.children = intl10.format(tmp45, obj34);
    items10[2] = closure_15(tmp5(tmp3[30]).Text, obj33);
    obj29.children = items10;
    obj28.children = tmp21(tmp22, obj29);
    tmp21Result6 = closure_15(tmp5(tmp3[20]).AnalyticsLocationProvider, obj28);
    const tmp2Result6 = tmp2(tmp3[39]);
  } else {
    if (result) {
      if (!isPremiumSubscriber) {
        if (!result1) {
          const obj35 = { onTrackPress };
          tmp21Result6 = closure_15(tmp5(tmp3[55]).UnlockWithNitroButton, obj35);
        }
      }
    }
    if (!result1) {
      if (product.type === tmp5(tmp3[32]).CollectiblesItemType.BUNDLE) {
        const intl6 = tmp5(tmp3[15]).intl;
        let stringResult = intl6.string(tmp5(tmp3[15]).t.V1AWw0);
      } else if (product.type === tmp5(tmp3[32]).CollectiblesItemType.PROFILE_EFFECT) {
        const intl5 = tmp5(tmp3[15]).intl;
        stringResult = intl5.string(tmp5(tmp3[15]).t.kAeDcK);
      } else if (product.type === tmp5(tmp3[32]).CollectiblesItemType.NAMEPLATE) {
        const intl4 = tmp5(tmp3[15]).intl;
        stringResult = intl4.string(tmp5(tmp3[15]).t.H3vhqU);
      } else if (product.type === tmp5(tmp3[32]).CollectiblesItemType.AVATAR_DECORATION) {
        const intl3 = tmp5(tmp3[15]).intl;
        stringResult = intl3.string(tmp5(tmp3[15]).t.AQ0Veg);
      } else if (product.type === tmp5(tmp3[32]).CollectiblesItemType.PROFILE_FRAME) {
        const intl2 = tmp5(tmp3[15]).intl;
        stringResult = intl2.string(tmp5(tmp3[15]).t.BlSW1e);
      } else {
        const intl = tmp5(tmp3[15]).intl;
        stringResult = intl.string(tmp5(tmp3[15]).t.AQ0Veg);
      }
      const obj36 = { style: tmp.purchaseSection, children: null };
      let tmp30 = canAfford;
      if (canAfford) {
        const obj37 = { product, hasShopDiscount: canUseShopDiscountsResult, balance, onTrackPress, stageCollectibleChangeForEditProfile };
        tmp30 = closure_15(VCButton, obj37);
      }
      const items11 = [tmp30, , , ];
      let tmp21Result5 = !result2;
      if (!result2) {
        const obj38 = { style: tmp.buttonContainer, children: null };
        const obj39 = {
          loading: isBuying,
          text: stringResult,
          onPress() {
                  if (onTrackPress != null) {
                    tmp(constants.BUY_WITH_FIAT);
                  }
                  importDefault();
                },
          disabled: null,
          variant: null,
          size: "lg",
          grow: true
        };
        if (!isPartiallyOwnedBundle) {
          isPartiallyOwnedBundle = isBuying;
        }
        obj39.disabled = isPartiallyOwnedBundle;
        let str = "primary";
        let str2 = "primary";
        if (canAfford) {
          str2 = "secondary";
        }
        obj39.variant = str2;
        const items12 = [closure_15(tmp5(tmp3[51]).Button, obj39), ];
        let tmp34Result = canGiftProduct;
        if (canGiftProduct) {
          const obj40 = { product, analyticsLocations, variant: null, onTrackPress: null };
          if (canAfford) {
            str = "secondary";
          }
          obj40.variant = str;
          obj40.onTrackPress = onTrackPress;
          tmp34Result = tmp34(GiftButton, obj40);
        }
        items12[1] = tmp34Result;
        obj38.children = items12;
        tmp21Result5 = tmp21(tmp22, obj38);
      }
      items11[1] = tmp21Result5;
      let tmp37 = !canAfford;
      if (!canAfford) {
        const obj41 = { product, hasShopDiscount: canUseShopDiscountsResult, balance, onTrackPress, stageCollectibleChangeForEditProfile };
        tmp37 = closure_15(VCButton, obj41);
      }
      items11[2] = tmp37;
      let tmp40 = !result2;
      if (!result2) {
        const obj42 = { product, buyButtonLabel: stringResult };
        tmp40 = closure_15(PurchaseDisclaimer, obj42);
      }
      items11[3] = tmp40;
      obj36.children = items11;
      tmp21Result6 = tmp21(tmp22, obj36);
    }
    const obj43 = { text: null, loading: null, onPress: null, size: "lg", grow: true };
    const intl7 = tmp5(tmp3[15]).intl;
    obj43.text = intl7.string(tmp5(tmp3[15]).t.zp6caO);
    obj43.loading = _slicedToArray(obj5.useStateFromStoresArray(items, () => {
      const items = [CollectiblesPurchaseStore.isClaiming === product.skuId];
      return items;
    }, items1), 1)[0];
    obj43.onPress = function onPress() {
      if (onTrackPress != null) {
        tmp(constants.ADD_TO_COLLECTION);
      }
      handleClaim();
    };
    tmp21Result6 = closure_15(tmp5(tmp3[51]).Button, obj43);
  }
  items7[1] = tmp21Result6;
  obj15.children = items7;
  return closure_16(handleClaim, obj15);
};
