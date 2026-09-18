// Module ID: 13390
// Function ID: 13391
// Name: BuyNitroPlanPriceDetails
// Dependencies: [19, 17, 7237, 1373, 1085, 21, 4560, 576, 504, 7234, 4556, 1114, 2]
// Exports: default

// Module 13390 (BuyNitroPlanPriceDetails)
import nativeDefault from "native" /* 576 */;
import noop from "module_19" /* 19 */;
import IAPStore from "IAPStore" /* 7237 */;

const require = fn;
const View = fn(17).View;
const PremiumConstants = fn(1373);
({ SubscriptionIntervalTypes: closure_4, SubscriptionPlanInfo: hasOwnProperty } = PremiumConstants);
const CurrencyCodes = fn(1085).CurrencyCodes;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4560);
let obj2 = { container: { gap: nativeDefault.space.PX_4 }, centeredText: { textAlign: "center" } };
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium_marketing/native/components/BuyNitroPlanPriceDetails.tsx");

export default function BuyNitroPlanPriceDetails(centered) {
  ({ planSelection, item } = centered);
  let flag = centered.centered;
  if (flag === undefined) {
    flag = false;
  }
  ({ priceStringByProductId, trialTier, discounted } = planSelection);
  const tmp = closure_9();
  if (flag) {
    const centeredText = tmp.centeredText;
  }
  let formatToPlainStringResult = dependencyMap;
  const items = [IAPStore];
  const stateFromStores = item(504).useStateFromStores(items, () => {
    const product = IAPStore.getProduct(item.productId);
    let formatted;
    if (product != null) {
      formatted = product.currencyCode.toLowerCase();
    }
    if (null == formatted) {
      formatted = CurrencyCodes.USD;
    }
    return formatted;
  });
  value = priceStringByProductId.get(item.productId);
  if (null != trialTier) {
    if (item.premiumTier === trialTier) {
      const obj2 = { style: tmp.container, children: null };
      const tmp2Result = tmp2(7234);
      const obj3 = { variant: "text-xs/semibold", color: "text-default", style: centeredText, children: null };
      const intl3 = tmp2(1114).intl;
      const obj4 = { price: tmp2(7234).formatPrice(0, stateFromStores, { minimumFractionDigits: 0, maximumFractionDigits: 0 }) };
      obj3.children = intl3.formatToPlainString(tmp2(1114).t.hXcaLT, obj4);
      const items1 = [closure_7(tmp2(4556).Text, obj3), ];
      if (null == value) {
        items1[1] = tmp17;
        obj2.children = items1;
        return tmp14(tmp15, obj2);
      } else {
        const obj5 = { variant: "text-xs/medium", color: "text-subtle", style: centeredText, children: null };
        const intl4 = tmp2(1114).intl;
        if (item.interval === constants.YEAR) {
          let v9QeON = tmp2(1114).t.ECT4A5;
        } else {
          v9QeON = tmp2(1114).t.v9QeON;
        }
        const obj6 = { price: value };
        formatToPlainStringResult = intl4.formatToPlainString(v9QeON, obj6);
        obj5.children = formatToPlainStringResult;
        tmp16(tmp2(4556).Text, obj5);
      }
      const formatPriceResult = tmp2(7234).formatPrice(0, stateFromStores, { minimumFractionDigits: 0, maximumFractionDigits: 0 });
      tmp14 = closure_8;
      tmp15 = View;
      tmp16 = closure_7;
    }
  }
  if (item.productId === discounted.id) {
    if (null != discounted.priceString) {
      let num;
      if (closure_5[item.basePlanId] != null) {
        num = tmp21.intervalCount;
      }
      if (num == null) {
        num = 1;
      }
      let formatRateResult1 = null;
      const tmp2Result3 = tmp2(7234);
      if (null != value) {
        formatRateResult1 = tmp2(7234).formatRate(value, item.interval, num);
        const tmp2Result4 = tmp2(7234);
      }
      const obj7 = { style: tmp.container, children: null };
      const obj8 = { variant: "text-xs/semibold", color: "text-default", style: centeredText, children: null };
      const intl = tmp2(1114).intl;
      const obj9 = { discountedPrice: tmp2(7234).formatRate(discounted.priceString, item.interval, num), numMonths: discounted.numMonths };
      obj8.children = intl.formatToPlainString(tmp2(1114).t["02Gmgm"], obj9);
      const items2 = [closure_7(tmp2(4556).Text, obj8), ];
      let tmp11Result = null != formatRateResult1;
      if (tmp11Result) {
        const obj10 = { variant: "text-xs/medium", color: "text-subtle", style: centeredText, children: null };
        const intl2 = tmp2(1114).intl;
        const obj11 = { regularPrice: formatRateResult1, numMonths: discounted.numMonths };
        obj10.children = intl2.formatToPlainString(tmp2(1114).t["vZk+c/"], obj11);
        tmp11Result = closure_7(tmp2(4556).Text, obj10);
      }
      items2[1] = tmp11Result;
      obj7.children = items2;
      return closure_8(View, obj7);
    }
  }
  return null;
};
