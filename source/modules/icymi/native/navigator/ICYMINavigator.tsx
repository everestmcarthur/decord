// Module ID: 16544
// Function ID: 16545
// Name: ICYMINavigator
// Dependencies: [21, 8017, 7103, 16545, 16496, 2]
// Exports: default

// Module 16544 (ICYMINavigator)
import jsxProd from "jsxProd" /* 21 */;
import NativeStackNavigator from "NativeStackNavigator" /* 8017 */;
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
        return closure_0(16545).ICYMITab;
      }
    }),
    closure_2(closure_4.Screen, {
      name: "notifications-screen",
      getComponent() {
        return closure_0(16496).ThemedNotificationsModal;
      }
    })
  ];
  obj2.children = items;
  return closure_3(closure_4.Navigator, obj2);
};
