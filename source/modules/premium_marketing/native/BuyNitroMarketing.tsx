// Module ID: 13425
// Function ID: 13426
// Name: BuyNitroMarketing
// Dependencies: [19, 17, 1373, 21, 4605, 576, 13426, 1483, 13427, 13434, 13432, 13435, 7214, 13428, 10812, 13461, 13468, 13469, 8943, 13471, 13474, 13479, 13483, 13484, 13485, 2]
// Exports: default

// Module 13425 (BuyNitroMarketing)
import nativeDefault from "native" /* 576 */;
import BuyNitroPerkDetails from "BuyNitroPerkDetails" /* 13461 */;
import BuyNitroSectionHeaderDefault from "BuyNitroSectionHeader" /* 13468 */;
import BuyNitroPerkDefault from "BuyNitroPerk" /* 13469 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const PremiumTypes = fn(1373).PremiumTypes;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7, Fragment: closure_8 } = jsxProd);
const createStyles = fn(4605);
let obj2 = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER }, list: { flex: 1 }, listContent: null, listHeader: null, sectionHeader: null, disabled: null };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj2.listContent = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_24 };
let obj4 = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_24 };
obj2.listHeader = { gap: nativeDefault.space.PX_24 };
let obj5 = { gap: nativeDefault.space.PX_24 };
obj2.sectionHeader = { marginTop: nativeDefault.space.PX_24, marginBottom: nativeDefault.space.PX_16 };
obj2.disabled = { pointerEvents: "none" };
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium_marketing/native/BuyNitroMarketing.tsx");

export default function BuyNitroMarketing(onPaymentDismiss) {
  ({ onClose, applicationId } = onPaymentDismiss);
  ({ initialLoadCompleted, initialTier, onPaymentSuccess } = onPaymentDismiss);
  onPaymentDismiss = onPaymentDismiss.onPaymentDismiss;
  let buyNitroPlanSelection;
  let ref;
  let onSelectNitroTier;
  let locationStackFromLocationContext;
  let onOpenDetails;
  const tmp = onOpenDetails();
  noop = tmp;
  const youBarSettingsCustomHeaderPaddingTop = applicationId(onPaymentDismiss[6]).useYouBarSettingsCustomHeaderPaddingTop();
  let obj = applicationId(onPaymentDismiss[6]);
  const nativeStackNavigation = applicationId(onPaymentDismiss[7]).useNativeStackNavigation();
  let obj2 = applicationId(onPaymentDismiss[7]);
  const buyNitroMarketingLifecycleHooks = applicationId(onPaymentDismiss[8]).useBuyNitroMarketingLifecycleHooks(nativeStackNavigation, initialLoadCompleted);
  const obj3 = applicationId(onPaymentDismiss[8]);
  let tmp7;
  if (null != initialTier) {
    const obj5 = { tier: initialTier, productId: "Array" };
    tmp7 = obj5;
  }
  buyNitroPlanSelection = applicationId(onPaymentDismiss[9]).useBuyNitroPlanSelection(tmp7);
  ref = noop.useRef(buyNitroPlanSelection);
  const items = [buyNitroPlanSelection];
  const effect = noop.useEffect(() => {
    closure_6.current = buyNitroPlanSelection;
  }, items);
  const obj4 = applicationId(onPaymentDismiss[9]);
  const isBuyNitroPurchaseBlocked = applicationId(onPaymentDismiss[10]).useIsBuyNitroPurchaseBlocked();
  const tmp12 = onPaymentSuccess(onPaymentDismiss[11])(buyNitroPlanSelection);
  onSelectNitroTier = tmp12.onSelectNitroTier;
  ({ onScroll, listData, listRef } = tmp12);
  const tmp2Result = applicationId(onPaymentDismiss[10]);
  locationStackFromLocationContext = applicationId(onPaymentDismiss[12]).useLocationStackFromLocationContext();
  const tmp2Result3 = applicationId(onPaymentDismiss[12]);
  const promotionMarketingComponent = applicationId(onPaymentDismiss[13]).usePromotionMarketingComponent(tmp2(tmp3[14]).MarketingComponentType.MARKETING_PAGE_BANNER);
  const items1 = [locationStackFromLocationContext, applicationId, onPaymentSuccess, onPaymentDismiss];
  onOpenDetails = noop.useCallback((perk) => {
    const result = BuyNitroPerkDetails.openBuyNitroPerkDetails(perk, { selectedTier: ref.current.selection.tier, selectedProductId: ref.current.selection.productId, analyticsLocations: locationStackFromLocationContext, applicationId, onPaymentSuccess, onPaymentDismiss });
  }, items1);
  const items2 = [buyNitroPlanSelection.selection.tier, tmp.sectionHeader, onOpenDetails, onSelectNitroTier];
  const obj6 = { style: tmp.container, children: null };
  const obj7 = { style: tmp.list, children: null };
  const callback1 = noop.useCallback((item) => {
    item = item.item;
    if ("section-header" === item.kind) {
      const obj2 = {
        style: sectionHeader.sectionHeader,
        title: item.title,
        titleRequiresNitroHack: true === item.highlightNitro,
        onPress() {
            return onSelectNitroTier(buyNitroPlanSelection.TIER_2);
          }
      };
      let tmp6 = timestampProducer(BuyNitroSectionHeaderDefault, obj2);
    } else {
      const obj = { perk: item.perk, selectedTier: buyNitroPlanSelection.selection.tier, onOpenDetails, start: null, end: null };
      ({ start: obj.start, end: obj.end } = item);
      tmp6 = timestampProducer(BuyNitroPerkDefault, obj);
    }
    return tmp6;
  }, items2);
  const obj8 = {
    ref: listRef,
    contentContainerStyle: tmp.listContent,
    data: listData,
    renderItem: callback1,
    keyExtractor(kind) {
      if ("section-header" === kind.kind) {
        let id = kind.id;
      } else {
        id = kind.perk.id;
      }
      return id;
    },
    getItemType(kind) {
      return kind.kind;
    },
    ListHeaderComponent: null,
    onScroll: null,
    scrollEventThrottle: 16,
    showsVerticalScrollIndicator: false
  };
  const obj9 = { topInset: youBarSettingsCustomHeaderPaddingTop, onBackPress: null, selectedTier: null };
  const tmp20 = locationStackFromLocationContext;
  const tmp2Result4 = applicationId(onPaymentDismiss[13]);
  if (onClose == null) {
    onClose = () => nativeStackNavigation.pop();
  }
  obj9.onBackPress = onClose;
  obj9.selectedTier = buyNitroPlanSelection.selection.tier;
  const items3 = [ref(onPaymentSuccess(onPaymentDismiss[19]), obj9), ];
  const obj10 = { style: tmp.listHeader, children: null };
  let tmp19Result = initialLoadCompleted;
  if (initialLoadCompleted) {
    let oneofKind;
    if (promotionMarketingComponent != null) {
      oneofKind = promotionMarketingComponent.properties.properties.oneofKind;
    }
    tmp19Result = "marketingPageBanner" === oneofKind;
  }
  if (tmp19Result) {
    const obj11 = { bannerFields: promotionMarketingComponent.properties.properties.marketingPageBanner, componentId: null, promotionId: null, analyticsPage: "Marketing Page Banner Tile", style: null, onPaymentSuccess: null, onPaymentDismiss: null };
    ({ id: obj14.componentId, promotionId: obj14.promotionId } = promotionMarketingComponent);
    let disabled;
    if (isBuyNitroPurchaseBlocked) {
      disabled = tmp.disabled;
    }
    obj11.style = disabled;
    obj11.onPaymentSuccess = onPaymentSuccess;
    obj11.onPaymentDismiss = onPaymentDismiss;
    tmp19Result = tmp19(tmp11(tmp3[20]), obj11);
    const tmp11Result = tmp11(tmp3[20]);
  }
  const obj12 = { children: null };
  const items4 = [tmp19Result, ref(onPaymentSuccess(onPaymentDismiss[21]), { planSelection: buyNitroPlanSelection }), ref(onPaymentSuccess(onPaymentDismiss[22]), {})];
  obj10.children = items4;
  items3[1] = onSelectNitroTier(nativeStackNavigation, obj10);
  obj12.children = items3;
  obj8.ListHeaderComponent = onSelectNitroTier(tmp20, obj12);
  obj8.onScroll = onScroll;
  obj7.children = ref(applicationId(onPaymentDismiss[18]).FlashList, obj8);
  const items5 = [ref(nativeStackNavigation, obj7), ref(onPaymentSuccess(onPaymentDismiss[23]), { planSelection: buyNitroPlanSelection, applicationId, onPaymentSuccess, onPaymentDismiss }), ];
  if (initialLoadCompleted) {
    initialLoadCompleted = tmp19(tmp2(tmp3[24]).BuyNitroTriggerPointEffect, {});
  }
  items5[2] = initialLoadCompleted;
  obj6.children = items5;
  return onSelectNitroTier(nativeStackNavigation, obj6);
};
