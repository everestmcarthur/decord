// Module ID: 13466
// Function ID: 13467
// Name: BuyNitroPurchaseFlow
// Dependencies: [5, 19, 7476, 7473, 1074, 1085, 21, 10773, 7458, 4262, 10733, 10878, 13467, 7457, 4950, 1114, 7461, 1242, 10774, 4929, 9435, 1115, 10874, 2]
// Exports: default

// Module 13466 (BuyNitroPurchaseFlow)
import PremiumBundledPlansUtils from "PremiumBundledPlansUtils" /* 7461 */;
import NativeCheckoutStoreProviderDefault from "NativeCheckoutStoreProvider" /* 10874 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

require = fn;
function BuyNitroPurchaseRunner(item) {
  item = item.item;
  let analyticsLocations = item.analyticsLocations;
  let analyticsLoadId = item.analyticsLoadId;
  const hasEmittedPaymentFlowStartedRef = item.hasEmittedPaymentFlowStartedRef;
  const applicationId = item.applicationId;
  const expectedPriceString = item.expectedPriceString;
  const stagedTrialId = item.stagedTrialId;
  const onExit = item.onExit;
  const onOrderPriceMismatch = item.onOrderPriceMismatch;
  const onOrderTrialUnavailable = item.onOrderTrialUnavailable;
  const onHostSheetClose = item.onHostSheetClose;
  const onPaymentSuccess = item.onPaymentSuccess;
  const onPaymentDismiss = item.onPaymentDismiss;
  let tmp = expectedPriceString((orderRecord) => orderRecord.orderRecord);
  closure_13 = tmp;
  const tmp2 = expectedPriceString((orderRequired) => orderRequired.orderRequired);
  closure_14 = tmp2;
  const handlePremiumPurchase = item(analyticsLoadId[7]).useHandlePremiumPurchase();
  applicationId.useRef(false);
  const items = [tmp, tmp2, handlePremiumPurchase, analyticsLoadId, hasEmittedPaymentFlowStartedRef, analyticsLocations, applicationId, item, expectedPriceString, stagedTrialId, onExit, onOrderPriceMismatch, onOrderTrialUnavailable, onHostSheetClose, onPaymentSuccess, onPaymentDismiss];
  const effect = applicationId.useEffect(() => {
    analyticsLoadId = function _runPurchase() {
      const self = this;
      const tmp = asyncGeneratorStep(async () => {
        analyticsLocations = tmp3;
        if (closure_1_14) {
          let priceString;
          if (id != null) {
            const checkoutContextRecord = tmp31.checkoutContextRecord;
            if (checkoutContextRecord != null) {
              const availablePlanForItems = checkoutContextRecord.getAvailablePlanForItems(sku_id(7461).getSubscriptionItemsForProduct(_null.productId));
              if (availablePlanForItems != null) {
                priceString = availablePlanForItems.getPriceString();
              }
              sku_id(7461);
            }
          }
          _null = priceString;
          if (priceString == null) {
            _null = null;
          }
          if (null != c5) {
            if (null != tmp36) {
              if (tmp36 !== c5) {
                constants(tmp36);
                c5 = 3;
                return { value: undefined, done: true };
              }
            }
          }
          if (null != closure_1_6) {
            let subscriptionTrialId;
            if (tmp31 != null) {
              const subscriptionFacet = tmp31.subscriptionFacet;
              if (subscriptionFacet != null) {
                const subscriptionPreview = subscriptionFacet.subscriptionPreview;
                if (subscriptionPreview != null) {
                  subscriptionTrialId = subscriptionPreview.subscriptionTrialId;
                }
              }
            }
            if (subscriptionTrialId !== tmp37) {
              closure_1_9();
              c5 = 3;
              return { value: undefined, done: true };
            }
          }
        }
        basePurchaseFlowAnalyticsFields(1242).track(constants.PAYMENT_FLOW_STEP, sku_id(10733).getPaymentFlowStepAnalyticsFields(basePurchaseFlowAnalyticsFields, { from_step: sku_id(10733).PaymentFlowStep.PLAN_SELECT, to_step: sku_id(10733).PaymentFlowStep.EXTERNAL_PAYMENT, subscription_plan_gateway_plan_id: _null.productId, sku_id }));
        const obj12 = { productId: _null.productId, analyticsLocation: basePurchaseFlowAnalyticsFields.location, analyticsLoadId, analyticsLocations, orderId: null };
        if (id != null) {
          id = id.id;
        }
        obj12.orderId = id;
        await closure_1_15(obj12);
        if (1 === tmp7) {
          c4 = 0;
          if (closure_3 instanceof basePurchaseFlowAnalyticsFields(10774)) {
            const subscriptions = sku_id(4929).fetchSubscriptions();
            sku_id(4929);
            const obj14 = { title: null, body: null, hideActionSheet: true };
            const intl = sku_id(1114).intl;
            obj14.title = intl.string(sku_id(1114).t["U+H+kd"]);
            const intl2 = sku_id(1114).intl;
            obj14.body = intl2.string(sku_id(1114).t.F9ktNa);
            basePurchaseFlowAnalyticsFields(4950).show(obj14);
            basePurchaseFlowAnalyticsFields(4950);
          }
          closure_1_7();
          c5 = 3;
        } else if (arg0 === 1) {
          c5 = 3;
          throw arg1;
        } else if (arg0 !== 2) {
          c4 = 0;
        }
        return arg1;
      });
      dependencyMap = tmp;
      const apply = tmp.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    if (!ref.current) {
      if (!closure_14) {
        tmp.current = true;
        let result = item(analyticsLoadId[8]).isMobileWebRedirectCheckoutEnabled();
        const obj = item(analyticsLoadId[8]);
        let obj2 = item(analyticsLoadId[9]);
        result1 = obj2.castPremiumSubscriptionAsSkuId(analyticsLocations(analyticsLoadId[9]).getSkuIdForPremiumType(result1.premiumTier));
        const obj3 = analyticsLocations(analyticsLoadId[9]);
        const obj5 = { analyticsLoadId, analyticsLocation: null, analyticsLocations: null };
        const obj6 = { object: onOrderTrialUnavailable.BUTTON_CTA, objectType: onHostSheetClose.BUY, page: onPaymentSuccess.USER_SETTINGS, section: onPaymentDismiss.SETTINGS_PREMIUM };
        obj5.analyticsLocation = obj6;
        obj5.analyticsLocations = basePurchaseFlowAnalyticsFields;
        basePurchaseFlowAnalyticsFields = item(analyticsLoadId[10]).getBasePurchaseFlowAnalyticsFields(obj5);
        if (!hasEmittedPaymentFlowStartedRef.current) {
          hasEmittedPaymentFlowStartedRef.current = true;
          const obj7 = {};
          const merged = Object.assign(basePurchaseFlowAnalyticsFields);
          obj7.application_id = applicationId;
          obj7.subscription_plan_id = tmp9.basePlanId;
          obj7.sku_id = result1;
          let customCheckoutFlowForAnalytics;
          if (result) {
            customCheckoutFlowForAnalytics = tmp5(tmp6[8]).getCustomCheckoutFlowForAnalytics();
            const tmp5Result3 = tmp5(tmp6[8]);
          }
          obj7.custom_checkout_flow = customCheckoutFlowForAnalytics;
          const result2 = tmp5(tmp6[11]).trackPaymentFlowStartedAnalyticsAndCTP(obj7);
          const tmp5Result = tmp5(tmp6[11]);
        }
        const obj8 = {
          productId: result1.productId,
          onPaymentSuccess(arg0) {
                if (onHostSheetClose != null) {
                  tmp();
                }
                const result = item(analyticsLoadId[12]).presentBuyNitroPurchaseSuccess(result1.premiumTier);
                if (onPaymentSuccess != null) {
                  tmp4(arg0);
                }
              },
          onPaymentDismiss
        };
        onExit(obj8);
        if (result) {
          const tmp5Result4 = tmp5(tmp6[13]);
          const obj9 = { planId: tmp9.basePlanId, isGift: false, loadId: tmp11 };
          const result3 = tmp5Result4.goToStandalonePremiumCheckoutFromMobileApp("premium_nitro_marketing_page", obj9, () => {
            stagedTrialId();
            onExit();
            if (onHostSheetClose != null) {
              onHostSheetClose();
            }
          }, () => {
            const obj2 = { title: null, body: null, hideActionSheet: true };
            const intl = item(analyticsLoadId[15]).intl;
            obj2.title = intl.string(item(analyticsLoadId[15]).t.NrBVjw);
            const intl2 = item(analyticsLoadId[15]).intl;
            obj2.body = intl2.string(item(analyticsLoadId[15]).t["gD+grx"]);
            analyticsLocations(analyticsLoadId[14]).show(obj2);
            onExit();
          });
        } else {
          (function runPurchase() {
            const self = this;
            const apply = closure_2.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          })();
        }
        const obj4 = item(analyticsLoadId[10]);
        tmp11 = analyticsLoadId;
      }
    }
  }, items);
  return null;
}
const useNativeCheckoutStore = fn(7476).useNativeCheckoutStore;
const PremiumPlanPurchasedStore = fn(7473);
({ reset: metroRequire, setInitiatedPurchaseFromNewFlow: closure_7 } = PremiumPlanPurchasedStore);
const Constants = fn(1074);
({ AnalyticEvents: closure_8, AnalyticsObjects: closure_9, AnalyticsObjectTypes: c10, AnalyticsPages: closure_11, AnalyticsSections: closure_12 } = Constants);
const PaymentGateways = fn(1085).PaymentGateways;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium_marketing/native/components/BuyNitroPurchaseFlow.tsx");

export default function BuyNitroPurchaseFlow(item) {
  item = item.item;
  ({ stagedTrialId, onExit } = item);
  ({ analyticsLocations, analyticsLoadId, hasEmittedPaymentFlowStartedRef, applicationId, expectedPriceString, onOrderPriceMismatch, onOrderTrialUnavailable, onHostSheetClose, onPaymentSuccess, onPaymentDismiss } = item);
  const NitroACOMSubscriptionExperiment = item(9435).NitroACOMSubscriptionExperiment;
  if (obj.isIOS()) {
    if (NitroACOMSubscriptionExperiment.useConfig({ location: "BuyNitroPurchaseFlow" }).enabled) {
      let APPLE = tmp2.APPLE_ADVANCED_COMMERCE;
    } else {
      APPLE = tmp2.APPLE;
    }
  } else {
    const GOOGLE = tmp2.GOOGLE;
    let tmp8;
    if (null != stagedTrialId) {
      let obj2 = { subscription_preview: null };
      const obj3 = { subscription_trial_id: stagedTrialId };
      obj2.subscription_preview = obj3;
      tmp8 = obj2;
    }
    const items = [item.productId];
    const memo = noop.useMemo(() => {
      const subscriptionItemsForProduct = PremiumBundledPlansUtils.getSubscriptionItemsForProduct(item.productId);
      return subscriptionItemsForProduct.map((planId) => {
        const obj = { subscriptionPlanId: planId.planId, skuId: null, quantity: null };
        const obj2 = item(4262);
        obj.skuId = obj2.castPremiumSubscriptionAsSkuId(closure_1_1(4262).getSkuIdForPlan(planId.planId));
        obj.quantity = planId.quantity;
        return obj;
      });
    }, items);
    const obj4 = { paymentGateway: GOOGLE, orderRequired: GOOGLE === tmp2.APPLE_ADVANCED_COMMERCE, skuIds: [], defaultPlans: memo, isGift: false, activeSubscription: null, initialSubscriptionFacet: tmp8, onOrderRetryCancellation: onExit, children: null };
    const obj5 = { item, analyticsLocations, analyticsLoadId, hasEmittedPaymentFlowStartedRef, applicationId, expectedPriceString, stagedTrialId, onExit, onOrderPriceMismatch, onOrderTrialUnavailable, onHostSheetClose, onPaymentSuccess, onPaymentDismiss };
    obj4.children = <BuyNitroPurchaseRunner item={item} analyticsLocations={analyticsLocations} analyticsLoadId={analyticsLoadId} hasEmittedPaymentFlowStartedRef={hasEmittedPaymentFlowStartedRef} applicationId={applicationId} expectedPriceString={expectedPriceString} stagedTrialId={stagedTrialId} onExit={onExit} onOrderPriceMismatch={onOrderPriceMismatch} onOrderTrialUnavailable={onOrderTrialUnavailable} onHostSheetClose={onHostSheetClose} onPaymentSuccess={onPaymentSuccess} onPaymentDismiss={onPaymentDismiss} />;
    return jsx(NativeCheckoutStoreProviderDefault, { paymentGateway: GOOGLE, orderRequired: GOOGLE === tmp2.APPLE_ADVANCED_COMMERCE, skuIds: [], defaultPlans: memo, isGift: false, activeSubscription: null, initialSubscriptionFacet: tmp8, onOrderRetryCancellation: onExit, children: null });
  }
};
