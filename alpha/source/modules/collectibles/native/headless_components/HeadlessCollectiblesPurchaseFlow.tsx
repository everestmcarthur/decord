// Module ID: 13466
// Function ID: 13467
// Name: HeadlessCollectiblesPurchaseFlow
// Dependencies: [19, 1074, 1085, 21, 9478, 9120, 11276, 1364, 4427, 11083, 11065, 4723, 8444, 13467, 2]
// Exports: default

// Module 13466 (HeadlessCollectiblesPurchaseFlow)
import PlatformUtils from "PlatformUtils" /* 1364 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4723 */;
import openProductDetailsActionSheet from "openProductDetailsActionSheet" /* 8444 */;
import useProductPurchaseState from "useProductPurchaseState" /* 9120 */;
import ACOMExperiments from "ACOMExperiments" /* 9478 */;
import NativePaymentContext from "NativePaymentContext" /* 11083 */;
import useCollectiblesExternalGatewayFacetDefault from "useCollectiblesExternalGatewayFacet" /* 11276 */;
import HeadlessCollectiblesPurchaseRunner from "HeadlessCollectiblesPurchaseRunner" /* 13467 */;
import noop from "module_19" /* 19 */;

const NativeCheckoutStoreProviderDefault = tmp3(11065);
require = fn;
const application_id = fn(1074).COLLECTIBLES_APPLICATION_ID;
const PaymentGateways = fn(1085).PaymentGateways;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/headless_components/HeadlessCollectiblesPurchaseFlow.tsx");

export default function HeadlessCollectiblesPurchaseFlow(arg0) {
  ({ product, analyticsLocations } = arg0);
  ({ attempt, onBuy, onBuySettled, stageCollectibleChangeForEditProfile } = arg0);
  const OTPACOMOrderExperiment = ACOMExperiments.OTPACOMOrderExperiment;
  const isPurchased = useProductPurchaseState.useProductPurchaseState(product).isPurchased;
  const tmp4 = useCollectiblesExternalGatewayFacetDefault(product);
  if (obj2.isIOS()) {
    let GOOGLE = tmp5.APPLE_ADVANCED_COMMERCE;
    let tmp6 = tmp5;
  } else {
    GOOGLE = tmp5.GOOGLE;
    tmp6 = tmp5;
  }
  let tmp7 = !isPurchased;
  if (!isPurchased) {
    let tmp8 = GOOGLE === tmp6.APPLE_ADVANCED_COMMERCE && OTPACOMOrderExperiment.useConfig({ location: "CollectiblesPurchaseFlow" }).enabled;
    if (!tmp8) {
      let result = GOOGLE === tmp6.GOOGLE;
      if (result) {
        result = tmp(4427).isGooglePlayBillingSupported();
        const tmpResult = tmp(4427);
      }
      tmp8 = result;
    }
    tmp7 = tmp8;
  }
  const obj3 = { skuIDs: [], activeSubscription: null, children: null };
  const obj4 = {
    headless: true,
    paymentGateway: GOOGLE,
    orderRequired: tmp7,
    skuIds: null,
    isGift: false,
    activeSubscription: null,
    initialExternalGatewayFacet: tmp4,
    onOrderRetryCancellation() {
      return ActionSheetActionCreatorsDefault.hideActionSheet(openProductDetailsActionSheet.PRODUCT_DETAILS_ACTION_SHEET_KEY);
    },
    checkoutAnalyticsFields: { is_gift: false, location_stack: analyticsLocations, payment_type: "sku", sku_id: product.skuId, application_id },
    children: null
  };
  const items = [product.skuId];
  obj4.skuIds = items;
  obj2 = PlatformUtils;
  const obj5 = { is_gift: false, location_stack: analyticsLocations, payment_type: "sku", sku_id: product.skuId, application_id };
  obj4.children = jsx(HeadlessCollectiblesPurchaseRunner.HeadlessCollectiblesPurchaseRunner, { product, attempt, analyticsLocations, onBuy, onBuySettled, stageCollectibleChangeForEditProfile });
  obj3.children = jsx(NativeCheckoutStoreProviderDefault, {
    headless: true,
    paymentGateway: GOOGLE,
    orderRequired: tmp7,
    skuIds: null,
    isGift: false,
    activeSubscription: null,
    initialExternalGatewayFacet: tmp4,
    onOrderRetryCancellation() {
      return ActionSheetActionCreatorsDefault.hideActionSheet(openProductDetailsActionSheet.PRODUCT_DETAILS_ACTION_SHEET_KEY);
    },
    checkoutAnalyticsFields: { is_gift: false, location_stack: analyticsLocations, payment_type: "sku", sku_id: product.skuId, application_id },
    children: null
  }, product.skuId);
  return jsx(NativePaymentContext.NativePaymentContextProvider, { skuIDs: [], activeSubscription: null, children: null });
};
