// Module ID: 13151
// Function ID: 13152
// Name: InlinePriceTag
// Dependencies: [19, 17, 7237, 1076, 1074, 21, 4560, 576, 4556, 1889, 7553, 7554, 8843, 1114, 8179, 4218, 13152, 8875, 8854, 13153, 504, 8836, 8867, 1115, 8868, 8668, 2]
// Exports: default

// Module 13151 (InlinePriceTag)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1889 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4218 */;
import Text_Text from "Text/Text" /* 4556 */;
import CollectiblesUtils from "CollectiblesUtils" /* 7554 */;
import useCurrentUser from "useCurrentUser" /* 8179 */;
import useCanPurchaseFrames from "useCanPurchaseFrames" /* 8836 */;
import collectibles_CollectiblesUtils from "collectibles/CollectiblesUtils" /* 8854 */;
import useProductDisableState from "useProductDisableState" /* 8875 */;
import useOpenNitroSubscribeActionSheetDefault from "useOpenNitroSubscribeActionSheet" /* 13152 */;
import useVirtualCurrencyData from "useVirtualCurrencyData" /* 13153 */;
import noop from "module_19" /* 19 */;
import IAPStore from "IAPStore" /* 7237 */;

require = fn;
function PriceTag(accessibilityLabel) {
  let str = accessibilityLabel.color;
  ({ priceFormatted, style } = accessibilityLabel);
  if (str === undefined) {
    str = "interactive-text-active";
  }
  ({ variant, icon } = accessibilityLabel);
  if (variant === undefined) {
    variant = "text-md/medium";
  }
  const obj = { children: null };
  const items = [icon, ];
  const obj2 = { variant, style: null, color: str, accessibilityLabel: accessibilityLabel.accessibilityLabel, children: priceFormatted };
  const items1 = [closure_12().priceTag, style];
  obj2.style = items1;
  items[1] = React7(Text_Text.Text, obj2);
  obj.children = items;
  return closure_1_11(closure_1_10, obj);
}
function OrbsPriceTag(arg0) {
  ({ vcData, product } = arg0);
  ({ isProductDisabled, eligibleForShopDiscount } = arg0);
  const tmp = closure_12();
  if (null == vcData.price) {
    return null;
  } else {
    let result = product.type === CollectiblesItemType.CollectiblesItemType.BUNDLE;
    if (result) {
      result = tmp16(7553).isOrbsExclusiveProduct(product);
      const tmp16Result = tmp16(7553);
    }
    const productDiscount = CollectiblesUtils.getProductDiscount(product, eligibleForShopDiscount, constants2.DISCORD_ORB);
    ({ original, discountPercentage } = productDiscount);
    if (result) {
      result = discountPercentage >= tmp16(7554).DISCOUNT_DISPLAY_MINIMUM_THRESHOLD;
    }
    const items = [tmp.priceTagRow, ];
    const canAfford = vcData.canAfford;
    let disabled = !canAfford;
    if (canAfford) {
      disabled = isProductDisabled;
    }
    if (disabled) {
      disabled = tmp.disabled;
    }
    const obj = { style: null, children: null };
    items[1] = disabled;
    obj.style = items;
    let tmp7 = result;
    if (result) {
      const obj2 = { priceFormatted: original.toString(), variant: "text-md/medium", style: tmp.strikedOrbPrice, icon: null, accessibilityLabel: null };
      const obj3 = { color: "interactive-text-active", size: "sm", style: tmp.orbsIcon };
      obj2.icon = React7(tmp16(8843).OrbsIcon, obj3);
      const intl = tmp16(1114).intl;
      const obj4 = { orbAmount: original.toString() };
      obj2.accessibilityLabel = intl.formatToPlainString(tmp16(1114).t.QfcKZ5, obj4);
      tmp7 = React7(PriceTag, obj2);
    }
    const items1 = [tmp7, , ];
    const obj5 = { priceFormatted: vcData.price.amount.toString(), variant: "text-md/semibold", icon: null, accessibilityLabel: null };
    let tmp10Result;
    if (!result) {
      const obj6 = { color: "interactive-text-active", size: "sm", style: tmp.orbsIcon };
      tmp10Result = tmp10(tmp16(8843).OrbsIcon, obj6);
    }
    obj5.icon = tmp10Result;
    const intl2 = tmp16(1114).intl;
    const formatToPlainString = intl2.formatToPlainString;
    const t = tmp16(1114).t;
    if (result) {
      const obj7 = { orbAmount: vcData.price.amount.toString(), discountPercentage };
      let formatToPlainStringResult = formatToPlainString(t.ckguyq, obj7);
    } else {
      const obj8 = { orbAmount: vcData.price.amount.toString() };
      formatToPlainStringResult = formatToPlainString(t["a/Y8PK"], obj8);
    }
    obj5.accessibilityLabel = formatToPlainStringResult;
    items1[1] = React7(PriceTag, obj5);
    let tmp10Result2 = null;
    if (result) {
      const obj9 = { discountPercentage };
      tmp10Result2 = tmp10(BundleDiscountV2, obj9);
    }
    items1[2] = tmp10Result2;
    obj.children = items1;
    return closure_1_11(React4, obj);
  }
}
function BundleDiscountV2(discountPercentage) {
  discountPercentage = discountPercentage.discountPercentage;
  let tmp4 = null;
  if (discountPercentage >= CollectiblesUtils.DISCOUNT_DISPLAY_MINIMUM_THRESHOLD) {
    const obj = { style: tmp.discount, children: null };
    const obj2 = { variant: "text-md/normal", color: "text-feedback-positive", children: null };
    const items = ["-", discountPercentage, "%"];
    obj2.children = items;
    obj.children = closure_1_11(Text_Text.Text, obj2);
    tmp4 = React7(React4, obj);
  }
  return tmp4;
}
get_ActivityIndicator = fn(17);
({ Pressable: c3, View: closure_4 } = get_ActivityIndicator);
const ShopCtaEnum = fn(1076).ShopCtaEnum;
const Constants = fn(1074);
({ AnalyticsSections: closure_7, CurrencyCodes: closure_8 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_9, Fragment: c10, jsxs: closure_11 } = jsxProd);
let createStyles = fn(4560);
let obj2 = { priceTag: { flexDirection: "row", alignItems: "center" }, strikedPrice: { textDecorationLine: "line-through", textDecorationStyle: "solid", opacity: 0.7 }, strikedOrbPrice: { textDecorationLine: "line-through", textDecorationStyle: "solid", opacity: 0.7, marginRight: 4 }, regularPrice: {}, nitroIcon: { width: 20, height: 20, marginLeft: 8, marginRight: 4 }, nitroIconSubscribeNow: { marginLeft: 0 }, container: { flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between" }, priceTagRow: { flexDirection: "row", alignItems: "center" }, priceTagColumn: { flexDirection: "column", alignItems: "flex-start", flexShrink: 1 }, underline: { textDecorationLine: "underline" }, subscribeNowPressable: { marginBottom: -2, marginTop: nativeDefault.space.PX_8, flexDirection: "row", alignItems: "center" }, androidTextPadding: { paddingBottom: 2 }, orbsIcon: { marginRight: 4 }, disabled: { opacity: 0.5 } };
let closure_12 = createStyles.createStyles(obj2);
createStyles = fn(4560);
let closure_15 = createStyles.createStyles(() => {
  const discount = { backgroundColor: "rgba(46, 204, 113, 0.25)", flexDirection: "row", flexShrink: 1, borderRadius: nativeDefault.radii.xs - 1, paddingHorizontal: 6, marginLeft: 6, paddingTop: null, paddingBottom: null };
  let num;
  if (obj2.isAndroid()) {
    num = 0;
  }
  discount.paddingTop = num;
  obj2 = PlatformUtils;
  let num2;
  if (tmp2Result.isAndroid()) {
    num2 = 2;
  }
  discount.paddingBottom = num2;
  return { discount };
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/InlinePriceTag.tsx");

export default function InlinePriceTag(arg0) {
  ({ product, onTrackPress: require } = arg0);
  const tmp = closure_12();
  importDefault = tmp;
  const currentUser = useCurrentUser.useCurrentUser();
  const shopDiscountSource = CollectiblesUtils.getShopDiscountSource(currentUser);
  const canUseShopDiscountsResult = PremiumUtilsDefault.canUseShopDiscounts(currentUser);
  dependencyMap = useOpenNitroSubscribeActionSheetDefault(constants.SHOP_PRODUCT_DETAILS);
  const isDisabled = useProductDisableState.useProductDisableState(product.skuId).isDisabled;
  const formattedPriceForCollectiblesProduct = collectibles_CollectiblesUtils.getFormattedPriceForCollectiblesProduct(product, false, true);
  const virtualCurrencyData = useVirtualCurrencyData.useVirtualCurrencyData(product, canUseShopDiscountsResult);
  const items = [IAPStore];
  const stateFromStores = initialize.useStateFromStores(items, () => fetchingGoogleSkus.isFetchingGoogleSkus());
  const isProfileFramesEarlyAccessPhase = useCanPurchaseFrames.useIsProfileFramesEarlyAccessPhase("InlinePriceTag");
  if (stateFromStores) {
    if (null == formattedPriceForCollectiblesProduct) {
      return closure_9(tmp2(8867).CollectiblesShopPricePlaceholder, {});
    }
  }
  if (null == formattedPriceForCollectiblesProduct) {
    let tmp30 = null;
    if (null != virtualCurrencyData.price) {
      const obj9 = { vcData: virtualCurrencyData, isProductDisabled: isDisabled, product, eligibleForShopDiscount: canUseShopDiscountsResult };
      tmp30 = closure_9(OrbsPriceTag, obj9);
    }
    return tmp30;
  } else {
    let tmp13 = canUseShopDiscountsResult;
    if (!canUseShopDiscountsResult) {
      tmp13 = tmp11;
    }
    const formattedPriceForCollectiblesProduct1 = tmp2(8854).getFormattedPriceForCollectiblesProduct(product, true, true);
    const tmp2Result = tmp2(8854);
    const obj10 = { style: tmp.container, children: null };
    const obj11 = { style: tmp.priceTagColumn, children: null };
    const obj12 = { style: tmp.priceTagRow, children: null };
    const obj13 = { priceFormatted: formattedPriceForCollectiblesProduct, variant: "heading-md/semibold", style: tmp13 ? tmp.strikedPrice : tmp.regularPrice, color: "interactive-text-active", accessibilityLabel: null };
    const intl = tmp2(1114).intl;
    const obj14 = { price: formattedPriceForCollectiblesProduct };
    obj13.accessibilityLabel = intl.formatToPlainString(tmp2(1114).t.sPvyr8, obj14);
    const items1 = [closure_9(PriceTag, obj13), , ];
    let tmp17Result = null;
    if (product.type === tmp2(1889).CollectiblesItemType.BUNDLE) {
      tmp17Result = null;
      if (!canUseShopDiscountsResult) {
        const obj15 = { discountPercentage: tmp2Result4.getProductDiscount(product, canUseShopDiscountsResult).discountPercentage };
        tmp17Result = tmp17(BundleDiscountV2, obj15);
      }
    }
    items1[1] = tmp17Result;
    if (!(null != formattedPriceForCollectiblesProduct1 && tmp13)) {
      items1[2] = tmp21;
      obj12.children = items1;
      const items2 = [tmp15(tmp16, obj12), ];
      let tmp17Result5 = null != formattedPriceForCollectiblesProduct1 && !tmp13;
      if (tmp17Result5) {
        const obj16 = { style: tmp.priceTagRow, children: null };
        const obj17 = {
          onPress() {
                  if (require != null) {
                    tmp(ShopCtaEnum.SUBSCRIBE_NOW);
                  }
                  closure_2();
                },
          style: tmp.subscribeNowPressable,
          accessibilityRole: "button",
          children: null
        };
        const obj18 = { color: "interactive-text-default", style: null };
        const items3 = [, ];
        ({ nitroIcon: arr4[0], nitroIconSubscribeNow: arr4[1] } = tmp);
        obj18.style = items3;
        const items4 = [tmp17(tmp2(8668).NitroWheelIcon, obj18), ];
        let androidTextPadding;
        if (tmp2Result5.isAndroid()) {
          androidTextPadding = tmp.androidTextPadding;
        }
        const obj19 = { variant: "text-md/normal", color: "interactive-text-default", style: androidTextPadding, children: null };
        const intl3 = tmp2(1114).intl;
        const obj20 = {
          price: formattedPriceForCollectiblesProduct1,
          subscribeNowHook(children, arg1) {
                  return React7(Text_Text.Text, { variant: "text-md/normal", style: underline.underline, children }, arg1);
                }
        };
        obj19.children = intl3.format(tmp2(1114).t.Kxw2LT, obj20);
        items4[1] = tmp17(tmp2(4556).Text, obj19);
        obj17.children = items4;
        obj16.children = tmp15(closure_3, obj17);
        tmp17Result5 = tmp17(tmp16, obj16);
        tmp2Result5 = tmp2(1115);
      }
      items2[1] = tmp17Result5;
      obj11.children = items2;
      const items5 = [tmp15(tmp16, obj11), ];
      let tmp17Result6 = null != virtualCurrencyData.price;
      if (tmp17Result6) {
        const obj21 = { vcData: virtualCurrencyData, isProductDisabled: isDisabled, product, eligibleForShopDiscount: canUseShopDiscountsResult };
        tmp17Result6 = tmp17(OrbsPriceTag, obj21);
      }
      items5[1] = tmp17Result6;
      obj10.children = items5;
      return tmp15(tmp16, obj10);
    } else {
      const obj22 = { priceFormatted: formattedPriceForCollectiblesProduct1, variant: "text-md/medium", color: "interactive-text-active", accessibilityLabel: null, style: null, icon: null };
      const intl2 = tmp2(1114).intl;
      const obj23 = { price: formattedPriceForCollectiblesProduct1 };
      obj22.accessibilityLabel = intl2.formatToPlainString(tmp2(1114).t.kWkpdG, obj23);
      let androidTextPadding1;
      if (tmp2Result6.isAndroid()) {
        androidTextPadding1 = tmp.androidTextPadding;
      }
      obj22.style = androidTextPadding1;
      if (shopDiscountSource === tmp2(7554).ShopDiscountSource.THIRDPARTY) {
        const obj24 = { color: "interactive-text-active", style: tmp.nitroIcon };
        let tmp17Result7 = tmp17(tmp2(8868).TagIcon, obj24);
      } else {
        const obj25 = { color: "interactive-text-active", style: tmp.nitroIcon };
        tmp17Result7 = tmp17(tmp2(8668).NitroWheelIcon, obj25);
      }
      obj22.icon = tmp17Result7;
      tmp17(tmp18, obj22);
      tmp2Result6 = tmp2(1115);
    }
    tmp2Result4 = tmp2(7554);
  }
};
