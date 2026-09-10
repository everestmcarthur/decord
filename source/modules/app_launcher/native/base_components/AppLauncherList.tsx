// Module ID: 12197
// Function ID: 12198
// Name: AppLauncherList
// Dependencies: [19, 17, 21, 4574, 1611, 12132, 1178, 12198, 1114, 7064, 2]
// Exports: AppLauncherListEmptyState, AppLauncherListSearchBar

// Module 12197 (AppLauncherList)
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import SearchField from "SearchField" /* 7064 */;
import AppLauncherFlashList from "AppLauncherFlashList" /* 12132 */;
import _modDef12198 from "module_12198" /* 12198 */;
import noop from "module_19" /* 19 */;

const AppLauncherFlashListDefault = AppLauncherFlashList;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4574);
let closure_5 = createStyles.createStyles({ searchBarContainer: { marginBottom: 16 }, emptyState: { backgroundColor: "transparent", justifyContent: "flex-start" }, emptyStateImage: { flex: 0 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/base_components/AppLauncherList.tsx");

export const AppLauncherList = noop.forwardRef((contentContainerStyle, arg1) => {
  const bottom = useSafeAreaInsetsDefault().bottom;
  const appLauncherFlashListProps = AppLauncherFlashList.useAppLauncherFlashListProps();
  const obj3 = { contentContainerStyle: null, scrollIndicatorInsets: { bottom }, ref: null };
  const items = [{ paddingBottom: bottom }, contentContainerStyle.contentContainerStyle];
  obj3.contentContainerStyle = items;
  let scrollerRef = appLauncherFlashListProps.scrollerRef;
  const tmp2 = jsx;
  if (scrollerRef == null) {
    scrollerRef = arg1;
  }
  obj3.ref = scrollerRef;
  const merged = Object.assign(contentContainerStyle);
  ({ onScroll: obj2.animatedOnScroll, gestureRef: obj2.simultaneousHandlers, animatedProps: obj2.animatedProps } = appLauncherFlashListProps);
  return tmp2(AppLauncherFlashListDefault, obj3);
});
export const AppLauncherListEmptyState = function AppLauncherListEmptyState() {
  const tmp = closure_5();
  const obj = { style: tmp.emptyState, imageStyle: tmp.emptyStateImage, lightSource: _modDef12198, darkSource: _modDef12198, title: null, body: null };
  const intl = util.intl;
  obj.title = intl.string(util.t.vYocDz);
  const intl2 = util.intl;
  obj.body = intl2.string(util.t.V6nAfF);
  return jsx(native.EmptyState, { style: tmp.emptyState, imageStyle: tmp.emptyStateImage, lightSource: _modDef12198, darkSource: _modDef12198, title: null, body: null });
};
export const AppLauncherListSearchBar = function AppLauncherListSearchBar(arg0) {
  const obj = { style: closure_5().searchBarContainer, children: null };
  const merged = Object.assign(arg0);
  obj.children = jsx(SearchField.SearchField, { size: "md" });
  return <View style={closure_5().searchBarContainer}>{null}</View>;
};
