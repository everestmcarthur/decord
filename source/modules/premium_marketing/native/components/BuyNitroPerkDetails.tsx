// Module ID: 13412
// Function ID: 13413
// Name: BuyNitroPerkDetails
// Dependencies: [19, 17, 21, 4574, 13385, 10262, 1114, 4987, 576, 13413, 13414, 7196, 4541, 2]
// Exports: openBuyNitroPerkDetails

// Module 13412 (BuyNitroPerkDetails)
import nativeDefault from "native" /* 576 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 4541 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7196 */;
import useBuyNitroPlanSelection from "useBuyNitroPlanSelection" /* 13385 */;
import BuyNitroPurchaseButtonDefault from "BuyNitroPurchaseButton" /* 13414 */;
import noop from "module_19" /* 19 */;

const ActionSheetActionCreatorsDefault = ActionSheetActionCreators;

require = fn;
const Image = fn(17).Image;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const BuyNitroPerkDetailsActionSheet = "BuyNitroPerkDetailsActionSheet";
const createStyles = fn(4574);
let closure_7 = createStyles.createStyles({ illustration: { width: "100%", height: 180 } });
let closure_8 = noop.memo((perk) => {
  perk = perk.perk;
  ({ selectedTier, selectedProductId, analyticsLocations, applicationId, onPaymentSuccess, onPaymentDismiss } = perk);
  const tmp = closure_7();
  const buyNitroPlanSelection = useBuyNitroPlanSelection.useBuyNitroPlanSelection({ tier: selectedTier, productId: selectedProductId });
  const detail = perk.detail;
  let tmp6Result2 = null;
  if (null != detail) {
    const obj2 = { title: perk.label, description: null, illustration: null, actions: null };
    if (typeof detail.description === "string") {
      let description = detail.description;
    } else {
      const intl = tmp2(1114).intl;
      description = intl.string(detail.description);
    }
    obj2.description = description;
    const obj3 = { source: detail.image, style: tmp.illustration, resizeMode: "contain" };
    obj2.illustration = React4(Image, obj3);
    const obj4 = { spacing: nativeDefault.space.PX_12, children: null };
    let tmp6Result = null != buyNitroPlanSelection.selection.item;
    if (tmp6Result) {
      const obj5 = { planSelection: buyNitroPlanSelection, item: buyNitroPlanSelection.selection.item, centered: true };
      tmp6Result = tmp6(tmp9(13413), obj5);
    }
    const items = [tmp6Result, ];
    const obj6 = {
      planSelection: buyNitroPlanSelection,
      location: AnalyticsLocationDefault.PREMIUM_MARKETING_PERK_CARD,
      sourceAnalyticsLocations: analyticsLocations,
      applicationId,
      onHostSheetClose() {
          return ActionSheetActionCreatorsDefault.hideActionSheet(BuyNitroPerkDetailsActionSheet);
        },
      onPaymentSuccess,
      onPaymentDismiss
    };
    items[1] = React4(BuyNitroPurchaseButtonDefault, obj6);
    obj4.children = items;
    obj2.actions = hasOwnProperty(tmp2(4987).Stack, obj4);
    tmp6Result2 = tmp6(tmp2(10262).PromoSheet, obj2);
    const tmp9Result = BuyNitroPurchaseButtonDefault;
  }
  return tmp6Result2;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium_marketing/native/components/BuyNitroPerkDetails.tsx");

export const openBuyNitroPerkDetails = function openBuyNitroPerkDetails(perk, arg1) {
  const obj2 = { content: null, key: null };
  const merged = Object.assign(arg1);
  obj2.content = React4(closure_8, { perk });
  obj2.key = BuyNitroPerkDetailsActionSheet;
  ActionSheetActionCreators.showActionSheet(obj2);
};
