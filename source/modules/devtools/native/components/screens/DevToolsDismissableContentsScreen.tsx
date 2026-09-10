// Module ID: 15648
// Function ID: 15649
// Name: DevToolsDismissableContentsScreen
// Dependencies: [32, 19, 17, 1947, 21, 4574, 576, 1943, 15649, 7214, 5701, 10269, 5619, 1940, 4532, 5626, 15650, 7064, 4570, 10349, 5531, 1611, 9963, 504, 15041, 15042, 8906, 2]
// Exports: default

// Module 15648 (DevToolsDismissableContentsScreen)
import nativeDefault from "native" /* 576 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import UserSettingsProtoActionCreators from "UserSettingsProtoActionCreators" /* 1940 */;
import dismissible_content from "dismissible_content" /* 1943 */;
import TrashIcon from "TrashIcon" /* 4532 */;
import Text_Text from "Text/Text" /* 4570 */;
import fuzzysearchDefault from "fuzzysearch" /* 5531 */;
import TableRow from "TableRow" /* 5619 */;
import TableRowArrow from "TableRowArrow" /* 5626 */;
import TableRowGroup from "TableRowGroup" /* 5701 */;
import SearchField from "SearchField" /* 7064 */;
import TableSwitchRow from "TableSwitchRow" /* 7214 */;
import DismissibleContentFrameworkActionCreators from "DismissibleContentFrameworkActionCreators" /* 10269 */;
import SearchEmpty from "SearchEmpty" /* 10349 */;
import useBountiesAutoScroll from "useBountiesAutoScroll" /* 15042 */;
import toggleDismissibleContentDismissStateDefault from "toggleDismissibleContentDismissState" /* 15649 */;
import DoubleCheckmarkIcon from "DoubleCheckmarkIcon" /* 15650 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import DismissibleContentFrameworkStore from "DismissibleContentFrameworkStore" /* 1947 */;

require = fn;
function DismissableContentsEmpty() {
  const obj = { style: closure_10().emptyState, children: null };
  const obj2 = { style: { marginBottom: nativeDefault.space.PX_16 }, variant: "heading-lg/semibold", children: "No results found" };
  const items = [React5(Text_Text.Text, obj2), React5(SearchEmpty.SearchEmpty, {})];
  obj.children = items;
  return React6(View, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
const createStyles = fn(4574);
let obj = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 }, contentContainer: null, headerSection: null, search: null, sectionHeader: null, emptyState: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
obj.contentContainer = { padding: nativeDefault.space.PX_16 };
let obj4 = { padding: nativeDefault.space.PX_16 };
obj.headerSection = { paddingBottom: nativeDefault.space.PX_16 };
let obj5 = { paddingBottom: nativeDefault.space.PX_16 };
obj.search = { paddingBottom: nativeDefault.space.PX_8 };
let obj6 = { paddingBottom: nativeDefault.space.PX_8 };
obj.sectionHeader = { paddingBottom: nativeDefault.space.PX_8 };
let obj7 = { paddingBottom: nativeDefault.space.PX_8 };
obj.emptyState = { marginVertical: nativeDefault.space.PX_32, justifyContent: "center", alignItems: "center" };
let closure_10 = createStyles.createStyles(obj);
let closure_11 = noop.memo((content) => {
  const label = content.content;
  ({ start, end } = content);
  ({ isDismissed, handleToggleDismissState } = toggleDismissibleContentDismissStateDefault(dismissible_content.DismissibleContent[label]));
  return React5(TableSwitchRow.TableSwitchRow, { start, end, onValueChange, value, label });
});
let closure_12 = noop.memo((arg0) => {
  ({ dailyCapOverridden, newUserMinAgeRequiredOverridden, forceBountiesSwipeUpNux, initialSearchQuery, onForceBountiesSwipeUpNuxChange, onSearchChange } = arg0);
  const tmp = closure_10();
  const obj = { children: null };
  const obj2 = { style: tmp.headerSection, children: null };
  const obj3 = { title: "Global Overrides", hasIcons: false, children: null };
  const items = [React5(TableSwitchRow.TableSwitchRow, { onValueChange: DismissibleContentFrameworkActionCreators.overrideDismissibleContentFramework, value: dailyCapOverridden, label: "Daily limit", subLabel: "When enabled, bypass the daily limit of dismissible content shown" }), , ];
  const obj4 = { onValueChange: DismissibleContentFrameworkActionCreators.overrideDismissibleContentFramework, value: dailyCapOverridden, label: "Daily limit", subLabel: "When enabled, bypass the daily limit of dismissible content shown" };
  items[1] = React5(TableSwitchRow.TableSwitchRow, { onValueChange: DismissibleContentFrameworkActionCreators.overrideNewUserMinAgeRequired, value: newUserMinAgeRequiredOverridden, label: "New user account minimum age", subLabel: "When enabled, bypass the minimum age requirement for new user accounts" });
  items[2] = React5(TableSwitchRow.TableSwitchRow, { onValueChange: onForceBountiesSwipeUpNuxChange, value: forceBountiesSwipeUpNux, label: "Force bounties swipe-up NUX", subLabel: "When enabled, treat bounties swipe-up NUX as shown so scroll affordances always appear. Reopen the bounties modal after toggling." });
  obj3.children = items;
  obj2.children = React6(TableRowGroup.TableRowGroup, obj3);
  const items1 = [React5(View, obj2), , , ];
  const obj6 = { style: tmp.headerSection, children: null };
  const obj7 = { title: "Bulk actions", hasIcons: true, children: null };
  const obj5 = { onValueChange: DismissibleContentFrameworkActionCreators.overrideNewUserMinAgeRequired, value: newUserMinAgeRequiredOverridden, label: "New user account minimum age", subLabel: "When enabled, bypass the minimum age requirement for new user accounts" };
  const items2 = [React5(TableRow.TableRow, { label: "Clear all dismissed dismissible contents", onPress: UserSettingsProtoActionCreators.clearDismissedContents, icon: React5(TrashIcon.TrashIcon, {}), trailing: React5(TableRowArrow.TableRowArrow, {}) }), , ];
  const obj8 = { label: "Clear all dismissed dismissible contents", onPress: UserSettingsProtoActionCreators.clearDismissedContents, icon: React5(TrashIcon.TrashIcon, {}), trailing: React5(TableRowArrow.TableRowArrow, {}) };
  items2[1] = React5(TableRow.TableRow, { label: "Clear all guild dismissed dismissible contents", onPress: UserSettingsProtoActionCreators.clearGuildDismissedContents, icon: React5(TrashIcon.TrashIcon, {}), trailing: React5(TableRowArrow.TableRowArrow, {}) });
  const obj9 = { label: "Clear all guild dismissed dismissible contents", onPress: UserSettingsProtoActionCreators.clearGuildDismissedContents, icon: React5(TrashIcon.TrashIcon, {}), trailing: React5(TableRowArrow.TableRowArrow, {}) };
  items2[2] = React5(TableRow.TableRow, { label: "Dismiss all dismissible contents", onPress: UserSettingsProtoActionCreators.checkAllDismissedContents, icon: React5(DoubleCheckmarkIcon.DoubleCheckmarkIcon, {}), trailing: React5(TableRowArrow.TableRowArrow, {}) });
  obj7.children = items2;
  obj6.children = React6(TableRowGroup.TableRowGroup, obj7);
  items1[1] = React5(View, obj6);
  const obj10 = { label: "Dismiss all dismissible contents", onPress: UserSettingsProtoActionCreators.checkAllDismissedContents, icon: React5(DoubleCheckmarkIcon.DoubleCheckmarkIcon, {}), trailing: React5(TableRowArrow.TableRowArrow, {}) };
  items1[2] = React5(View, { style: tmp.search, children: React5(SearchField.SearchField, { size: "md", defaultValue: initialSearchQuery, onChange: onSearchChange }) });
  items1[3] = React5(Text_Text.Text, { style: tmp.sectionHeader, variant: "text-sm/semibold", color: "text-default", children: "Dismissible Contents" });
  obj.children = items1;
  return React6(React7, obj);
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsDismissableContentsScreen.tsx");

export default function DevToolsDismissableContentsScreen() {
  const tmp = closure_10();
  const ref = initialSearchQuery.useRef(null);
  importDefault = initialSearchQuery.useRef(0);
  let tmp2 = useSafeAreaInsetsDefault();
  let obj = ref(9963);
  [dependencyMap, tmp5] = ref(9963).useLocalStorageState("devtools-dc-search", "");
  _slicedToArray = tmp5;
  initialSearchQuery = _slicedToArray(initialSearchQuery.useState(() => {
    let str = dependencyMap;
    if (dependencyMap == null) {
      str = "";
    }
    return str;
  }), 1)[0];
  [first1, closure_6] = initialSearchQuery.useState(() => {
    let str = closure_1_2;
    if (closure_1_2 == null) {
      str = "";
    }
    const items = [];
    for (const key10013 in dismissible_content.DismissibleContent) {
      let isNaNResult = tmp;
      if (!tmp) {
        let tmp4 = fuzzysearchDefault;
        let formatted = str.toLowerCase();
        isNaNResult = tmp4(formatted, key10013.toLowerCase());
      }
      if (isNaNResult) {
        let _isNaN = isNaN;
        let _Number = Number;
        isNaNResult = isNaN(Number(key10013));
      }
      if (!isNaNResult) {
        continue;
      } else {
        let arr = items.push(key10013);
        continue;
      }
      continue;
    }
    const sorted = items.sort((localeCompare, arg1) => localeCompare.localeCompare(arg1));
    return items;
  });
  let tmp4 = _slicedToArray(ref(9963).useLocalStorageState("devtools-dc-search", ""), 2);
  let items = [closure_6];
  const stateFromStoresObject = ref(504).useStateFromStoresObject(items, () => ({ dailyCapOverridden: closure_6.dailyCapOverridden, newUserMinAgeRequiredOverridden: closure_6.newUserMinAgeRequiredOverridden }));
  const dailyCapOverridden = stateFromStoresObject.dailyCapOverridden;
  const newUserMinAgeRequiredOverridden = stateFromStoresObject.newUserMinAgeRequiredOverridden;
  const obj2 = ref(504);
  let tmp9 = _slicedToArray(ref(15041).useForceBountiesSwipeUpNux(), 2);
  const first2 = tmp9[0];
  closure_10 = tmp11;
  const items1 = [tmp9[1]];
  const onForceBountiesSwipeUpNuxChange = initialSearchQuery.useCallback((arg0) => {
    closure_10(arg0);
    if (arg0) {
      const result = useBountiesAutoScroll.clearDismissedScrollAffordanceBountyIds();
    }
  }, items1);
  const callback1 = initialSearchQuery.useCallback(() => {
    let current = ref.current;
    const animationFrame = requestAnimationFrame(() => {
      current = ref.current;
      if (current != null) {
        const obj = { offset: current, animated: false };
        current.scrollToOffset(obj);
      }
    });
  }, []);
  const items2 = [tmp5, callback1];
  const callback2 = initialSearchQuery.useCallback((str) => {
    let tmp5;
    tmp5(str);
    const items = [];
    for (const key10015 in dismissible_content.DismissibleContent) {
      let isNaNResult = tmp3;
      if (!tmp3) {
        tmp5 = dependencyMap;
        let tmp6 = fuzzysearchDefault;
        let formatted = arg0.toLowerCase();
        isNaNResult = tmp6(formatted, key10015.toLowerCase());
      }
      if (isNaNResult) {
        let _isNaN = isNaN;
        let _Number = Number;
        isNaNResult = isNaN(Number(key10015));
      }
      if (!isNaNResult) {
        continue;
      } else {
        let arr = items.push(key10015);
        continue;
      }
      continue;
    }
    const sorted = items.sort((localeCompare, arg1) => localeCompare.localeCompare(arg1));
    closure_6(items);
    callback1();
  }, items2);
  const items3 = [dailyCapOverridden, newUserMinAgeRequiredOverridden, first2, initialSearchQuery, onForceBountiesSwipeUpNuxChange, callback2];
  const callback3 = initialSearchQuery.useCallback((nativeEvent) => {
    closure_1.current = nativeEvent.nativeEvent.contentOffset.y;
  }, []);
  const items4 = [first1.length];
  const memo = initialSearchQuery.useMemo(() => React5(closure_12, { dailyCapOverridden, newUserMinAgeRequiredOverridden, forceBountiesSwipeUpNux: true === first2, initialSearchQuery, onForceBountiesSwipeUpNuxChange, onSearchChange: callback2 }), items3);
  const obj4 = { style: tmp.container, children: null };
  const callback4 = initialSearchQuery.useCallback((content) => {
    const index = content.index;
    return React5(closure_11, { content: content.item, start: 0 === index, end: index === first1.length - 1 });
  }, items4);
  const obj5 = { ref, data: first1, contentContainerStyle: null, keyboardShouldPersistTaps: "handled", keyboardDismissMode: "on-drag", automaticallyAdjustKeyboardInsets: true, ListHeaderComponent: null, ListEmptyComponent: null, keyExtractor: null, renderItem: null, onScroll: null, scrollEventThrottle: 16 };
  const items5 = [tmp.contentContainer, ];
  const obj3 = ref(15041);
  items5[1] = { paddingBottom: tmp2.bottom + nativeDefault.space.PX_16 };
  obj5.contentContainerStyle = items5;
  obj5.ListHeaderComponent = memo;
  obj5.ListEmptyComponent = callback2;
  obj5.keyExtractor = function keyExtractor(arg0) {
    return arg0;
  };
  obj5.renderItem = callback4;
  obj5.onScroll = callback3;
  obj4.children = dailyCapOverridden(ref(8906).FlashList, obj5);
  return dailyCapOverridden(first1, obj4);
};
