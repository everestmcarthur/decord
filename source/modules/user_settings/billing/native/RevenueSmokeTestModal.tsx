// Module ID: 15731
// Function ID: 15732
// Name: RevenueSmokeTestModal
// Dependencies: [19, 21, 7927, 7014, 10854, 7877, 10957, 15732, 2]

// Module 15731 (RevenueSmokeTestModal)
import HeaderShared from "HeaderShared" /* 7877 */;
import getNavigationModalPresentationDefault from "getNavigationModalPresentation" /* 10957 */;
import BillingFlowsDefault from "BillingFlows" /* 15732 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const NativeStackNavigator = fn(7927);
let closure_4 = NativeStackNavigator.createNativeStackNavigator();
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/billing/native/RevenueSmokeTestModal.tsx");

export default noop.memo(function RevenueSmokeTestModal() {
  _require = require("Navigator").useAccessibilityNativeStackOptions();
  const obj2 = { skuIDs: [], activeSubscription: null, children: null };
  const obj3 = {
    screenOptions(navigation) {
      const obj = {
        headerTitle(children) {
          const merged = Object.assign(children, Object.assign({ children: 0 }));
          const merged1 = Object.assign(merged);
          return closure_1_3(closure_1_0(closure_1_2[5]).GenericHeaderTitle, { title: children.children });
        },
        headerLeft: HeaderShared.getRenderModalCloseImage(navigation.navigation),
        headerTitleAlign: "center"
      };
      let merged = Object.assign(closure_0);
      let merged1 = Object.assign(getNavigationModalPresentationDefault());
      return obj;
    },
    children: null
  };
  let obj = require("Navigator");
  ({ Navigator, Screen } = closure_4);
  obj3.children = <Screen name="RunAllFlows" options={function options() {
    return { title: "Run All Payment Flows" };
  }} component={BillingFlowsDefault.RunAllFlows} />;
  obj2.children = <Navigator screenOptions={function screenOptions(navigation) {
    const obj = {
      headerTitle(children) {
        const merged = Object.assign(children, Object.assign({ children: 0 }));
        const merged1 = Object.assign(merged);
        return closure_1_3(closure_1_0(closure_1_2[5]).GenericHeaderTitle, { title: children.children });
      },
      headerLeft: HeaderShared.getRenderModalCloseImage(navigation.navigation),
      headerTitleAlign: "center"
    };
    let merged = Object.assign(closure_0);
    let merged1 = Object.assign(getNavigationModalPresentationDefault());
    return obj;
  }}>{null}</Navigator>;
  return jsx(require("NativePaymentContext").NativePaymentContextProvider, { skuIDs: [], activeSubscription: null, children: null });
});
