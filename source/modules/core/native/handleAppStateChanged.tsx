// Module ID: 18107
// Function ID: 18108
// Name: handleAppStateChanged
// Dependencies: [502, 1896, 1074, 3, 10, 573, 4661, 18106, 7585, 4486, 9, 1241, 2]
// Exports: default

// Module 18107 (handleAppStateChanged)
import LoggerDefault from "Logger" /* 3 */;
import TTITrackerDefault from "TTITracker" /* 9 */;
import AppStartPerformanceDefault from "AppStartPerformance" /* 10 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import ThemeActionCreators from "ThemeActionCreators" /* 4486 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4661 */;
import TTIAnalyticsUtils from "TTIAnalyticsUtils" /* 7585 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import AppStateStore from "AppStateStore" /* 1896 */;

require = fn;
const Constants = fn(1074);
({ AnalyticEvents: hasOwnProperty, AppStates: metroRequire } = Constants);
let closure_7 = new LoggerDefault("index.native.tsx");
const size = fn(2);
let result = size.fileFinishedImporting("modules/core/native/handleAppStateChanged.tsx");

export default function handleAppStateChanged(state) {
  state = AppStateStore.getState();
  AppStartPerformanceDefault.markAndLog(closure_7, "\u{1F3C3}", "AppState changing from " + state + " to " + state);
  DispatcherDefault.dispatch({ type: "APP_STATE_UPDATE", state });
  let isAuthenticatedResult = state === constants2.BACKGROUND && state === tmp6.ACTIVE;
  if (isAuthenticatedResult) {
    isAuthenticatedResult = AuthenticationStore.isAuthenticated();
  }
  if (isAuthenticatedResult) {
    isAuthenticatedResult = RTCConnectionStore.default.isDisconnected();
    const _default = RTCConnectionStore.default;
  }
  if (isAuthenticatedResult) {
    tmp2(18106).deferUpdate();
    const tmp2Result = tmp2(18106);
  }
  if (state === constants2.ACTIVE) {
    TTIAnalyticsUtils.trackAppOpened("launcher");
    const result = ThemeActionCreators.setSystemThemeIfNeeded();
  }
  const obj3 = { type: "APP_STATE_UPDATE", state };
  const tmp8 = state === constants2.ACTIVE && state !== constants2.ACTIVE;
  TTITrackerDefault.appStateChanged(state);
  if (tmp8) {
    tmp2(1241).track(constants.APP_BACKGROUND, {});
    const tmp2Result4 = tmp2(1241);
  }
};
