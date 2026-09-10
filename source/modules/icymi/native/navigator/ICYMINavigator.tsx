// Module ID: 16483
// Function ID: 16484
// Name: ICYMINavigator
// Dependencies: [21, 7927, 7014, 16484, 16435, 2]
// Exports: default

// Module 16483 (ICYMINavigator)
import jsxProd from "jsxProd" /* 21 */;
import NativeStackNavigator from "NativeStackNavigator" /* 7927 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

({ jsx: c2, jsxs: c3 } = jsxProd);
let closure_4 = NativeStackNavigator.createNativeStackNavigator();
const result = size.fileFinishedImporting("modules/icymi/native/navigator/ICYMINavigator.tsx");

export default function ICYMINavigator() {
  _require = require("Navigator").useAccessibilityNativeStackOptions();
  const obj2 = {
    screenOptions() {
      const merged = Object.assign(closure_0);
      return { headerShown: false, fullScreenGestureEnabled: true };
    },
    initialRouteName: "icymi-screen",
    children: null
  };
  const items = [
    closure_2(closure_4.Screen, {
      name: "icymi-screen",
      getComponent() {
        return closure_0(16484).ICYMITab;
      }
    }),
    closure_2(closure_4.Screen, {
      name: "notifications-screen",
      getComponent() {
        return closure_0(16435).ThemedNotificationsModal;
      }
    })
  ];
  obj2.children = items;
  return closure_3(closure_4.Navigator, obj2);
};
