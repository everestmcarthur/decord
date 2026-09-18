// Module ID: 14983
// Function ID: 14984
// Name: SafetyHubPage
// Dependencies: [19, 17, 8663, 8652, 1074, 21, 6785, 12127, 8825, 1177, 5144, 1115, 504, 3064, 4718, 14984, 1380, 14985, 4722, 576, 14986, 12154, 12126, 14980, 5161, 12125, 1241, 7798, 7803, 4689, 14987, 1897, 14988, 14990, 2]
// Exports: default

// Module 14983 (SafetyHubPage)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import native from "native" /* 1177 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import user from "user" /* 1380 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import _modDef3064 from "module_3064" /* 3064 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4689 */;
import Text_Text from "Text/Text" /* 4718 */;
import components_Button_Button from "components/Button/Button" /* 5144 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6785 */;
import MonitoringAgentDefault from "MonitoringAgent" /* 7798 */;
import MetricEvents from "MetricEvents" /* 7803 */;
import ManualReviewActionCreators from "ManualReviewActionCreators" /* 8825 */;
import SafetyHubActionCreatorsAll from "SafetyHubActionCreators" /* 12125 */;
import AutomatedUnderageAppealModalActionCreatorsDefault from "AutomatedUnderageAppealModalActionCreators" /* 12127 */;
import useAvailableAgeVerificationMethods from "useAvailableAgeVerificationMethods" /* 14984 */;
import useShouldShowInitialGoogleWalletBanner from "useShouldShowInitialGoogleWalletBanner" /* 14985 */;
import noop from "module_19" /* 19 */;
import SafetyHubStore from "SafetyHubStore" /* 8663 */;

const require = globalThis.__r;

require = fn;
function handleLogInClick() {
  AuthenticationActionCreatorsDefault.closeSuspendedUser();
}
function handleRetryClick() {
  AutomatedUnderageAppealModalActionCreatorsDefault.openV2("");
}
function handleManualReviewClick() {
  const result = ManualReviewActionCreators.handleManualReviewCta();
}
function RetryBanner() {
  const obj = { messageType: native.HelpMessageTypes.ERROR, button: null, children: null };
  const obj2 = { variant: "secondary", size: "sm", text: null, onPress: null };
  const intl = util.intl;
  obj2.text = intl.string(util.t.IcA9iD);
  obj2.onPress = handleRetryClick;
  obj.button = closure_1_12(components_Button_Button.Button, obj2);
  const intl2 = util.intl;
  obj.children = intl2.string(util.t.dqbMbn);
  return closure_1_12(native.HelpMessage, obj);
}
function AgeCheckLoadingBanner() {
  const items = [SafetyHubStore];
  const stateFromStores = initialize.useStateFromStores(items, () => isExpressiveModalV2Enabled.getIsExpressiveModalV2Enabled());
  const obj2 = { messageType: native.HelpMessageTypes.INFO, children: null };
  const intl = util.intl;
  const t = util.t;
  obj2.children = intl.string(stateFromStores ? t.PU8nMu : t["nhhy/R"]);
  return closure_1_12(native.HelpMessage, obj2);
}
function ManualOrAutomatedReviewBanner() {
  const obj = { messageType: native.HelpMessageTypes.ERROR, button: null, children: null };
  const obj2 = { variant: "secondary", size: "sm", text: null, onPress: null };
  const intl = util.intl;
  obj2.text = intl.string(util.t.IcA9iD);
  obj2.onPress = handleRetryClick;
  obj.button = closure_1_12(components_Button_Button.Button, obj2);
  const intl2 = util.intl;
  obj.children = intl2.format(_modDef3064.vPoM8y, {
    manualReviewHook(children, arg1) {
      return closure_1_12(Text_Text.Text, { onPress, variant: "text-sm/normal", color: "text-link", children }, arg1);
    }
  });
  return closure_1_12(native.HelpMessage, obj);
}
function ManualReviewBanner() {
  const availableAgeVerificationMethods = useAvailableAgeVerificationMethods.useAvailableAgeVerificationMethods();
  const methods = availableAgeVerificationMethods.methods;
  if (availableAgeVerificationMethods.loading) {
    let tmp5Result = closure_1_12(AgeCheckLoadingBanner, {});
  } else {
    if (null != methods) {
      if (0 !== methods.length) {
        if (methods.every((method) => method.method === user.AgeAssuranceMethod.GOOGLE_WALLET)) {
          tmp5Result = tmp5(ManualOrAutomatedReviewBanner, {});
        } else {
          tmp5Result = tmp5(RetryBanner, {});
        }
      }
    }
    const obj2 = { messageType: tmp(1177).HelpMessageTypes.ERROR, button: null, children: null };
    const obj3 = { variant: "secondary", size: "sm", text: null, onPress: null };
    const intl = tmp(1115).intl;
    obj3.text = intl.string(tmp(1115).t.NkTGsC);
    obj3.onPress = handleManualReviewClick;
    obj2.button = closure_1_12(tmp(5144).Button, obj3);
    const intl2 = tmp(1115).intl;
    obj2.children = intl2.string(tmp(1115).t.VTgFYh);
    tmp5Result = closure_1_12(tmp(1177).HelpMessage, obj2);
  }
  return tmp5Result;
}
function AutomatedUnderageAppealStatus() {
  const items = [SafetyHubStore];
  const stateFromStores = initialize.useStateFromStores(items, () => ageCheckStatus.getAgeCheckStatus());
  useShouldShowInitialGoogleWalletBanner;
  if (stateFromStores === AgeCheckStatus.NONE) {
    let tmp20 = null;
    if (tmp5) {
      tmp20 = closure_1_12(ManualOrAutomatedReviewBanner, {});
    }
    let tmp9 = tmp20;
  } else if (stateFromStores === tmp6.SUCCESS) {
    const obj2 = { messageType: tmp(1177).HelpMessageTypes.SUCCESS, children: null };
    const intl6 = tmp(1115).intl;
    const obj3 = {
      loginHook(children) {
          return closure_1_12(Text_Text.Text, {
            variant: "text-sm/medium",
            color: "text-link",
            onPress() {
              return closure_1_1(closure_1_3[6]).logout("safety_hub_page_appeal_success", constants.LOGIN);
            },
            children
          });
        }
    };
    obj2.children = intl6.format(tmp(1115).t.hyh4ls, obj3);
    tmp9 = closure_1_12(tmp(1177).HelpMessage, obj2);
  } else if (stateFromStores === tmp6.VERIFIED) {
    const obj4 = { messageType: tmp(1177).HelpMessageTypes.SUCCESS, button: null, children: null };
    const obj5 = { variant: "secondary", size: "sm", text: null, onPress: null };
    const intl4 = tmp(1115).intl;
    obj5.text = intl4.string(tmp(1115).t["2jvQ6K"]);
    obj5.onPress = handleLogInClick;
    obj4.button = closure_1_12(tmp(5144).Button, obj5);
    const intl5 = tmp(1115).intl;
    obj4.children = intl5.string(tmp(1115).t["2Qe65J"]);
    tmp9 = closure_1_12(tmp(1177).HelpMessage, obj4);
  } else if (stateFromStores === tmp6.VERIFIED_OTHER_VIOLATIONS_REMAIN) {
    const obj6 = { messageType: tmp(1177).HelpMessageTypes.SUCCESS, children: null };
    const intl3 = tmp(1115).intl;
    obj6.children = intl3.string(tmp(1115).t.Ie7p1Q);
    tmp9 = closure_1_12(tmp(1177).HelpMessage, obj6);
  } else if (stateFromStores === tmp6.ERROR) {
    const obj7 = { messageType: tmp(1177).HelpMessageTypes.ERROR, children: null };
    const intl2 = tmp(1115).intl;
    obj7.children = intl2.string(tmp(1115).t["4sILBU"]);
    tmp9 = closure_1_12(tmp(1177).HelpMessage, obj7);
  } else if (stateFromStores === tmp6.FAILURE) {
    const obj8 = { messageType: tmp(1177).HelpMessageTypes.ERROR, children: null };
    const intl = tmp(1115).intl;
    obj8.children = intl.string(tmp(1115).t["40R63o"]);
    tmp9 = closure_1_12(tmp(1177).HelpMessage, obj8);
  } else if (stateFromStores === tmp6.UNDERAGE) {
    tmp9 = closure_1_12(RetryBanner, {});
  } else if (stateFromStores === tmp6.UNDERAGE_MANUAL_REVIEW) {
    tmp9 = closure_1_12(ManualReviewBanner, {});
  } else {
    tmp9 = closure_1_12(AgeCheckLoadingBanner, {});
  }
  return tmp9;
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ActivityIndicator: metroRequire, ScrollView: closure_7 } = get_ActivityIndicator);
const AgeCheckStatus = fn(8652).AgeCheckStatus;
const Constants = fn(1074);
({ AnalyticEvents: c10, Routes: closure_11 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const createStyles = fn(4722);
let obj2 = { container: { paddingHorizontal: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_12 }, loadingIndicator: { display: "flex", justifyContent: "center", alignItems: "center" }, body: null };
let obj3 = { paddingHorizontal: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_12 };
obj2.body = { gap: nativeDefault.space.PX_8 };
let closure_22 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/safety_hub/native/SafetyHubPage.tsx");

export default function SafetyHubPage(visible) {
  visible = visible.visible;
  importDefault = undefined;
  let safetyHubFetchError;
  const tmp = closure_22();
  const tmp2 = importDefault;
  const tmp4 = require("useSafetyHubLoading")();
  const tmp5 = visible;
  importDefault = visible(safetyHubFetchError[21]).useSafetyHubInitialized();
  const obj = visible(safetyHubFetchError[21]);
  const state = visible(safetyHubFetchError[22]).useSafetyHubAccountStanding();
  let obj2 = visible(safetyHubFetchError[22]);
  safetyHubFetchError = visible(safetyHubFetchError[23]).useSafetyHubFetchError();
  require("useMountEffect")(() => {
    const safetyHubData = SafetyHubActionCreatorsAll.getSafetyHubData();
    if (closure_1) {
      const obj3 = { account_standing: state.state };
      AnalyticsUtilsDefault.track(constants.SAFETY_HUB_VIEWED, obj3);
      const obj5 = { name: MetricEvents.MetricEvents.SAFETY_HUB_VIEW };
      MonitoringAgentDefault.increment(obj5);
    }
  });
  const items = [safetyHubFetchError, visible];
  const effect = noop.useEffect(() => {
    if (visible) {
      if (null != safetyHubFetchError) {
        ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(14987, dependencyMap.paths), "SafetyHubErrorActionSheet", {});
      }
    }
    ActionSheetActionCreatorsDefault.hideActionSheet("SafetyHubErrorActionSheet");
  }, items);
  if (tmp4) {
    let obj4 = { style: null, children: null };
    const items1 = [, ];
    ({ container: arr4[0], loadingIndicator: arr4[1] } = tmp);
    obj4.style = items1;
    obj4.children = closure_12(closure_6, { animating: true, size: "large" });
    let tmp9 = closure_12(closure_5, obj4);
  } else {
    tmp9 = null;
    if (null == safetyHubFetchError) {
      let obj5 = { style: tmp.container, children: null };
      const obj6 = { style: tmp.body, children: null };
      const items2 = [closure_12(AutomatedUnderageAppealStatus, {}), closure_12(tmp2(tmp3[32]), {})];
      obj6.children = items2;
      const items3 = [closure_13(closure_5, obj6), closure_12(tmp5(tmp3[33]).ConnectedSafetyHubViolationsContainer, {})];
      obj5.children = items3;
      tmp9 = closure_13(closure_7, obj5);
    }
  }
  return tmp9;
};
