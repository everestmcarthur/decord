// Module ID: 13209
// Function ID: 13210
// Name: ShopThisLookActionSheet
// Dependencies: [19, 17, 8306, 7225, 7282, 21, 4607, 576, 8866, 4305, 1114, 13210, 504, 13214, 7627, 13216, 11130, 8931, 8302, 13188, 7236, 7256, 4574, 7615, 11248, 4603, 2]
// Exports: default

// Module 13209 (ShopThisLookActionSheet)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4305 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4574 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7256 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7615 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 7627 */;
import ShopThisLookUtils from "ShopThisLookUtils" /* 13214 */;
import ShopThisLookAnalyticsUtils from "ShopThisLookAnalyticsUtils" /* 13216 */;
import noop from "module_19" /* 19 */;
import StorefrontProductStore from "StorefrontProductStore" /* 8306 */;

const require = globalThis.__r;

require = fn;
function ShopThisLookCard(skuId) {
  skuId = skuId.skuId;
  ({ size, onPress } = skuId);
  let memo;
  let ref;
  let callback;
  let wishlistButton = closure_11();
  const collectiblesShopProduct = skuId(13210).useCollectiblesShopProduct(skuId, { needsCategory: false, shouldFetchProduct: false });
  const product = collectiblesShopProduct.product;
  dependencyMap = product;
  let obj = skuId(13210);
  const tmp = skuId;
  const items = [ref];
  const items1 = [skuId];
  const stateFromStores = skuId(504).useStateFromStores(items, () => {
    const productsForSku = StorefrontProductStore.getProductsForSku(skuId);
    let found;
    if (productsForSku != null) {
      found = productsForSku.flatMap((skus) => skus.skus).find((id) => id.id === skuId);
      const flatMapResult = productsForSku.flatMap((skus) => skus.skus);
    }
    return found;
  }, items1);
  let type;
  if (stateFromStores != null) {
    const tenantMetadata = stateFromStores.tenantMetadata;
    if (tenantMetadata != null) {
      const collectibles = tenantMetadata.collectibles;
      if (collectibles != null) {
        type = collectibles.type;
      }
    }
  }
  const items2 = [stateFromStores];
  memo = stateFromStores.useMemo(() => ShopThisLookUtils.isShoppableCollectibleSku(stateFromStores), items2);
  const items3 = [product, skuId];
  const memo1 = stateFromStores.useMemo(() => {
    if (null == c2) {
      return null;
    } else {
      if (obj.getIsVariantProduct(tmp)) {
        const _Math = Math;
        const variants = tmp.variants;
        const bound = Math.max(0, variants.findIndex((skuId) => skuId.skuId === skuId));
        return tmp2(7627).getSelectedProduct(tmp, bound);
      } else {
        return tmp;
      }
      obj = CollectiblesProductUtils;
      tmp2 = require;
    }
  }, items3);
  ref = stateFromStores.useRef(false);
  const items4 = [stateFromStores, skuId, type, memo];
  const effect = stateFromStores.useEffect(() => {
    let current = null == stateFromStores;
    if (!current) {
      current = ref.current;
    }
    if (!current) {
      ref.current = true;
      const obj2 = { action: ShopThisLookAnalyticsUtils.ShopThisLookRowAction.ROW_VIEWED, skuId, productType: type, isDisabled: !memo, source: UserProfileThemeTypes.ACTION_SHEET };
      const result = ShopThisLookAnalyticsUtils.trackShopThisLookRowAction(obj2);
    }
  }, items4);
  const items5 = [skuId, type, memo];
  callback = stateFromStores.useCallback(() => {
    const obj = ShopThisLookAnalyticsUtils;
    const result = obj.trackShopThisLookRowAction({ action: ShopThisLookAnalyticsUtils.ShopThisLookRowAction.ROW_CLICKED, skuId, productType: type, isDisabled: !memo, source: UserProfileThemeTypes.ACTION_SHEET });
  }, items5);
  const items6 = [callback, onPress];
  let callback1 = stateFromStores.useCallback(() => {
    callback();
    onPress();
  }, items6);
  [][0] = callback;
  if ("loading" === collectiblesShopProduct.state) {
    const obj3 = {
      size,
      renderPreview() {
          return closure_1_9(type, {});
        },
      accessibilityHidden: true
    };
    let tmp23 = closure_9(onPress(8866), obj3);
  } else {
    tmp23 = null;
    if (null != stateFromStores) {
      if (memo) {
        const obj4 = { style: wishlistButton.cardWrapper, children: null };
        const obj5 = { sku: stateFromStores, size, onPress: callback1 };
        const items7 = [closure_9(onPress(11130), obj5), ];
        let tmp17Result = null != memo1;
        if (tmp17Result) {
          callback1 = { selectedProduct: memo1, style: null };
          wishlistButton = wishlistButton.wishlistButton;
          callback1.style = wishlistButton;
          tmp17Result = tmp17(tmp18(8931), callback1);
        }
        items7[1] = tmp17Result;
        obj4.children = items7;
        let tmp15Result = closure_10(memo, obj4);
        tmp17 = closure_9;
        tmp18 = onPress;
      } else {
        const obj6 = { sku: stateFromStores, size, overlay: tmp(8866).WishlistItemCardOverlay.LOCKED, onPress: tmp10 };
        tmp15Result = closure_9(onPress(11130), obj6);
        const tmp13 = onPress(11130);
      }
    }
  }
  return tmp23;
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const ACTION_SHEET_MAX_WIDTH = fn(7225).ACTION_SHEET_MAX_WIDTH;
const UserProfileThemeTypes = fn(7282).UserProfileThemeTypes;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4607);
let obj2 = { container: { paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 }, description: null, itemsContainer: null, cardWrapper: null, wishlistButton: null };
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
obj2.description = { textAlign: "center", marginTop: -nativeDefault.space.PX_8 };
let obj4 = { textAlign: "center", marginTop: -nativeDefault.space.PX_8 };
obj2.itemsContainer = { alignSelf: "center", flexDirection: "row", flexWrap: "wrap", paddingBottom: nativeDefault.space.PX_8 };
obj2.cardWrapper = { position: "relative" };
let obj6 = {};
const merged = Object.assign(fn(8866).CARD_TOP_RIGHT_OVERLAY_POSITION);
obj6.zIndex = 1;
obj2.wishlistButton = obj6;
let closure_11 = createStyles.createStyles(obj2);
let size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/shop_this_look/native/ShopThisLookActionSheet.tsx");

export default function ShopThisLookActionSheet(arg0) {
  _require = undefined;
  let analyticsLocations;
  ({ userId, guildId } = arg0);
  const tmp = closure_11();
  const equippedCollectibleSkuIds = require("useMaybeFetchEquippedCollectibleProducts").useEquippedCollectibleSkuIds(userId, guildId);
  let obj = require("useMaybeFetchEquippedCollectibleProducts");
  let obj2 = { maxWidth: ACTION_SHEET_MAX_WIDTH };
  ({ cardWidth: c0, rowWidth, gap } = analyticsLocations(13188)({ maxWidth: ACTION_SHEET_MAX_WIDTH }));
  const tmp2 = analyticsLocations(13188)({ maxWidth: ACTION_SHEET_MAX_WIDTH });
  analyticsLocations = analyticsLocations(7236)(analyticsLocations(7256).USER_PROFILE_OVERFLOW_MENU).analyticsLocations;
  const items = [analyticsLocations];
  dependencyMap = noop.useCallback((initialProductSkuId) => {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    const obj2 = CollectiblesActionCreators;
    const result = obj2.openCollectiblesShopMobile({ initialProductSkuId, analyticsLocations, analyticsSource: AnalyticsLocationDefault.USER_PROFILE_OVERFLOW_MENU });
  }, items);
  const obj3 = { value: null, children: null };
  const items1 = [analyticsLocations(7256).SHOP_THIS_LOOK_ACTION_SHEET];
  obj3.value = items1;
  const obj4 = { startExpanded: true, title: null, children: null };
  const tmp3 = analyticsLocations(7236);
  const intl = require("util").intl;
  obj4.title = intl.string(require("util").t.xNdRDO);
  const obj5 = { style: tmp.container, children: null };
  const obj6 = { variant: "text-sm/medium", color: "text-subtle", style: tmp.description, children: null };
  const intl2 = require("util").intl;
  obj6.children = intl2.string(require("util").t["ws+0Lr"]);
  const items2 = [closure_9(require("Text/Text").Text, obj6), ];
  const obj7 = {
    style: null,
    children: equippedCollectibleSkuIds.map((skuId) => {
      size = skuId;
      return closure_1_9(ShopThisLookCard, {
        skuId,
        size,
        onPress() {
          return closure_2(closure_0);
        }
      }, skuId);
    })
  };
  const items3 = [tmp.itemsContainer, { gap, width: rowWidth }];
  obj7.style = items3;
  items2[1] = closure_9(closure_5, obj7);
  obj5.children = items2;
  obj4.children = closure_10(closure_5, obj5);
  obj3.children = closure_9(analyticsLocations(11248), obj4);
  return closure_9(require("useAnalyticsLocations").AnalyticsLocationProvider, obj3);
};
