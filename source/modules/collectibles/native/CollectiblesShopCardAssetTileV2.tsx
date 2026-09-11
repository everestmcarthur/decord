// Module ID: 8936
// Function ID: 8937
// Name: CollectiblesShopCardAssetTileV2
// Dependencies: [32, 19, 17, 1076, 21, 8857, 576, 4607, 8889, 5147, 7627, 1889, 8257, 8891, 5639, 8937, 1077, 8938, 8904, 8893, 8916, 8918, 4456, 4308, 8858, 2]

// Module 8936 (CollectiblesShopCardAssetTileV2)
import nativeDefault from "native" /* 576 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1889 */;
import useToken from "useToken" /* 4308 */;
import ColorUtils from "ColorUtils" /* 4456 */;
import LockIcon from "LockIcon" /* 5147 */;
import FastImageDefault from "FastImage" /* 5639 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 7627 */;
import CollectiblesShopCardV2 from "CollectiblesShopCardV2" /* 8857 */;
import useDefaultVariantIndex from "useDefaultVariantIndex" /* 8858 */;
import CheckmarkLargeBoldIcon from "CheckmarkLargeBoldIcon" /* 8889 */;
import BundleSampleV2Default from "BundleSampleV2" /* 8891 */;
import ProfileEffectSampleV2Default from "ProfileEffectSampleV2" /* 8893 */;
import AvatarDecorationSampleV2Default from "AvatarDecorationSampleV2" /* 8904 */;
import ProfileFrameSamplePreviewDefault from "ProfileFrameSamplePreview" /* 8916 */;
import NameplateCardPreviewDefault from "NameplateCardPreview" /* 8918 */;
import _modDef8937 from "module_8937" /* 8937 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function PurchasedAssetOverlay() {
  const tmp = closure_10();
  const obj = { style: tmp.overlayContainer, children: React5(CheckmarkLargeBoldIcon.CheckmarkLargeBoldIcon, { size: "lg", style: tmp.overlayIcon }) };
  return React5(hasOwnProperty, obj);
}
function DisabledAssetOverlay() {
  const tmp = closure_10();
  const obj = { style: tmp.overlayContainer, children: React5(LockIcon.LockIcon, { size: "lg", style: tmp.overlayIcon }) };
  return React5(hasOwnProperty, obj);
}
function ProductPreview(arg0) {
  ({ product, isPurchased } = arg0);
  ({ isDisabled, disableBundleStaticBackground, muteBundleStaticBackground, cardWidth } = arg0);
  const tmp = closure_10();
  const productType = CollectiblesProductUtils.getProductType(product);
  if (productType !== CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT) {
    if (productType !== tmp2(1889).CollectiblesItemType.PROFILE_FRAME) {
      let str = "75%";
    }
    const items = [tmp.overlayContainer, , ];
    if (!isPurchased) {
      isPurchased = isDisabled;
    }
    if (isPurchased) {
      isPurchased = tmp.purchasedOrDisabled;
    }
    const obj2 = { style: null, renderToHardwareTextureAndroid: true, needsOffscreenAlphaCompositing: true, children: null };
    items[1] = isPurchased;
    const obj3 = { height: str };
    items[2] = obj3;
    obj2.style = items;
    const obj4 = { product, disableBundleStaticBackground, muteBundleStaticBackground, cardWidth };
    obj2.children = React5(ProductPreviewInner, obj4);
    return React5(hasOwnProperty, obj2);
  }
  str = "100%";
}
function ProductPreviewInner(arg0) {
  ({ product, cardWidth } = arg0);
  ({ disableBundleStaticBackground, muteBundleStaticBackground } = arg0);
  const tmp = closure_10();
  const shopProductItems = cardWidth(8257).useShopProductItems(product);
  const items = [cardWidth];
  ({ firstProfileEffect, firstAvatarDecoration, firstNameplate } = shopProductItems);
  const memo = noop.useMemo(() => {
    let COLLECTIBLES_SHOP_CARD_WIDTH = cardWidth;
    if (cardWidth == null) {
      COLLECTIBLES_SHOP_CARD_WIDTH = CollectiblesShopCardV2.COLLECTIBLES_SHOP_CARD_WIDTH;
    }
    const size = { width: COLLECTIBLES_SHOP_CARD_WIDTH, height: CollectiblesShopCardV2.COLLECTIBLES_SHOP_CARD_HEIGHT };
    return size;
  }, items);
  if (product.type === cardWidth(1889).CollectiblesItemType.BUNDLE) {
    const obj2 = { deco: firstAvatarDecoration, pfx: firstProfileEffect, nameplate: firstNameplate, size: "small", previewAssets: product.previewAssets, disableStaticBackground: disableBundleStaticBackground, mutedStaticBackground: muteBundleStaticBackground, targetSize: memo };
    return closure_7(BundleSampleV2Default, obj2);
  } else if (product.skuId === EXTERNAL_PRODUCT_SKU_IDS.ORB_PROFILE_BADGE) {
    const obj3 = { source: null, style: null };
    const obj4 = { uri: _modDef8937 };
    obj3.source = obj4;
    obj3.style = tmp.externalProductImage;
    return closure_7(FastImageDefault, obj3);
  } else {
    const ALL = tmp2(1077).FractionalPremiumSKUsSets.ALL;
    if (ALL.has(product.skuId)) {
      let size = { skuId: product.skuId, width: tmp2(8938).FRACTIONAL_NITRO_COIN_SIZE.CARD, height: tmp2(8938).FRACTIONAL_NITRO_COIN_SIZE.CARD };
      return closure_7(tmp2(8938).FractionalNitroCoinIllustration, size);
    } else {
      const first = _slicedToArray(product.items, 1)[0];
      let type;
      if (first != null) {
        type = first.type;
      }
      if (tmp2(1889).CollectiblesItemType.AVATAR_DECORATION === type) {
        const obj5 = { item: first, size: 100 };
        return closure_7(AvatarDecorationSampleV2Default, obj5);
      } else if (tmp2(1889).CollectiblesItemType.PROFILE_EFFECT === type) {
        const obj6 = { style: tmp.profileEffectContainer, children: null };
        const obj7 = { item: first, hideBackground: true };
        obj6.children = closure_7(ProfileEffectSampleV2Default, obj7);
        return closure_7(closure_5, obj6);
      } else if (tmp2(1889).CollectiblesItemType.PROFILE_FRAME === type) {
        const obj8 = { style: tmp.profileFrameContainer, children: null };
        const obj9 = { profileFrame: first, previewWidth: tmp2(8857).COLLECTIBLES_SHOP_CARD_WIDTH - nativeDefault.space.PX_32, previewHeight, profileBackgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
        obj8.children = closure_7(ProfileFrameSamplePreviewDefault, obj9);
        return closure_7(closure_5, obj8);
      } else if (tmp2(1889).CollectiblesItemType.NAMEPLATE === type) {
        const obj10 = { item: first };
        return closure_7(NameplateCardPreviewDefault, obj10);
      } else {
        return null;
      }
    }
  }
  const obj = cardWidth(8257);
}
function AssetTileInternal(solidBackground) {
  let flag = solidBackground.solidBackground;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_10();
  const obj = ColorUtils;
  const obj2 = ColorUtils;
  let num = 0.8;
  const token = useToken.useToken(nativeDefault.colors.BACKGROUND_BASE_LOW);
  if (flag) {
    num = 1;
  }
  const obj4 = { style: null, importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true, children: null };
  const items = [tmp.assetContainer, ];
  items[1] = { backgroundColor: obj.hexToRgbaString(obj2.hexWithOpacity(token, num)) };
  obj4.style = items;
  obj4.children = solidBackground.children;
  return React5(hasOwnProperty, obj4);
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet } = get_ActivityIndicator);
const EXTERNAL_PRODUCT_SKU_IDS = fn(1076).EXTERNAL_PRODUCT_SKU_IDS;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const diff = fn(8857).COLLECTIBLES_SHOP_CARD_HEIGHT - 2 * nativeDefault.space.PX_16;
const createStyles = fn(4607);
let obj = { assetContainer: null, overlayContainer: null, profileEffectContainer: null, profileFrameContainer: null, externalProductImage: null, purchasedOrDisabled: null, overlayIcon: null };
let size = { display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden", height: "100%", width: "100%", borderRadius: nativeDefault.radii.sm };
obj.assetContainer = size;
let obj3 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.justifyContent = "center";
obj3.alignItems = "center";
obj3.width = "100%";
obj3.height = "75%";
obj.overlayContainer = obj3;
const size1 = { width: "100%", height: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj.profileEffectContainer = size1;
obj.profileFrameContainer = { width: "100%", height: diff, alignItems: "center" };
obj.externalProductImage = { width: 80, height: 80, resizeMode: "contain" };
obj.purchasedOrDisabled = { opacity: 0.4 };
obj.overlayIcon = { position: "absolute", opacity: 1, color: nativeDefault.colors.ICON_STRONG, fontWeight: "bold" };
let closure_10 = createStyles.createStyles(obj);
let obj4 = { position: "absolute", opacity: 1, color: nativeDefault.colors.ICON_STRONG, fontWeight: "bold" };
size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesShopCardAssetTileV2.tsx");

export default noop.memo(function AssetTileV2(arg0) {
  ({ product, isPurchased, isDisabled } = arg0);
  ({ solidBackground, disableBundleStaticBackground, muteBundleStaticBackground, cardWidth } = arg0);
  const defaultVariantIndex = useDefaultVariantIndex.useDefaultVariantIndex(product);
  const obj3 = { solidBackground, children: null };
  const items = [React5(ProductPreview, { product: CollectiblesProductUtils.getSelectedProduct(product, defaultVariantIndex), isPurchased, isDisabled, disableBundleStaticBackground, muteBundleStaticBackground, cardWidth }), , ];
  let tmp4Result = isPurchased;
  if (isPurchased) {
    tmp4Result = tmp4(PurchasedAssetOverlay, {});
  }
  items[1] = tmp4Result;
  if (isDisabled) {
    isDisabled = !isPurchased;
  }
  if (isDisabled) {
    isDisabled = tmp4(DisabledAssetOverlay, {});
  }
  items[2] = isDisabled;
  obj3.children = items;
  return React6(AssetTileInternal, obj3);
});
