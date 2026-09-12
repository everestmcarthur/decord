// Module ID: 14746
// Function ID: 14747
// Name: UserSettingsWebAuthn
// Dependencies: [19, 14744, 21, 14747, 7103, 2]
// Exports: default

// Module 14746 (UserSettingsWebAuthn)
import Navigator from "Navigator" /* 7103 */;
import WebAuthnScreens2 from "WebAuthnScreens" /* 14747 */;
import noop from "module_19" /* 19 */;

require = fn;
const WebAuthnScreens = fn(14744).WebAuthnScreens;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/webauthn/native/UserSettingsWebAuthn.tsx");

export default function UserSettingsWebAuthn(showNav) {
  ({ navigation: require, initialRouteName } = showNav);
  if (initialRouteName === undefined) {
    initialRouteName = WebAuthnScreens.INIT;
  }
  let flag = showNav.showNav;
  if (flag === undefined) {
    flag = false;
  }
  const screens = WebAuthnScreens2.getScreens({ isModal: false });
  const layoutEffect = noop.useLayoutEffect(() => {
    options.setOptions({ headerShown: flag });
  });
  const obj2 = { screens, initialRouteName, initialRouteStack: null, useContainer: false };
  const items = [{ name: initialRouteName }];
  obj2.initialRouteStack = items;
  return jsx(Navigator.Navigator, { screens, initialRouteName, initialRouteStack: null, useContainer: false });
};
