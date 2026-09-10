// Module ID: 13484
// Function ID: 13485
// Name: BuyNitroMarketingFooter
// Dependencies: [17, 21, 4605, 576, 6705, 13463, 7234, 2]
// Exports: default

// Module 13484 (BuyNitroMarketingFooter)
import jsxProd from "jsxProd" /* 21 */;
import nativeDefault from "native" /* 576 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6705 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7234 */;
import BuyNitroPurchaseButtonDefault from "BuyNitroPurchaseButton" /* 13463 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import createStyles from "createStyles" /* 4605 */;
import size from "module_2" /* 2 */;

({ Platform, View: c3 } = get_ActivityIndicator);
const jsx = jsxProd.jsx;
let obj = { footer: null };
let obj2 = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_12, paddingBottom: 0, backgroundColor: null, borderTopColor: null, borderTopWidth: 1 };
const PX_24 = nativeDefault.space.PX_24;
obj2.backgroundColor = nativeDefault.colors.BACKGROUND_BASE_LOWER;
obj2.borderTopColor = nativeDefault.colors.BORDER_SUBTLE;
obj.footer = obj2;
let closure_5 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/premium_marketing/native/BuyNitroMarketingFooter.tsx");

export default function BuyNitroMarketingFooter(arg0) {
  ({ planSelection, applicationId, onPaymentSuccess, onPaymentDismiss } = arg0);
  const tmp = closure_5();
  const panGesture = LegacyBaseButton.usePanGesture({ activeOffsetY: [-8, 8] });
  const obj2 = { gesture: panGesture, children: null };
  const obj3 = { style: tmp.footer, collapsable: false, children: null };
  const obj4 = { location: null, planSelection: null, applicationId: null, onPaymentSuccess: null, onPaymentDismiss: null };
  obj4.location = AnalyticsLocationDefault.PREMIUM_MARKETING_FOOTER;
  obj4.planSelection = planSelection;
  obj4.applicationId = applicationId;
  obj4.onPaymentSuccess = onPaymentSuccess;
  obj4.onPaymentDismiss = onPaymentDismiss;
  obj3.children = jsx(BuyNitroPurchaseButtonDefault, { location: null, planSelection: null, applicationId: null, onPaymentSuccess: null, onPaymentDismiss: null });
  obj2.children = <React3 style={tmp.footer} collapsable={false}>{null}</React3>;
  return jsx(LegacyBaseButton.GestureDetector, { gesture: panGesture, children: null });
};
