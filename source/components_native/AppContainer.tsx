// Module ID: 14607
// Function ID: 14608
// Name: AppContainer
// Dependencies: [32, 19, 17, 7401, 1957, 2011, 1074, 1964, 21, 4606, 576, 4343, 5177, 14608, 4812, 1109, 1233, 4465, 4958, 7109, 14610, 14611, 4464, 1100, 4541, 1242, 4466, 14612, 7114, 1484, 1369, 14613, 1115, 11626, 14614, 14622, 4388, 14624, 1480, 9734, 12876, 12882, 14625, 4479, 14626, 14628, 14630, 14631, 14632, 16002, 16010, 1232, 2]

// Module 14607 (AppContainer)
import nativeDefault from "native" /* 576 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1109 */;
import SentryUtilsDefault from "SentryUtils" /* 1232 */;
import SentryInitUtils from "SentryInitUtils" /* 1233 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import GlobalUtils from "GlobalUtils" /* 1369 */;
import AppEntryKeyContext from "AppEntryKeyContext" /* 1480 */;
import Link from "Link" /* 1484 */;
import ManaContext from "ManaContext" /* 4388 */;
import RootNavigationRef from "RootNavigationRef" /* 4465 */;
import getInitialNavigationStateDefault from "getInitialNavigationState" /* 4466 */;
import Portal from "Portal" /* 4479 */;
import useThemeDefault from "useTheme" /* 4541 */;
import ModalDispatchQueueDefault from "ModalDispatchQueue" /* 4812 */;
import useIsScreenLandscape from "useIsScreenLandscape" /* 5177 */;
import useNavigationTheme from "useNavigationTheme" /* 7114 */;
import WebViewContext from "WebViewContext" /* 9734 */;
import StartupProfiler from "StartupProfiler" /* 11626 */;
import MemoryRouter from "MemoryRouter" /* 12876 */;
import RouteManagerDefault from "RouteManager" /* 12882 */;
import DiscordGestureHandlerRootViewDefault from "DiscordGestureHandlerRootView" /* 14608 */;
import getChannelDetailsFromRouteDefault from "getChannelDetailsFromRoute" /* 14611 */;
import MainNavigationLoggerDefault from "MainNavigationLogger" /* 14612 */;
import ReanimatedScreenProvider from "ReanimatedScreenProvider" /* 14614 */;
import RootThemeContextProvider from "RootThemeContextProvider" /* 14622 */;
import AccessibilityPreferencesContextProviderDefault from "AccessibilityPreferencesContextProvider" /* 14624 */;
import ErrorBoundaryDefault from "ErrorBoundary" /* 14625 */;
import AnimatedKeyboardProviderDefault from "AnimatedKeyboardProvider" /* 14626 */;
import KeyCommandsViewDefault from "KeyCommandsView" /* 14628 */;
import ThemedStatusBarDefault from "ThemedStatusBar" /* 14630 */;
import SafeAreaProvider from "SafeAreaProvider" /* 14631 */;
import DevToolsLazyDefault from "DevToolsLazy" /* 14632 */;
import ScreenRecordingPipDefault from "ScreenRecordingPip" /* 16002 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;

const StartupProfilerDefault = StartupProfiler;

require = fn;
function GestureWrapper(children) {
  const tmp = closure_16();
  const styles = tmp;
  const isScreenLandscape = useIsScreenLandscape.useIsScreenLandscape();
  let items = [isScreenLandscape, tmp];
  const style = noop.useMemo(() => {
    const items = [styles.flex, ];
    let rootBackgroundColor;
    if (isScreenLandscape) {
      rootBackgroundColor = styles.rootBackgroundColor;
    }
    items[1] = rootBackgroundColor;
    return items;
  }, items);
  return closure_1_14(DiscordGestureHandlerRootViewDefault, { style, children: children.children });
}
function handleNavigationOnReady() {
  ModalDispatchQueueDefault.flush();
  const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
  ComponentDispatch.dispatch(constants2.NAVIGATOR_READY);
  const routingInstrumentation = SentryInitUtils.routingInstrumentation;
  const result = routingInstrumentation.registerNavigationContainer(RootNavigationRef.getRootNavigationRef());
  closure_7();
}
function AppNavigationContainer(children) {
  noop.useRef(undefined);
  const callback = noop.useCallback(() => {
    const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
    if (null != rootNavigationRef) {
      if (rootNavigationRef.isReady()) {
        const currentRoute = rootNavigationRef.getCurrentRoute();
        const tmpResult = tmp(4464);
        const tmp4 = null != tmp(4464).coerceGuildsRoute(currentRoute);
        const tmp5 = ref;
        const tmpResult4 = tmp(4464);
        if (tmp6) {
          AnalyticsUtilsDefault.track(constants.NAV_DRAWER_OPENED);
        }
        tmp5.current = currentRoute;
        tmp6 = null != tmp(4464).coerceChannelRoute(ref.current) && tmp4;
        const tmp14 = _slicedToArray(getChannelDetailsFromRouteDefault(currentRoute, true), 2)[1];
        if (null != tmp14) {
          if (isStaticChannelRoute(tmp14)) {
            if (tmp14 !== SelectedChannelStore.getChannelId()) {
              const coerceChannelRouteResult = tmp(4464).coerceChannelRoute(currentRoute);
              if (!tmp18) {
                tmp(1100).transitionTo(closure_2_12.CHANNEL(tmp13, tmp14), { openChannel: true, navigationReplace: false });
                const tmpResult6 = tmp(1100);
              }
              tmp18 = null != coerceChannelRouteResult && coerceChannelRouteResult.params.showCreateThread;
              const tmpResult5 = tmp(4464);
            }
          }
        }
        const tmp12 = _slicedToArray(getChannelDetailsFromRouteDefault(currentRoute, true), 2);
      }
    }
    closure_7();
  }, []);
  const memo = noop.useMemo(() => {
    const tmp = getInitialNavigationStateDefault();
    let name;
    if (tmp != null) {
      const first = tmp.routes[0];
      if (first != null) {
        name = first.name;
      }
    }
    MainNavigationLoggerDefault.log("Initial Screen: " + name);
    return tmp;
  }, []);
  _require = noop.useRef(true);
  const effect = noop.useEffect(() => {
    if (ref2.current) {
      tmp.current = false;
    } else {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        const rootNavigationRef = ref2(dependencyMap[17]).getRootNavigationRef();
        if (null != rootNavigationRef) {
          if (rootNavigationRef.isReady()) {
            const routes = rootNavigationRef.getState().routes;
            const found = routes.filter((name) => "modal" === name.name);
            rootNavigationRef.reset(closure_1_2(dependencyMap[26])(found));
          }
        }
      }, 0);
      return () => {
        clearTimeout(closure_0);
      };
    }
  }, []);
  let tmp = useThemeDefault();
  const navigationTheme = require("useNavigationTheme").useNavigationTheme(tmp);
  const obj2 = { theme: navigationTheme, ref: null, onReady: null, onStateChange: null, initialState: null, navigationInChildEnabled: true, children: null };
  const obj = require("useNavigationTheme");
  obj2.ref = require("RootNavigationRef").getRootNavigationRef();
  obj2.onReady = handleNavigationOnReady;
  obj2.onStateChange = callback;
  obj2.initialState = memo;
  obj2.children = children.children;
  return closure_14(require("Link").NavigationContainer, obj2);
}
function ShareNavigationContainer(children) {
  const tmp = useThemeDefault();
  const theme = useNavigationTheme.useNavigationTheme(tmp);
  return closure_1_14(Link.NavigationContainer, { theme, navigationInChildEnabled: true, children: children.children });
}
function AppNavigationContainerOrEmpty(arg0) {
  ({ children, appEntryKey } = arg0);
  if ("main" === appEntryKey) {
    const obj2 = { children };
    return closure_1_14(AppNavigationContainer, obj2);
  } else if ("share" === appEntryKey) {
    const obj3 = { children };
    return closure_1_14(ShareNavigationContainer, obj3);
  } else {
    return GlobalUtils.assertNever(appEntryKey);
  }
}
const NativeModules = fn(17).NativeModules;
let closure_7 = fn(7401).handleHistoryStoreNavigationChange;
const Constants = fn(1074);
({ AnalyticEvents: c10, ComponentActions: closure_11, Routes: closure_12 } = Constants);
const isStaticChannelRoute = fn(1964).isStaticChannelRoute;
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
const createStyles = fn(4606);
let obj2 = { flex: { flex: 1 }, rootBackgroundColor: { backgroundColor: nativeDefault.colors.ANDROID_NAVIGATION_BAR_BACKGROUND } };
let closure_16 = createStyles.createStyles(obj2);
const ReanimatedRexport = fn(4343);
let obj3 = { backgroundColor: nativeDefault.colors.ANDROID_NAVIGATION_BAR_BACKGROUND };
let result = ReanimatedRexport.configureReanimatedLogger({ level: fn(4343).ReanimatedLogLevel.error, strict: false });
try {
  fn(4958).enableFreeze();
  let obj6 = fn(4958);
  let obj8 = { useTrackNavigatorScreenImpression: fn(14610).useTrackNavigatorScreenImpression };
  fn(7109).setDesignConfig(obj8);
  let c22 = false;
  let closure_23 = { code: "function AppContainerTsx1(){const{RNScreensTurboModule}=this.__closure;global.RNScreensTurboModule=RNScreensTurboModule;}" };
  let obj7 = fn(7109);
  const result1 = SentryUtilsDefault.profiledRootComponent(function AppContainer(children) {
    children = children.children;
    const appEntryKey = children.appEntryKey;
    const requestGatewaySocket = appEntryKey(14613).useRequestGatewaySocket("AppContainer:" + appEntryKey);
    const effect = noop.useEffect(() => {
      if (!c22) {
        RNScreensTurboModule = RNScreensTurboModule.RNScreensTurboModule;
        const fn = function e() {
          children.RNScreensTurboModule = RNScreensTurboModule;
        };
        const obj2 = { RNScreensTurboModule };
        fn.__closure = obj2;
        fn.__workletHash = 8891274578898;
        fn.__initData = __initData;
        appEntryKey(4343).runOnUI(fn)();
        c22 = true;
        const obj = appEntryKey(4343);
      }
    }, []);
    const effect1 = noop.useEffect(() => {
      let SplashScreenManager = appEntryKey(1115).isIOS();
      if (SplashScreenManager) {
        SplashScreenManager = NativeModules.SplashScreenManager;
      }
      if (SplashScreenManager) {
        const SplashScreenManager2 = NativeModules.SplashScreenManager;
        SplashScreenManager2.hideSplashScreen();
      }
    }, []);
    let obj = appEntryKey(14613);
    const riveAppStatePlaybackExperiment = appEntryKey(16010).useRiveAppStatePlaybackExperiment("AppContainer");
    closure_129_0 = riveAppStatePlaybackExperiment;
    let items = [riveAppStatePlaybackExperiment];
    const memo = noop.useMemo(() => {
      const items = [];
      if (children) {
        items.push("rive-app-state-playback");
      }
      return items;
    }, items);
    closure_129_1 = memo;
    let items1 = [memo];
    const memo1 = noop.useMemo(() => {
      const obj = {
        experiments: { enabledExperiments: appEntryKey },
        captureException(arg0, tags) {
          return memo1(dependencyMap[51]).captureException(arg0, { tags });
        }
      };
      return obj;
    }, items1);
    const items2 = [appEntryKey, children, memo1];
    return noop.useMemo(() => {
      const obj = { profile: StartupProfiler.Profiles.AppContainer, children: null };
      const obj2 = { children: null };
      const obj3 = { children: null };
      const obj4 = { value: memo1, children: null };
      const obj5 = { children: null };
      const tmp = StartupProfilerDefault;
      const obj6 = { value: appEntryKey, children: null };
      const obj7 = { appEntryKey, children: null };
      const obj8 = { children: null };
      const obj9 = { history: null, children: null };
      const tmp2 = AccessibilityPreferencesContextProviderDefault;
      obj9.history = RouteManagerDefault.getHistory();
      const obj11 = { children: null };
      const obj12 = { children: null };
      const obj13 = { children: null };
      const obj14 = { children: null };
      const obj15 = { children: null };
      const tmp3 = ErrorBoundaryDefault;
      const items = [closure_2_14(ThemedStatusBarDefault, {}), ];
      const obj16 = { children: null };
      const items1 = [children, closure_2_14(SafeAreaProvider.SafeAreaReporter, {}), closure_2_14(DevToolsLazyDefault, {}), closure_2_14(ScreenRecordingPipDefault, {})];
      obj16.children = items1;
      items[1] = __initData(SafeAreaProvider.SafeAreaProvider, obj16);
      obj15.children = items;
      obj14.children = __initData(KeyCommandsViewDefault, obj15);
      obj13.children = closure_2_14(AnimatedKeyboardProviderDefault.Component, obj14);
      obj12.children = closure_2_14(Portal.PortalProvider, obj13);
      obj11.children = closure_2_14(tmp3, obj12);
      obj9.children = closure_2_14(GestureWrapper, obj11);
      obj8.children = closure_2_14(MemoryRouter.Router, obj9);
      obj7.children = closure_2_14(WebViewContext.WebViewContextProvider, obj8);
      obj6.children = closure_2_14(AppNavigationContainerOrEmpty, obj7);
      obj5.children = closure_2_14(AppEntryKeyContext.AppEntryKeyContext.Provider, obj6);
      obj4.children = closure_2_14(tmp2, obj5);
      obj3.children = closure_2_14(ManaContext.ManaContextProvider, obj4);
      obj2.children = closure_2_14(RootThemeContextProvider.RootThemeContextProvider, obj3);
      obj.children = closure_2_14(ReanimatedScreenProvider.ReanimatedScreenProvider, obj2);
      return closure_2_14(tmp, obj);
    }, items2);
  });
  const importDefaultResult = SentryUtilsDefault;
  const result2 = fn(2).fileFinishedImporting("components_native/AppContainer.tsx");
  exports.default = result1;
} catch (err) {
}
