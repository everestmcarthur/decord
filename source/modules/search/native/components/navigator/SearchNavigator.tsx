// Module ID: 16977
// Function ID: 16978
// Name: SearchNavigator
// Dependencies: [19, 17, 7981, 16750, 1074, 21, 4636, 576, 8017, 7103, 12487, 1611, 16978, 7966, 16973, 16974, 2]

// Module 16977 (SearchNavigator)
import nativeDefault from "native" /* 576 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import search_tracking_TrackingDefault from "search/tracking/Tracking" /* 12487 */;
import SearchNavigatorPreviewHeaderDefault from "SearchNavigatorPreviewHeader" /* 16973 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
let closure_5 = fn(7981).SearchEntrypointAnalyticsLocations;
const SearchNavigatorScreens = fn(16750).SearchNavigatorScreens;
const SearchTypes = fn(1074).SearchTypes;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4636);
let obj = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST } };
let closure_10 = createStyles.createStyles(obj);
const NativeStackNavigator = fn(8017);
let closure_11 = NativeStackNavigator.createNativeStackNavigator();
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/navigator/SearchNavigator.tsx");

export default noop.memo((route) => {
  const searchContext = route.route.params.searchContext;
  const accessibilityNativeStackOptions = searchContext(7103).useAccessibilityNativeStackOptions();
  const items = [searchContext];
  const effect = noop.useEffect(() => {
    if (searchContext.type === SearchTypes.GUILD) {
      let DM_LIST = constants.GUILD;
    } else {
      DM_LIST = constants.DM_LIST;
    }
    search_tracking_TrackingDefault.trackSearchOpened({ searchContext, searchLocation: DM_LIST });
    return () => {
      search_tracking_TrackingDefault.trackSearchClosed({ searchContext });
    };
  }, items);
  let obj = searchContext(7103);
  const rect = useSafeAreaInsetsDefault();
  const obj2 = { style: null, children: null };
  const items1 = [closure_10().container, { paddingLeft: rect.left, paddingRight: rect.right }];
  obj2.style = items1;
  const obj3 = { id: "search-navigator", screenOptions: null, children: null };
  const merged = Object.assign(accessibilityNativeStackOptions);
  obj3.screenOptions = {};
  const items2 = [
    closure_8(closure_11.Screen, {
      initialParams: { searchContext },
      name: SearchNavigatorScreens.SEARCH_TABS,
      options: { headerShown: false, fullScreenGestureEnabled: true },
      getComponent() {
        return searchContext(16978).default;
      }
    }),
    closure_8(closure_11.Screen, {
      name: SearchNavigatorScreens.SEARCH_CHAT_PREVIEW,
      options(route) {
        route = route.route;
        const obj = {
          headerShown: true,
          header: route(7966).renderHeader,
          headerLeft: route(7966).getRenderBackImage(route.navigation),
          headerTitle() {
            return closure_2_8(SearchNavigatorPreviewHeaderDefault, { channelId: route.params.channelId });
          },
          fullScreenGestureEnabled: true
        };
        return obj;
      },
      getComponent() {
        return searchContext(16974).default;
      }
    })
  ];
  obj3.children = items2;
  obj2.children = closure_9(closure_11.Navigator, obj3);
  return closure_8(View, obj2);
});
