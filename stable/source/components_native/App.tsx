// Module ID: 14396
// Function ID: 14397
// Name: App
// Dependencies: [19, 17, 14397, 502, 9092, 13690, 13699, 13719, 10670, 13998, 14398, 14399, 14400, 7644, 4224, 4552, 14401, 6943, 14402, 14403, 21, 14404, 1896, 14437, 4961, 14443, 14444, 14445, 14446, 7756, 14456, 7760, 14457, 14460, 10713, 14531, 9521, 9574, 8272, 14539, 14541, 14545, 14547, 14548, 14549, 14550, 4701, 14551, 1115, 5160, 12786, 504, 6593, 14553, 9, 13672, 13641, 14555, 11538, 14557, 15943, 2]
// Exports: default

// Module 14396 (App)
import TTITrackerDefault from "TTITracker" /* 9 */;
import VoiceEngineStreamingManagerDefault from "VoiceEngineStreamingManager" /* 4701 */;
import AccessibilityFocusLockManagerDefault from "AccessibilityFocusLockManager" /* 4961 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6593 */;
import ForegroundServiceManagerDefault from "ForegroundServiceManager" /* 7756 */;
import SentMessageIntentsHandlerDefault from "SentMessageIntentsHandler" /* 7760 */;
import MediaPlayerMuteManagerDefault from "MediaPlayerMuteManager" /* 8272 */;
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager" /* 9521 */;
import FramesNativeManagerDefault from "FramesNativeManager" /* 9574 */;
import GPlayManagerDefault from "GPlayManager" /* 10713 */;
import StartupProfilerDefault from "StartupProfiler" /* 11538 */;
import NativeFastConnectModuleDefault from "NativeFastConnectModule" /* 13641 */;
import AccessibilityManagerDefault from "AccessibilityManager" /* 14437 */;
import BackPressManagerDefault from "BackPressManager" /* 14443 */;
import CallKitManagerDefault from "CallKitManager" /* 14444 */;
import AccessibilityCallManagerDefault from "AccessibilityCallManager" /* 14445 */;
import NotificationTokenManagerDefault from "NotificationTokenManager" /* 14446 */;
import VoiceNotificationManagerDefault from "VoiceNotificationManager" /* 14456 */;
import UserSettingsProtoManagerDefault from "UserSettingsProtoManager" /* 14457 */;
import NativeRPCServerManagerDefault from "NativeRPCServerManager" /* 14460 */;
import MobileVoiceOverlayLifecycleManagerDefault from "MobileVoiceOverlayLifecycleManager" /* 14531 */;
import MediaPlayerManagerDefault from "MediaPlayerManager" /* 14539 */;
import SoundboardManagerDefault from "SoundboardManager" /* 14541 */;
import VoiceMessagesPlaybackManagerDefault from "VoiceMessagesPlaybackManager" /* 14545 */;
import ICYMIManagerDefault from "ICYMIManager" /* 14547 */;
import GameRelationshipManagerDefault from "GameRelationshipManager" /* 14548 */;
import CollectiblesMarketingManagerDefault from "CollectiblesMarketingManager" /* 14549 */;
import SessionAdManagerDefault from "SessionAdManager" /* 14550 */;
import TouchEventAnalyticsManagerDefault from "TouchEventAnalyticsManager" /* 14551 */;
import LocalMessageCacheManagerDefault from "LocalMessageCacheManager" /* 14553 */;
import AppContainerDefault from "AppContainer" /* 14557 */;
import MainNavigatorDefault from "MainNavigator" /* 15943 */;
import noop from "module_19" /* 19 */;
import MobileNativeUpdateStore from "MobileNativeUpdateStore" /* 14397 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

const IosImageTypesManagerDefault = tmp(5160);
const require = fn;
const NativeModules = fn(17).NativeModules;
const AudioManagerStore = fn(9092);
const ConnectivityIndicatorStateStore = fn(13690);
const RequestReviewStore = fn(13699);
const LocalPushNotificationStore = fn(13719);
const PromotionsStore = fn(10670);
const BitRateStore = fn(13998);
const ShareStore = fn(14398);
const PermissionVADStore = fn(14399);
const InteractionModalStore = fn(14400);
const MobileAppDatabaseManager = fn(7644);
const SubscriptionStore = fn(4224);
const AccessibilityStore = fn(4552);
const AnalyticsLogStore = fn(14401);
const PhoneStore = fn(6943);
const ICYMISessionStore = fn(14402);
const MemoryExperiment = fn(14403);
const jsx = fn(21).jsx;
if (global.__DEV__) {
  fn(1896)(14404, dependencyMap.paths);
}
const size = fn(2);
let result = size.fileFinishedImporting("components_native/App.tsx");

export default function App() {
  const renderApp = TTITrackerDefault.renderApp;
  renderApp.record();
  const effect = noop.useEffect(() => {
    AccessibilityManagerDefault.init();
    AccessibilityFocusLockManagerDefault.initialize();
    BackPressManagerDefault.initialize();
    CallKitManagerDefault.initialize();
    AccessibilityCallManagerDefault.initialize();
    NotificationTokenManagerDefault.initialize();
    ForegroundServiceManagerDefault.initialize();
    VoiceNotificationManagerDefault.initialize();
    SentMessageIntentsHandlerDefault.init();
    UserSettingsProtoManagerDefault.init();
    NativeRPCServerManagerDefault.init();
    GPlayManagerDefault.initialize();
    MobileVoiceOverlayLifecycleManagerDefault.initialize();
    EmbeddedActivitiesNativeManagerDefault.initialize();
    FramesNativeManagerDefault.initialize();
    MediaPlayerMuteManagerDefault.initialize();
    MediaPlayerManagerDefault.initialize();
    SoundboardManagerDefault.initialize();
    VoiceMessagesPlaybackManagerDefault.initialize();
    MobileNativeUpdateStore.ensureInitialized();
    ICYMIManagerDefault.initialize();
    GameRelationshipManagerDefault.initialize();
    CollectiblesMarketingManagerDefault.initialize();
    SessionAdManagerDefault.initialize();
    VoiceEngineStreamingManagerDefault.initialize();
    TouchEventAnalyticsManagerDefault.initialize();
    const tmp29 = stateFromStores;
    if (obj26.isIOS()) {
      IosImageTypesManagerDefault.initialize();
      const tmpResult = IosImageTypesManagerDefault;
    }
    obj26 = stateFromStores(1115);
    const result = tmp29(12786).initializeRouteManagerIfNeeded();
    return () => {
      closure_1_1(14445).terminate();
      const obj = closure_1_1(14445);
      closure_1_1(4961).terminate();
      const obj2 = closure_1_1(4961);
      closure_1_1(10713).terminate();
      const obj3 = closure_1_1(10713);
      closure_1_1(14531).terminate();
      const obj4 = closure_1_1(14531);
      stateFromStores(12786).cleanupRouteManager();
      const obj5 = stateFromStores(12786);
      closure_1_1(14551).terminate();
      const obj6 = closure_1_1(14551);
      closure_1_1(14539).terminate();
      const obj7 = closure_1_1(14539);
      closure_1_1(8272).terminate();
      const obj8 = closure_1_1(8272);
      closure_1_1(14460).terminate();
      const obj9 = closure_1_1(14460);
      closure_1_1(14443).terminate();
      const obj10 = closure_1_1(14443);
      closure_1_1(14545).terminate();
      const obj11 = closure_1_1(14545);
      closure_1_1(14547).terminate();
      const obj12 = closure_1_1(14547);
      closure_1_1(14548).terminate();
      const obj13 = closure_1_1(14548);
      closure_1_1(14550).terminate();
      const obj14 = closure_1_1(14550);
      closure_1_1(4701).terminate();
      const obj15 = closure_1_1(4701);
      closure_1_1(14456).terminate();
    };
  }, []);
  let stateFromStores;
  const items = [AuthenticationStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => AuthenticationStore.isAuthenticated());
  const items1 = [stateFromStores];
  const effect1 = noop.useEffect(() => {
    if (stateFromStores) {
      const token = AuthenticationStore.getToken();
      if (null == token) {
        const _Error = Error;
        const error = new Error("Authenticated without a token");
        throw error;
      } else {
        AuthenticationActionCreatorsDefault.startSession(token);
        LocalMessageCacheManagerDefault.initialize();
        if (obj3.isAndroid()) {
          const NativePermissionManager = NativeModules.NativePermissionManager;
          const notificationAuthorization = NativePermissionManager.requestNotificationAuthorization();
        }
        return () => {
          closure_1_1(dependencyMap[53]).terminate();
        };
      }
    }
  }, items1);
  const effect2 = noop.useEffect(() => {
    TTITrackerDefault.wasAuthenticated = AuthenticationStore.isAuthenticated();
  }, []);
  let obj = stateFromStores(504);
  const isChannelMetadataObfuscationEnabled = stateFromStores(13672).useIsChannelMetadataObfuscationEnabled("App");
  closure_129_0 = isChannelMetadataObfuscationEnabled;
  const items2 = [isChannelMetadataObfuscationEnabled];
  const effect3 = noop.useEffect(() => {
    const result = NativeFastConnectModuleDefault.setUseChannelObfuscation(stateFromStores);
  }, items2);
  let obj2 = stateFromStores(13672);
  const shouldUseAltGateway = stateFromStores(14555).useShouldUseAltGateway("App");
  closure_130_0 = shouldUseAltGateway;
  const items3 = [shouldUseAltGateway];
  const effect4 = noop.useEffect(() => {
    NativeFastConnectModuleDefault.setUseAltGateway(stateFromStores);
  }, items3);
  const effect5 = noop.useEffect(() => {
    const renderAppEffect = TTITrackerDefault.renderAppEffect;
    return renderAppEffect.record();
  }, []);
  let obj4 = { profile: null, children: null };
  let obj3 = stateFromStores(14555);
  obj4.profile = stateFromStores(11538).Profiles.App;
  let obj5 = { appEntryKey: "main", children: null };
  obj5.children = jsx(MainNavigatorDefault, {});
  obj4.children = jsx(AppContainerDefault, { appEntryKey: "main", children: null });
  return <tmp11 profile={null}>{null}</tmp11>;
};
