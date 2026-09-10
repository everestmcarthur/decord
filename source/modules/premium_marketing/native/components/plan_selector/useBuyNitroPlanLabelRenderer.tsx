// Module ID: 13431
// Function ID: 13432
// Name: useBuyNitroPlanLabelRenderer
// Dependencies: [19, 17, 2025, 1373, 21, 4574, 576, 4275, 1114, 1880, 4570, 4231, 2]
// Exports: useBuyNitroPlanLabelRenderer

// Module 13431 (useBuyNitroPlanLabelRenderer)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import NumberUtils from "NumberUtils" /* 1880 */;
import PremiumUtils from "PremiumUtils" /* 4231 */;
import Text_Text from "Text/Text" /* 4570 */;
import noop from "module_19" /* 19 */;
import LocaleStore from "LocaleStore" /* 2025 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const PremiumConstants = fn(1373);
({ DISCOUNTS: metroRequire, SubscriptionPlans: closure_7 } = PremiumConstants);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4574);
let obj2 = { labelRow: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 }, discountBadge: null, discountBadgeText: null };
let obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.discountBadge = { borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.unsafe_rawColors.GREEN_360, paddingVertical: 2, paddingHorizontal: nativeDefault.space.PX_8 };
obj2.discountBadgeText = { textTransform: "uppercase" };
let closure_10 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium_marketing/native/components/plan_selector/useBuyNitroPlanLabelRenderer.tsx");

export const useBuyNitroPlanLabelRenderer = function useBuyNitroPlanLabelRenderer() {
  const tmp = closure_10();
  _require = tmp;
  token = require("useToken").useToken(token(token1[6]).modules.mobile.TABLE_ROW_LABEL_TEXT_STYLE);
  let obj = require("useToken");
  token1 = require("useToken").useToken(token(token1[6]).modules.mobile.TABLE_ROW_LABEL_COLOR);
  let items = [tmp, token, token1];
  return noop.useCallback((hasDiscountOffer, productId) => {
    ({ bogoEligible, trialTier, discounted } = hasDiscountOffer);
    let tmp2 = productId.productId === discounted.id;
    if (tmp2) {
      tmp2 = null != discounted.priceString;
    }
    let tmp5 = null == tmp || hasDiscountOffer.hasDiscountOffer || null != trialTier && productId.premiumTier === trialTier;
    if (!tmp5) {
      let tmp6 = bogoEligible;
      if (bogoEligible) {
        tmp6 = productId.basePlanId === React5.PREMIUM_YEAR_TIER_2;
      }
      tmp5 = tmp6;
    }
    if (bogoEligible) {
      if (productId.basePlanId === React5.PREMIUM_MONTH_TIER_2) {
        const intl3 = util.intl;
        let stringResult = intl3.string(util.t.iQTfWx);
      }
      const obj3 = { style: labelRow.labelRow, children: null };
      const obj5 = { variant: token, color: token1, children: PremiumUtils.getIntervalString(productId.interval, false) };
      const items = [React6(Text_Text.Text, obj5), ];
      let tmp21Result = null != stringResult;
      if (tmp21Result) {
        const obj6 = { style: tmp20.discountBadge, children: null };
        const obj8 = { variant: "text-xs/bold", color: "text-overlay-light", style: tmp20.discountBadgeText, children: stringResult };
        obj6.children = tmp21(Text_Text.Text, obj8);
        tmp21Result = tmp21(tmp19, obj6);
      }
      items[1] = tmp21Result;
      obj3.children = items;
      return React7(View, obj3);
    }
    if (tmp2) {
      if (null != discounted.percentOff) {
        const intl2 = util.intl;
        const obj9 = { discount: NumberUtils.formatPercent(LocaleStore.locale, discounted.percentOff / 100) };
        stringResult = intl2.format(util.t.IAybsG, obj9);
      }
    }
    stringResult = null;
    if (!tmp5) {
      const intl = util.intl;
      const obj = { discount: NumberUtils.formatPercent(LocaleStore.locale, tmp / 100) };
      stringResult = intl.format(util.t.IAybsG, obj);
    }
  }, items);
};
