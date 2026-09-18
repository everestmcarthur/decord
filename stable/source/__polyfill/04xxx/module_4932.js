// Module ID: 4932
// Function ID: 4933
// Dependencies: [109, 19, 17, 21, 4933, 4924]

// Module 4932
import _modDef4933 from "module_4933" /* 4933 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

const require = fn;
let closure_3 = ["obscureBackground", "hideNavigationBar", "onFocus", "onBlur", "onSearchButtonPress", "onCancelButtonPress", "onChangeText"];
const View = fn(17).View;
const jsx = fn(21).jsx;

export default noop.forwardRef(function SearchBar(autoCapitalize, ref) {
  ref = noop.useRef(null);
  const imperativeHandle = noop.useImperativeHandle(ref, () => ({
    blur() {
      closure_1_1((arg0) => {
        const Commands = closure_1_0(dependencyMap[4]).Commands;
        return Commands.blur(arg0);
      });
    },
    focus() {
      closure_1_1((arg0) => {
        const Commands = closure_1_0(dependencyMap[4]).Commands;
        return Commands.focus(arg0);
      });
    },
    toggleCancelButton(arg0) {
      closure_0 = arg0;
      closure_1_1((arg0) => {
        const Commands = ref(4933).Commands;
        return Commands.toggleCancelButton(arg0, closure_0);
      });
    },
    clearText() {
      closure_1_1((arg0) => {
        const Commands = closure_1_0(dependencyMap[4]).Commands;
        return Commands.clearText(arg0);
      });
    },
    setText(arg0) {
      closure_0 = arg0;
      closure_1_1((arg0) => {
        const Commands = ref(4933).Commands;
        return Commands.setText(arg0, closure_0);
      });
    },
    cancelSearch() {
      closure_1_1((arg0) => {
        const Commands = closure_1_0(dependencyMap[4]).Commands;
        return Commands.cancelSearch(arg0);
      });
    }
  }));
  const items = [ref];
  importDefault = noop.useCallback((fn) => {
    const current = ref.current;
    if (current) {
      fn(current);
    } else {
      const _console = console;
      console.warn("Reference to native search bar component has not been updated yet");
    }
  }, items);
  if (ref(4924).isSearchBarAvailableForCurrentPlatform) {
    const obj = {};
    const merged = Object.assign(autoCapitalize);
    let str2 = autoCapitalize.autoCapitalize;
    if (str2 == null) {
      str2 = "systemDefault";
    }
    obj.autoCapitalize = str2;
    ({ obscureBackground, hideNavigationBar, onFocus, onBlur, onSearchButtonPress, onCancelButtonPress, onChangeText } = obj);
    const obj2 = { ref };
    const tmp14 = _objectWithoutProperties(obj, closure_3);
    const merged1 = Object.assign(tmp14);
    obj2.obscureBackground = tmp3(4924).parseBooleanToOptionalBooleanNativeProp(obscureBackground);
    const tmp3Result = tmp3(4924);
    obj2.hideNavigationBar = tmp3(4924).parseBooleanToOptionalBooleanNativeProp(hideNavigationBar);
    obj2.onSearchFocus = onFocus;
    obj2.onSearchBlur = onBlur;
    obj2.onSearchButtonPress = onSearchButtonPress;
    obj2.onCancelButtonPress = onCancelButtonPress;
    obj2.onChangeText = onChangeText;
    return <tmp17 ref={ref} />;
  } else {
    let _console = console;
    console.warn("Importing SearchBar is only valid on iOS and Android devices.");
    return View;
  }
});
