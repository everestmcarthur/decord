// Module ID: 13414
// Function ID: 13415
// Name: BuyNitroPurchaseButton
// Dependencies: [32, 19, 17, 7251, 1373, 21, 4574, 7196, 7420, 1114, 1115, 13415, 5612, 10695, 13383, 504, 7176, 13384, 4919, 4989, 13416, 13417, 2]
// Exports: default

// Module 13414 (BuyNitroPurchaseButton)
import util from "util" /* 1114 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 4919 */;
import useBuyNitroPurchaseLock from "useBuyNitroPurchaseLock" /* 13383 */;
import useBuyNitroTrialAndPriceOverrides from "useBuyNitroTrialAndPriceOverrides" /* 13384 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import IAPStore from "IAPStore" /* 7251 */;

require = fn;
const View = fn(17).View;
let PremiumTypes = fn(1373).PremiumTypes;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4574);
let closure_10 = createStyles.createStyles({ container: { width: "100%" }, buttonStack: { width: "100%" }, hiddenFlow: { position: "absolute", width: 0, height: 0, overflow: "hidden", opacity: 0 } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium_marketing/native/components/purchase_button/BuyNitroPurchaseButton.tsx");

export default function BuyNitroPurchaseButton(sourceAnalyticsLocations) {
  ({ planSelection, location: _location } = sourceAnalyticsLocations);
  ({ onPaymentSuccess, onPaymentDismiss } = sourceAnalyticsLocations);
  if (_location === undefined) {
    _location = priceStringByProductId(trialId[7]).PREMIUM_MARKETING_FOOTER;
  }
  let prop = sourceAnalyticsLocations.sourceAnalyticsLocations;
  let item;
  noop = undefined;
  c5 = undefined;
  c6 = undefined;
  PremiumTypes = undefined;
  let onExit;
  ({ applicationId, onHostSheetClose } = sourceAnalyticsLocations);
  const tmp3 = closure_10();
  const selection = planSelection.selection;
  priceStringByProductId = planSelection.priceStringByProductId;
  trialId = planSelection.trialId;
  let result = selection(trialId[8]).isMobileWebRedirectCheckoutEnabled();
  if (result) {
    const intl4 = tmp4(tmp5[9]).intl;
    let stringResult = intl4.string(tmp4(tmp5[9]).t.rylrdY);
  } else if (selection.isTrial) {
    const intl3 = tmp4(tmp5[9]).intl;
    const tmp4Result = tmp4(tmp5[10]);
    const t = tmp4(tmp5[9]).t;
    intl3.string(tmp4(tmp5[10]).isAndroid() ? t.rKD72m : t.bboTul);
    const isAndroidResult = tmp4(tmp5[10]).isAndroid();
  } else if (null != selection.priceString) {
    let intl2 = tmp4(tmp5[9]).intl;
    const obj2 = { rate: selection.priceString };
    stringResult = intl2.formatToPlainString(tmp4(tmp5[9]).t.i4T8vz, obj2);
  } else {
    let intl = tmp4(tmp5[9]).intl;
    stringResult = intl.string(tmp4(tmp5[9]).t.uuzaAK);
  }
  item = selection.item;
  let premiumTier;
  if (item != null) {
    premiumTier = item.premiumTier;
  }
  let str = "experimental_premium-primary";
  if (premiumTier === PremiumTypes.TIER_0) {
    str = "experimental_premium-basic";
  }
  let obj = selection(trialId[8]);
  const buyNitroButtonCrossfade = selection(trialId[11]).useBuyNitroButtonCrossfade(str, stringResult);
  const outgoing = buyNitroButtonCrossfade.outgoing;
  const tmp4Result4 = selection(trialId[11]);
  const tmp14 = priceStringByProductId(trialId[12])(() => selection(trialId[13]).getNewAnalyticsLoadId());
  const tmp16 = item(noop.useState(null), 2);
  item = tmp16[0];
  noop = tmp16[1];
  const ref = noop.useRef(false);
  [tmp19, c5] = item(noop.useState(null), 2);
  const tmp18 = item(noop.useState(null), 2);
  [tmp21, c6] = item(noop.useState(undefined), 2);
  PremiumTypes = noop.useRef(item);
  const items = [item];
  const effect = noop.useEffect(() => {
    closure_7.current = current;
  }, items);
  const effect1 = noop.useEffect(() => () => {
    if (null != ref.current) {
      const BuyNitroPurchaseLock = selection(trialId[14]).BuyNitroPurchaseLock;
      BuyNitroPurchaseLock.end();
    }
  }, []);
  const tmp20 = item(noop.useState(undefined), 2);
  const items1 = [c6];
  let stateFromStores = null != item;
  if (!stateFromStores) {
    stateFromStores = tmp4Result5.useStateFromStores(items1, () => _undefined2.isBusy());
  }
  tmp4Result5 = selection(trialId[15]);
  let isBuyNitroPurchaseBlocked = stateFromStores;
  if (!stateFromStores) {
    isBuyNitroPurchaseBlocked = tmp4Result6.useIsBuyNitroPurchaseBlocked();
  }
  if (!isBuyNitroPurchaseBlocked) {
    let tmp26 = !result;
    if (!result) {
      tmp26 = null == selection.priceString;
    }
    isBuyNitroPurchaseBlocked = tmp26;
  }
  tmp4Result6 = selection(trialId[14]);
  if (prop == null) {
    prop = [];
  }
  onExit = obj5.useCallback(() => {
    closure_4(null);
    _undefined(null);
    _undefined2(undefined);
    const BuyNitroPurchaseLock = useBuyNitroPurchaseLock.BuyNitroPurchaseLock;
    BuyNitroPurchaseLock.end();
  }, []);
  const items2 = [item, onExit];
  const items3 = [item, onExit];
  const callback1 = obj5.useCallback((arg0) => {
    if (null != first) {
      const result = useBuyNitroTrialAndPriceOverrides.applyBuyNitroOrderPriceOverride(tmp.productId, arg0);
    }
    const obj3 = { title: null, body: null, hideActionSheet: false };
    const intl = util.intl;
    obj3.title = intl.string(util.t["2DyOxw"]);
    const intl2 = util.intl;
    obj3.body = intl2.string(util.t["Xr94E+"]);
    actions_AlertActionCreatorsDefault.show(obj3);
    callback();
  }, items2);
  const items4 = [, , , ];
  ({ item: arr6[0], isTrial: arr6[1] } = selection);
  items4[2] = trialId;
  items4[3] = priceStringByProductId;
  const callback2 = obj5.useCallback(() => {
    let premiumTier;
    if (first != null) {
      premiumTier = tmp.premiumTier;
    }
    if (null != premiumTier) {
      const result = useBuyNitroTrialAndPriceOverrides.markBuyNitroTrialUnavailable(tmp.premiumTier);
    }
    const obj3 = { title: null, body: null, hideActionSheet: false };
    const intl = util.intl;
    obj3.title = intl.string(util.t.Ehhdym);
    const intl2 = util.intl;
    obj3.body = intl2.string(util.t.EaHwu3);
    actions_AlertActionCreatorsDefault.show(obj3);
    callback();
  }, items3);
  let obj3 = { style: tmp3.container, children: null };
  const obj4 = { style: tmp3.buttonStack, children: null };
  const callback3 = obj5.useCallback(() => {
    let beginResult = null != selection.item;
    if (beginResult) {
      const BuyNitroPurchaseLock = useBuyNitroPurchaseLock.BuyNitroPurchaseLock;
      beginResult = BuyNitroPurchaseLock.begin();
    }
    if (beginResult) {
      value = priceStringByProductId.get(tmp.item.productId);
      if (value == null) {
        value = null;
      }
      _undefined(value);
      let tmp10;
      if (tmp.isTrial) {
        tmp10 = trialId;
      }
      _undefined2(tmp10);
      closure_4(tmp.item);
    }
  }, items4);
  const items5 = [onExit(selection(trialId[19]).Button, { text: stringResult, variant: str, size: "lg", grow: true, onPress: callback3, loading: stateFromStores, disabled: isBuyNitroPurchaseBlocked }), ];
  let tmp34Result = null != outgoing;
  if (tmp34Result) {
    const obj6 = { snapshot: outgoing.snapshot, onDone: buyNitroButtonCrossfade.onOutgoingDone };
    tmp34Result = tmp34(tmp13(tmp5[11]), obj6, outgoing.key);
  }
  items5[1] = tmp34Result;
  obj4.children = items5;
  const items6 = [closure_9(c5, obj4), , ];
  let tmp34Result3 = !result;
  if (!result) {
    const obj7 = { item: selection.item, ctaText: stringResult, isTrial: null, isDiscounted: null };
    ({ isTrial: obj11.isTrial, isDiscounted: obj11.isDiscounted } = selection);
    tmp34Result3 = tmp34(tmp13(tmp5[20]), obj7);
  }
  items6[1] = tmp34Result3;
  let tmp34Result4 = null != item;
  if (tmp34Result4) {
    const obj8 = { style: tmp3.hiddenFlow, pointerEvents: "none", children: null };
    const obj9 = { item, analyticsLocations: tmp13Result(prop, _location, tmp13(tmp5[7]).PREMIUM_PAYMENT_ACTION_SHEET).analyticsLocations, analyticsLoadId: tmp14, hasEmittedPaymentFlowStartedRef: ref, applicationId, expectedPriceString: tmp19, stagedTrialId: tmp21, onExit, onOrderPriceMismatch: callback1, onOrderTrialUnavailable: callback2, onHostSheetClose, onPaymentSuccess, onPaymentDismiss };
    obj8.children = tmp34(tmp13(tmp5[21]), obj9);
    tmp34Result4 = tmp34(tmp33, obj8);
  }
  items6[2] = tmp34Result4;
  obj3.children = items6;
  return closure_9(c5, obj3);
};
