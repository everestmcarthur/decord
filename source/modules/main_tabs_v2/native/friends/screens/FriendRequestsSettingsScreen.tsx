// Module ID: 17023
// Function ID: 17024
// Name: FriendRequestsSettingsScreen
// Dependencies: [19, 17, 21, 4640, 576, 5212, 17024, 2]
// Exports: default

// Module 17023 (FriendRequestsSettingsScreen)
import nativeDefault from "native" /* 576 */;
import ThemedGradientDefault from "ThemedGradient" /* 5212 */;
import UserSettingsFriendRequestsDefault from "UserSettingsFriendRequests" /* 17024 */;
import noop from "module_19" /* 19 */;

const ScrollView = fn(17).ScrollView;
const jsxProd = fn(21);
({ jsx: c3, Fragment: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4640);
const obj2 = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, flex: 1, paddingTop: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 } };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/FriendRequestsSettingsScreen.tsx");

export default function FriendRequestsSettingsScreen() {
  const obj = { children: null };
  const items = [React3(ThemedGradientDefault, { absolute: true }), ];
  const tmp = closure_6();
  items[1] = React3(ScrollView, { style: closure_6().container, children: React3(UserSettingsFriendRequestsDefault, {}) });
  obj.children = items;
  return hasOwnProperty(React4, obj);
};
