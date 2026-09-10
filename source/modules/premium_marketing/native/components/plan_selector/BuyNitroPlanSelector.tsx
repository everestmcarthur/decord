// Module ID: 13430
// Function ID: 13431
// Name: BuyNitroPlanSelector
// Dependencies: [19, 17, 7251, 4556, 1085, 21, 4574, 576, 5455, 504, 13383, 13431, 13432, 13419, 1114, 13433, 5699, 5702, 13327, 7248, 1115, 2]
// Exports: default

// Module 13430 (BuyNitroPlanSelector)
import nativeDefault from "native" /* 576 */;
import TableRadioRow from "TableRadioRow" /* 5702 */;
import noop from "module_19" /* 19 */;
import IAPStore from "IAPStore" /* 7251 */;

require = fn;
const View = fn(17).View;
let closure_5 = fn(4556).EUR_TO_HRK_CONVERSION_RATE;
const CurrencyCodes = fn(1085).CurrencyCodes;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4574);
let obj2 = { header: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: nativeDefault.space.PX_8 }, hrkWarning: null };
let obj3 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: nativeDefault.space.PX_8 };
obj2.hrkWarning = { borderRadius: nativeDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS, backgroundColor: fn(5455).DARK_PRIMARY_630_LIGHT_PRIMARY_230, marginTop: nativeDefault.space.PX_8, overflow: "hidden" };
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium_marketing/native/components/plan_selector/BuyNitroPlanSelector.tsx");

export default function BuyNitroPlanSelector(planSelection) {
  planSelection = planSelection.planSelection;
  dependencyMap = undefined;
  closure_4 = undefined;
  const selection = planSelection.selection;
  ({ items, unavailableProductIds: c2 } = planSelection);
  const tmp = closure_9();
  const items1 = [closure_4];
  const stateFromStores = planSelection(504).useStateFromStores(items1, () => {
    let product = null;
    if (null != selection.productId) {
      product = IAPStore.getProduct(tmp.productId);
    }
    return product;
  });
  const obj = planSelection(504);
  const isBuyNitroPurchaseBlocked = planSelection(13383).useIsBuyNitroPurchaseBlocked();
  const obj2 = planSelection(13383);
  closure_4 = planSelection(13431).useBuyNitroPlanLabelRenderer();
  const obj3 = planSelection(13431);
  closure_5 = planSelection(13432).useBuyNitroPlanSubLabelRenderer();
  const obj5 = { style: tmp.header, children: null };
  const obj6 = { title: null };
  const obj4 = planSelection(13432);
  const tmp6 = closure_8;
  const tmp9 = selection;
  const intl = planSelection(1114).intl;
  obj6.title = intl.string(planSelection(1114).t.u95Dt4);
  const items2 = [closure_7(selection(13419), obj6), closure_7(selection(13433), { selectedTier: selection.tier, setSelectedTier: selection.setTier, disabled: isBuyNitroPurchaseBlocked })];
  obj5.children = items2;
  const children = [closure_8(isBuyNitroPurchaseBlocked, obj5), , ];
  let tmp8Result = null != selection.productId;
  if (tmp8Result) {
    const obj9 = { hasIcons: false, value: null, onChange: null, children: null };
    ({ productId: obj8.value, setProductId: obj8.onChange } = selection);
    const found = items.filter((productId) => !_undefined.has(productId.productId));
    obj9.children = found.map((productId) => React5(TableRadioRow.TableRadioRow, { value: productId.productId, label: closure_4(planSelection, productId), subLabel: closure_5(planSelection, productId), disabled: isBuyNitroPurchaseBlocked }, productId.productId));
    tmp8Result = tmp8(tmp2(5699).TableRadioGroup, obj9);
  }
  children[1] = tmp8Result;
  let tmp8Result2 = null != stateFromStores;
  if (tmp8Result2) {
    tmp8Result2 = "HR" === stateFromStores.countryCode;
  }
  if (tmp8Result2) {
    tmp8Result2 = stateFromStores.currencyCode.toLowerCase() === CurrencyCodes.EUR;
  }
  if (tmp8Result2) {
    const obj10 = { style: tmp.hrkWarning, children: null };
    const obj11 = { message: null };
    const intl2 = tmp2(1114).intl;
    const obj12 = { kunaPriceWithCurrency: null };
    const tmp9Result = tmp9(13327);
    const obj13 = { convertToMajorUnits: null };
    const result = stateFromStores.price * closure_5;
    const tmp2Result = tmp2(7248);
    obj13.convertToMajorUnits = tmp2(1115).isAndroid();
    obj12.kunaPriceWithCurrency = tmp2Result.formatPrice(result, CurrencyCodes.HRK, obj13);
    obj11.message = intl2.formatToPlainString(tmp2(1114).t["9hnZoK"], obj12);
    obj10.children = tmp8(tmp9Result, obj11);
    tmp8Result2 = tmp8(tmp7, obj10);
    const tmp2Result2 = tmp2(1115);
  }
  children[2] = tmp8Result2;
  return tmp6(isBuyNitroPurchaseBlocked, { children });
};
