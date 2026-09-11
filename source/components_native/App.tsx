// Module ID: 14448
// Function ID: 14449
// Name: App
// Dependencies: [19, 17, 14449, 502, 9178, 13743, 13752, 13772, 10756, 14050, 14450, 14451, 14452, 7717, 4270, 4599, 14453, 7015, 14454, 14455, 21, 14456, 1896, 14489, 5013, 14495, 14496, 14497, 14498, 7829, 14508, 7833, 14509, 14512, 10799, 14583, 9608, 9661, 8351, 14591, 14593, 14597, 14599, 14600, 14601, 14602, 4748, 14603, 1115, 5212, 12877, 504, 6665, 14605, 9, 13725, 13694, 14607, 11628, 14609, 16011, 2]
// Exports: default

// Module 14448 (App)
import TTITrackerDefault from "TTITracker" /* 9 */;
import VoiceEngineStreamingManagerDefault from "VoiceEngineStreamingManager" /* 4748 */;
import AccessibilityFocusLockManagerDefault from "AccessibilityFocusLockManager" /* 5013 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6665 */;
import ForegroundServiceManagerDefault from "ForegroundServiceManager" /* 7829 */;
import SentMessageIntentsHandlerDefault from "SentMessageIntentsHandler" /* 7833 */;
import MediaPlayerMuteManagerDefault from "MediaPlayerMuteManager" /* 8351 */;
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager" /* 9608 */;
import FramesNativeManagerDefault from "FramesNativeManager" /* 9661 */;
import GPlayManagerDefault from "GPlayManager" /* 10799 */;
import StartupProfilerDefault from "StartupProfiler" /* 11628 */;
import NativeFastConnectModuleDefault from "NativeFastConnectModule" /* 13694 */;
import AccessibilityManagerDefault from "AccessibilityManager" /* 14489 */;
import BackPressManagerDefault from "BackPressManager" /* 14495 */;
import CallKitManagerDefault from "CallKitManager" /* 14496 */;
import AccessibilityCallManagerDefault from "AccessibilityCallManager" /* 14497 */;
import NotificationTokenManagerDefault from "NotificationTokenManager" /* 14498 */;
import VoiceNotificationManagerDefault from "VoiceNotificationManager" /* 14508 */;
import UserSettingsProtoManagerDefault from "UserSettingsProtoManager" /* 14509 */;
import NativeRPCServerManagerDefault from "NativeRPCServerManager" /* 14512 */;
import MobileVoiceOverlayLifecycleManagerDefault from "MobileVoiceOverlayLifecycleManager" /* 14583 */;
import MediaPlayerManagerDefault from "MediaPlayerManager" /* 14591 */;
import SoundboardManagerDefault from "SoundboardManager" /* 14593 */;
import VoiceMessagesPlaybackManagerDefault from "VoiceMessagesPlaybackManager" /* 14597 */;
import ICYMIManagerDefault from "ICYMIManager" /* 14599 */;
import GameRelationshipManagerDefault from "GameRelationshipManager" /* 14600 */;
import CollectiblesMarketingManagerDefault from "CollectiblesMarketingManager" /* 14601 */;
import SessionAdManagerDefault from "SessionAdManager" /* 14602 */;
import TouchEventAnalyticsManagerDefault from "TouchEventAnalyticsManager" /* 14603 */;
import LocalMessageCacheManagerDefault from "LocalMessageCacheManager" /* 14605 */;
import AppContainerDefault from "AppContainer" /* 14609 */;
import MainNavigatorDefault from "MainNavigator" /* 16011 */;
import noop from "module_19" /* 19 */;
import MobileNativeUpdateStore from "MobileNativeUpdateStore" /* 14449 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

const IosImageTypesManagerDefault = tmp(5212);
const require = fn;
const NativeModules = fn(17).NativeModules;
const AudioManagerStore = fn(9178);
const ConnectivityIndicatorStateStore = fn(13743);
const RequestReviewStore = fn(13752);
const LocalPushNotificationStore = fn(13772);
const PromotionsStore = fn(10756);
const BitRateStore = fn(14050);
const ShareStore = fn(14450);
const PermissionVADStore = fn(14451);
const InteractionModalStore = fn(14452);
const MobileAppDatabaseManager = fn(7717);
const SubscriptionStore = fn(4270);
const AccessibilityStore = fn(4599);
const AnalyticsLogStore = fn(14453);
const PhoneStore = fn(7015);
const ICYMISessionStore = fn(14454);
const MemoryExperiment = fn(14455);
const jsx = fn(21).jsx;
if (global.__DEV__) {
  fn(1896)(14456, dependencyMap.paths);
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
    const result = tmp29(12877).initializeRouteManagerIfNeeded();
    return () => {
      closure_1_1(14497).terminate();
      const obj = closure_1_1(14497);
      closure_1_1(5013).terminate();
      const obj2 = closure_1_1(5013);
      closure_1_1(10799).terminate();
      const obj3 = closure_1_1(10799);
      closure_1_1(14583).terminate();
      const obj4 = closure_1_1(14583);
      stateFromStores(12877).cleanupRouteManager();
      const obj5 = stateFromStores(12877);
      closure_1_1(14603).terminate();
      const obj6 = closure_1_1(14603);
      closure_1_1(14591).terminate();
      const obj7 = closure_1_1(14591);
      closure_1_1(8351).terminate();
      const obj8 = closure_1_1(8351);
      closure_1_1(14512).terminate();
      const obj9 = closure_1_1(14512);
      closure_1_1(14495).terminate();
      const obj10 = closure_1_1(14495);
      closure_1_1(14597).terminate();
      const obj11 = closure_1_1(14597);
      closure_1_1(14599).terminate();
      const obj12 = closure_1_1(14599);
      closure_1_1(14600).terminate();
      const obj13 = closure_1_1(14600);
      closure_1_1(14602).terminate();
      const obj14 = closure_1_1(14602);
      closure_1_1(4748).terminate();
      const obj15 = closure_1_1(4748);
      closure_1_1(14508).terminate();
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
  const isChannelMetadataObfuscationEnabled = stateFromStores(13725).useIsChannelMetadataObfuscationEnabled("App");
  closure_129_0 = isChannelMetadataObfuscationEnabled;
  const items2 = [isChannelMetadataObfuscationEnabled];
  const effect3 = noop.useEffect(() => {
    const result = NativeFastConnectModuleDefault.setUseChannelObfuscation(stateFromStores);
  }, items2);
  let obj2 = stateFromStores(13725);
  const shouldUseAltGateway = stateFromStores(14607).useShouldUseAltGateway("App");
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
  let obj3 = stateFromStores(14607);
  obj4.profile = stateFromStores(11628).Profiles.App;
  let obj5 = { appEntryKey: "main", children: null };
  obj5.children = jsx(MainNavigatorDefault, {});
  obj4.children = jsx(AppContainerDefault, { appEntryKey: "main", children: null });
  return <tmp11 profile={null}>{null}</tmp11>;
};
