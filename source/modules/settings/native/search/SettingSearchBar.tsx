// Module ID: 14731
// Function ID: 14732
// Name: SettingSearchBar
// Dependencies: [19, 17, 14720, 21, 4574, 576, 1874, 7011, 7064, 2]
// Exports: default

// Module 14731 (SettingSearchBar)
import nativeDefault from "native" /* 576 */;
import KeyboardManagerUtils from "KeyboardManagerUtils" /* 1874 */;
import Tracking from "Tracking" /* 7011 */;
import SearchField from "SearchField" /* 7064 */;
import noop from "module_19" /* 19 */;
import UserSettingSearchStore from "UserSettingSearchStore" /* 14720 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4574);
const obj2 = { container: { marginTop: nativeDefault.modules.mobile.SETTINGS_PADDING_TOP } };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/settings/native/search/SettingSearchBar.tsx");

export default function SettingSearchBar() {
  const tmp = closure_6();
  const callback = noop.useCallback(() => {
    UserSettingSearchStore.setState({ isActive: false, query: "", isFocused: false });
    const result = KeyboardManagerUtils.dismissGlobalKeyboard();
  }, []);
  const callback1 = noop.useCallback(() => {
    const result = Tracking.trackSettingSearchInputFocused();
    UserSettingSearchStore.setState({ isActive: true, isFocused: true });
  }, []);
  const callback2 = noop.useCallback(() => {
    UserSettingSearchStore.setState({ isFocused: false });
  }, []);
  const obj = { style: tmp.container, children: null };
  const callback3 = noop.useCallback((query) => {
    UserSettingSearchStore.setState({ query });
  }, []);
  const ref = noop.useRef(null);
  obj.children = jsx(SearchField.SearchField, { ref: noop.useRef(null), size: "md", onFocus: callback1, onBlur: callback2, onClear: callback, defaultValue: UserSettingSearchStore.getField("query"), onChange: callback3 });
  return <View style={tmp.container}>{null}</View>;
};
