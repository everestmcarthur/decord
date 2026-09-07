// Module ID: 14396
// Function ID: 14397
// Name: App
// Dependencies: [19, 17, 14397, 502, 9091, 13690, 13699, 13719, 10670, 13998, 14398, 14399, 14400, 7644, 4224, 4552, 14401, 6943, 14402, 14403, 21, 14404, 1896, 14437, 4961, 14443, 14444, 14445, 14446, 7756, 14456, 7760, 14457, 14460, 10713, 14531, 9520, 9573, 8271, 14539, 14541, 14545, 14547, 14548, 14549, 14550, 4701, 14551, 1115, 5160, 12786, 504, 6593, 14553, 9, 13672, 13641, 14555, 11538, 14557, 15943, 2]
// Exports: default

// Module 14396 (App)
import serializeDefault from "serialize" /* 9 */;
import setLevelsDefault from "setLevels" /* 11538 */;
import GestureWrapperDefault from "GestureWrapper" /* 14557 */;
import getAuthComponentDefault from "getAuthComponent" /* 15943 */;
import closure_3 from "noop" /* 19 */;
import { NativeModules } from "get ActivityIndicator" /* 17 */;
import closure_5 from "checkForNewerBuild" /* 14397 */;
import closure_6 from "fetchFingerprint" /* 502 */;
import nativeEventEmitter from "nativeEventEmitter" /* 9091 */;
import updateState from "updateState" /* 13690 */;
import showReviewRequestModal from "showReviewRequestModal" /* 13699 */;
import set from "set" /* 13719 */;
import createEmptyPromotionsByType from "createEmptyPromotionsByType" /* 10670 */;
import bitrate from "bitrate" /* 13998 */;
import handleTokenUpdated from "handleTokenUpdated" /* 14398 */;
import handleUpdateVADPermission from "handleUpdateVADPermission" /* 14399 */;
import getModalState from "getModalState" /* 14400 */;
import appDatabaseManager from "appDatabaseManager" /* 7644 */;
import reset from "reset" /* 4224 */;
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme" /* 4552 */;
import initialize from "initialize" /* 14401 */;
import handleSetLocationMetadata from "handleSetLocationMetadata" /* 6943 */;
import "map";
import ApexExperiment from "ApexExperiment" /* 14403 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
if (global.__DEV__) {
  require("reactNativeCorePlugins");
}
let result = set.fileFinishedImporting("components_native/App.tsx");

export default function App() {
  const renderApp = serializeDefault.renderApp;
  renderApp.record();
  const effect = React.useEffect(() => {
    callback(14437).init();
    let obj = callback(14437);
    const tmp = callback;
    callback(4961).initialize();
    let obj2 = callback(4961);
    callback(14443).initialize();
    let obj3 = callback(14443);
    callback(14444).initialize();
    let obj4 = callback(14444);
    callback(14445).initialize();
    let obj5 = callback(14445);
    callback(14446).initialize();
    let obj6 = callback(14446);
    callback(7756).initialize();
    let obj7 = callback(7756);
    callback(14456).initialize();
    let obj8 = callback(14456);
    callback(7760).init();
    let obj9 = callback(7760);
    callback(14457).init();
    let obj10 = callback(14457);
    callback(14460).init();
    let obj11 = callback(14460);
    callback(10713).initialize();
    let obj12 = callback(10713);
    callback(14531).initialize();
    let obj13 = callback(14531);
    callback(9520).initialize();
    let obj14 = callback(9520);
    callback(9573).initialize();
    let obj15 = callback(9573);
    callback(8271).initialize();
    const obj16 = callback(8271);
    callback(14539).initialize();
    const obj17 = callback(14539);
    callback(14541).initialize();
    const obj18 = callback(14541);
    callback(14545).initialize();
    closure_5.ensureInitialized();
    const obj19 = callback(14545);
    callback(14547).initialize();
    const obj20 = callback(14547);
    callback(14548).initialize();
    const obj21 = callback(14548);
    callback(14549).initialize();
    const obj22 = callback(14549);
    callback(14550).initialize();
    const obj23 = callback(14550);
    callback(4701).initialize();
    const obj24 = callback(4701);
    callback(14551).initialize();
    const obj25 = callback(14551);
    const tmp29 = shouldUseAltGateway;
    if (obj26.isIOS()) {
      tmp(5160).initialize();
      const tmpResult = tmp(5160);
    }
    obj26 = shouldUseAltGateway(1115);
    const result = tmp29(12786).initializeRouteManagerIfNeeded();
    return () => {
      callback2(14445).terminate();
      const obj = callback2(14445);
      callback2(4961).terminate();
      const obj2 = callback2(4961);
      callback2(10713).terminate();
      const obj3 = callback2(10713);
      callback2(14531).terminate();
      const obj4 = callback2(14531);
      callback(12786).cleanupRouteManager();
      const obj5 = callback(12786);
      callback2(14551).terminate();
      const obj6 = callback2(14551);
      callback2(14539).terminate();
      const obj7 = callback2(14539);
      callback2(8271).terminate();
      const obj8 = callback2(8271);
      callback2(14460).terminate();
      const obj9 = callback2(14460);
      callback2(14443).terminate();
      const obj10 = callback2(14443);
      callback2(14545).terminate();
      const obj11 = callback2(14545);
      callback2(14547).terminate();
      const obj12 = callback2(14547);
      callback2(14548).terminate();
      const obj13 = callback2(14548);
      callback2(14550).terminate();
      const obj14 = callback2(14550);
      callback2(4701).terminate();
      const obj15 = callback2(4701);
      callback2(14456).terminate();
    };
  }, []);
  let shouldUseAltGateway;
  let obj = shouldUseAltGateway(504);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => closure_6.isAuthenticated());
  shouldUseAltGateway = stateFromStores;
  const items1 = [stateFromStores];
  const effect1 = React.useEffect(() => {
    if (shouldUseAltGateway) {
      const token = closure_1_6.getToken();
      if (null == token) {
        const _Error = Error;
        error = new Error("Authenticated without a token");
        throw error;
      } else {
        closure_1_1(closure_1_2[52]).startSession(token);
        const obj = closure_1_1(closure_1_2[52]);
        closure_1_1(closure_1_2[53]).initialize();
        const obj2 = closure_1_1(closure_1_2[53]);
        if (obj3.isAndroid()) {
          const NativePermissionManager = closure_1_4.NativePermissionManager;
          const notificationAuthorization = NativePermissionManager.requestNotificationAuthorization();
        }
        return () => {
          callback(table[53]).terminate();
        };
      }
    }
  }, items1);
  const effect2 = React.useEffect(() => {
    callback(9).wasAuthenticated = closure_6.isAuthenticated();
  }, []);
  shouldUseAltGateway = undefined;
  const isChannelMetadataObfuscationEnabled = shouldUseAltGateway(13672).useIsChannelMetadataObfuscationEnabled("App");
  shouldUseAltGateway = isChannelMetadataObfuscationEnabled;
  const items2 = [isChannelMetadataObfuscationEnabled];
  const effect3 = React.useEffect(() => {
    const result = closure_1_1(closure_1_2[56]).setUseChannelObfuscation(shouldUseAltGateway);
  }, items2);
  shouldUseAltGateway = undefined;
  let obj2 = shouldUseAltGateway(13672);
  shouldUseAltGateway = shouldUseAltGateway(14555).useShouldUseAltGateway("App");
  const items3 = [shouldUseAltGateway];
  const effect4 = React.useEffect(() => {
    closure_1_1(closure_1_2[56]).setUseAltGateway(shouldUseAltGateway);
  }, items3);
  const effect5 = React.useEffect(() => {
    const renderAppEffect = callback(9).renderAppEffect;
    return renderAppEffect.record();
  }, []);
  obj = { profile: null, children: null };
  let obj3 = shouldUseAltGateway(14555);
  obj[0] = shouldUseAltGateway(11538).Profiles.App;
  obj = { appEntryKey: "main", children: null };
  const tmp11 = setLevelsDefault;
  obj[1] = jsx(getAuthComponentDefault, {});
  obj[1] = jsx(GestureWrapperDefault, { appEntryKey: "main", children: null });
  return <tmp11 appEntryKey="main">{null}</tmp11>;
};
