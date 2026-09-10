// Module ID: 14846
// Function ID: 14847
// Name: SafetyHubPage
// Dependencies: [19, 17, 8495, 8484, 1074, 21, 6643, 11954, 504, 1178, 1114, 4601, 5025, 4605, 576, 14847, 11981, 11953, 14843, 5042, 11952, 1242, 7653, 7658, 4572, 14848, 1896, 14849, 14851, 2]
// Exports: default

// Module 14846 (SafetyHubPage)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4572 */;
import Text_Text from "Text/Text" /* 4601 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6643 */;
import MonitoringAgentDefault from "MonitoringAgent" /* 7653 */;
import MetricEvents from "MetricEvents" /* 7658 */;
import SafetyHubActionCreatorsAll from "SafetyHubActionCreators" /* 11952 */;
import AutomatedUnderageAppealModalActionCreatorsDefault from "AutomatedUnderageAppealModalActionCreators" /* 11954 */;
import noop from "module_19" /* 19 */;
import SafetyHubStore from "SafetyHubStore" /* 8495 */;

const require = globalThis.__r;

const util = hyh4ls(1114);
const native = hyh4ls(1178);
const components_Button_Button = hyh4ls(5025);
require = fn;
function handleLogInClick() {
  AuthenticationActionCreatorsDefault.closeSuspendedUser();
}
function handleRetryClick() {
  AutomatedUnderageAppealModalActionCreatorsDefault.openV2("");
}
function AutomatedUnderageAppealStatus() {
  let hyh4ls = require;
  let formatResult = dependencyMap;
  const items = [SafetyHubStore];
  const stateFromStores = initialize.useStateFromStores(items, () => uiStore.getAgeCheckStatus());
  initialize;
  [][0] = SafetyHubStore;
  if (stateFromStores === AgeCheckStatus.NONE) {
    return null;
  } else if (stateFromStores === tmp5.SUCCESS) {
    const obj2 = { messageType: native.HelpMessageTypes.SUCCESS, children: null };
    const intl10 = util.intl;
    hyh4ls = util.t.hyh4ls;
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
    formatResult = intl10.format(hyh4ls, obj3);
    obj2.children = formatResult;
    let tmp18Result = closure_1_12(native.HelpMessage, obj2);
  } else if (stateFromStores === tmp5.VERIFIED) {
    const obj4 = { messageType: native.HelpMessageTypes.SUCCESS, button: null, children: null };
    const obj5 = { variant: "secondary", size: "sm", text: null, onPress: null };
    const intl8 = util.intl;
    obj5.text = intl8.string(util.t["2jvQ6K"]);
    obj5.onPress = handleLogInClick;
    obj4.button = closure_1_12(components_Button_Button.Button, obj5);
    const intl9 = util.intl;
    obj4.children = intl9.string(util.t["2Qe65J"]);
    tmp18Result = closure_1_12(native.HelpMessage, obj4);
  } else if (stateFromStores === tmp5.VERIFIED_OTHER_VIOLATIONS_REMAIN) {
    const obj6 = { messageType: native.HelpMessageTypes.SUCCESS, children: null };
    const intl7 = util.intl;
    obj6.children = intl7.string(util.t.Ie7p1Q);
    tmp18Result = closure_1_12(native.HelpMessage, obj6);
  } else if (stateFromStores === tmp5.ERROR) {
    const obj7 = { messageType: native.HelpMessageTypes.ERROR, children: null };
    const intl6 = util.intl;
    obj7.children = intl6.string(util.t["4sILBU"]);
    tmp18Result = closure_1_12(native.HelpMessage, obj7);
  } else if (stateFromStores === tmp5.FAILURE) {
    const obj8 = { messageType: native.HelpMessageTypes.ERROR, children: null };
    const intl5 = util.intl;
    obj8.children = intl5.string(util.t["40R63o"]);
    tmp18Result = closure_1_12(native.HelpMessage, obj8);
  } else if (stateFromStores === tmp5.UNDERAGE) {
    const obj9 = { messageType: native.HelpMessageTypes.ERROR, button: null, children: null };
    const obj10 = { variant: "secondary", size: "sm", text: null, onPress: null };
    const intl3 = util.intl;
    obj10.text = intl3.string(util.t.IcA9iD);
    obj10.onPress = handleRetryClick;
    obj9.button = closure_1_12(components_Button_Button.Button, obj10);
    const intl4 = util.intl;
    obj9.children = intl4.string(util.t.dqbMbn);
    tmp18Result = closure_1_12(native.HelpMessage, obj9);
  } else if (stateFromStores === tmp5.UNDERAGE_MANUAL_REVIEW) {
    const obj11 = { messageType: native.HelpMessageTypes.ERROR, button: null, children: null };
    const obj12 = { variant: "secondary", size: "sm", text: null, onPress: null };
    const intl = util.intl;
    obj12.text = intl.string(util.t.NkTGsC);
    obj12.onPress = handleRetryClick;
    obj11.button = closure_1_12(components_Button_Button.Button, obj12);
    const intl2 = util.intl;
    obj11.children = intl2.string(util.t.VTgFYh);
    tmp18Result = closure_1_12(native.HelpMessage, obj11);
  } else {
    const obj13 = { messageType: native.HelpMessageTypes.INFO, children: null };
    const intl11 = util.intl;
    const t = util.t;
    obj13.children = intl11.string(tmp4 ? t.PU8nMu : t["nhhy/R"]);
    tmp18Result = closure_1_12(native.HelpMessage, obj13);
  }
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ActivityIndicator: metroRequire, ScrollView: closure_7 } = get_ActivityIndicator);
const AgeCheckStatus = fn(8484).AgeCheckStatus;
const Constants = fn(1074);
({ AnalyticEvents: c10, Routes: closure_11 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const createStyles = fn(4605);
let obj2 = { container: { paddingHorizontal: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_12 }, loadingIndicator: { display: "flex", justifyContent: "center", alignItems: "center" }, body: null };
let obj3 = { paddingHorizontal: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_12 };
obj2.body = { gap: nativeDefault.space.PX_8 };
let closure_17 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/native/SafetyHubPage.tsx");

export default function SafetyHubPage(visible) {
  visible = visible.visible;
  importDefault = undefined;
  let safetyHubFetchError;
  const tmp = closure_17();
  const tmp2 = importDefault;
  const tmp4 = require("useSafetyHubLoading")();
  const tmp5 = visible;
  importDefault = visible(safetyHubFetchError[16]).useSafetyHubInitialized();
  const obj = visible(safetyHubFetchError[16]);
  const state = visible(safetyHubFetchError[17]).useSafetyHubAccountStanding();
  let obj2 = visible(safetyHubFetchError[17]);
  safetyHubFetchError = visible(safetyHubFetchError[18]).useSafetyHubFetchError();
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
        ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(14848, dependencyMap.paths), "SafetyHubErrorActionSheet", {});
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
      const items2 = [closure_12(AutomatedUnderageAppealStatus, {}), closure_12(tmp2(tmp3[27]), {})];
      obj6.children = items2;
      const items3 = [closure_13(closure_5, obj6), closure_12(tmp5(tmp3[28]).ConnectedSafetyHubViolationsContainer, {})];
      obj5.children = items3;
      tmp9 = closure_13(closure_7, obj5);
    }
  }
  return tmp9;
};
