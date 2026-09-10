// Module ID: 14605
// Function ID: 14606
// Name: ThemedStatusBar
// Dependencies: [19, 1183, 502, 21, 504, 4431, 4425, 9711, 9513, 2]
// Exports: default

// Module 14605 (ThemedStatusBar)
import initialize from "initialize" /* 504 */;
import shared from "shared" /* 4425 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4431 */;
import StatusBarDefault from "StatusBar" /* 9513 */;
import useGlobalStatusIndicatorState from "useGlobalStatusIndicatorState" /* 9711 */;
import noop from "module_19" /* 19 */;
import ThemeStore from "ThemeStore" /* 1183 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/status_bar/native/components/ThemedStatusBar.tsx");

export default function ThemedStatusBar() {
  const items = [AuthenticationStore];
  const stateFromStores = initialize.useStateFromStores(items, () => authenticated.isAuthenticated());
  const isModalOpen = NavigationRouteUtils.useIsModalOpen();
  const items1 = [ThemeStore];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => shared.isThemeDark(theme.theme));
  const globalStatusIndicatorState = useGlobalStatusIndicatorState.useGlobalStatusIndicatorState();
  if (!stateFromStores) {
    const obj5 = { barStyle: "light-content" };
    return jsx(StatusBarDefault, { barStyle: "light-content" });
  } else if (isModalOpen) {
    let str2 = "dark-content";
    if (stateFromStores1) {
      str2 = "light-content";
    }
  } else {
    if (!globalStatusIndicatorState.isVisible) {
      let str = "dark-content";
    }
    str = "light-content";
  }
};
