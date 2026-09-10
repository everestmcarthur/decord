// Module ID: 1586
// Function ID: 1587
// Dependencies: [32, 19, 17, 21, 1587, 1486, 1589, 1590, 1591, 1593, 1594, 1583]

// Module 1586
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = fn;
const I18nManager = fn(17).I18nManager;
const jsx = fn(21).jsx;
const weakMap = new WeakMap();
globalThis.REACT_NAVIGATION_DEVTOOLS = weakMap;

export const NavigationContainer = noop.forwardRef(function NavigationContainerInner(direction, ref) {
  direction = direction.direction;
  if (direction === undefined) {
    let str = "ltr";
    if (I18nManager.getConstants().isRTL) {
      str = "rtl";
    }
    direction = str;
  }
  let DefaultTheme = direction.theme;
  if (DefaultTheme === undefined) {
    DefaultTheme = linking(1587).DefaultTheme;
  }
  linking = direction.linking;
  let fallback = direction.fallback;
  if (fallback === undefined) {
    fallback = null;
  }
  let merged = Object.assign(direction, Object.assign({ direction: 0, theme: 0, linking: 0, fallback: 0, documentTitle: 0 }));
  dependencyMap = undefined;
  ref = undefined;
  let tmp6 = linking;
  if (tmp6) {
    tmp6 = false !== linking.enabled;
  }
  dependencyMap = tmp6;
  let config;
  if (linking != null) {
    config = linking.config;
  }
  if (config) {
    linking(1486).validatePathConfig(linking.config);
    let obj = linking(1486);
  }
  ref = noop.useRef(null);
  const backButton = linking(1589).useBackButton(ref);
  const obj2 = linking(1589);
  const documentTitle = linking(1590).useDocumentTitle(ref, direction.documentTitle);
  const obj3 = linking(1590);
  const merged1 = Object.assign(linking);
  const items = [linking];
  const memo = noop.useMemo(() => ({ options: linking }), items);
  const effect = noop.useEffect(() => {
    if (ref.current) {
      let obj = {};
      Object.defineProperty(obj, "linking", {
        get: () => {
            const obj = {};
            const merged = Object.assign(closure_1_0);
            obj.enabled = enabled;
            let prefixes;
            if (closure_1_0 != null) {
              prefixes = tmp.prefixes;
            }
            if (prefixes == null) {
              prefixes = [];
            }
            obj.prefixes = prefixes;
            let getStateFromPath;
            if (closure_1_0 != null) {
              getStateFromPath = tmp.getStateFromPath;
            }
            if (getStateFromPath == null) {
              getStateFromPath = linking(enabled[5]).getStateFromPath;
            }
            obj.getStateFromPath = getStateFromPath;
            let getPathFromState;
            if (closure_1_0 != null) {
              getPathFromState = tmp.getPathFromState;
            }
            if (getPathFromState == null) {
              getPathFromState = linking(enabled[5]).getPathFromState;
            }
            obj.getPathFromState = getPathFromState;
            let getActionFromState;
            if (closure_1_0 != null) {
              getActionFromState = tmp.getActionFromState;
            }
            if (getActionFromState == null) {
              getActionFromState = linking(enabled[5]).getActionFromState;
            }
            obj.getActionFromState = getActionFromState;
            return obj;
          },
        set: undefined
      });
      const result = globalThis.REACT_NAVIGATION_DEVTOOLS.set(tmp.current, obj);
    }
  });
  const obj4 = linking(1591);
  const obj5 = { enabled: tmp6, prefixes: [] };
  const obj6 = linking(1593);
  [tmp20, initialState] = ref(linking(1593).useThenable(obj4.useLinking(ref, obj5).getInitialState), 2);
  const imperativeHandle = noop.useImperativeHandle(ref, () => ref.current);
  const obj7 = { value: direction, children: null };
  if (tmp22) {
    const obj8 = { value: memo, children: null };
    const obj9 = {};
    const merged2 = Object.assign(merged);
    obj9.theme = DefaultTheme;
    if (null != merged.initialState) {
      initialState = merged.initialState;
    }
    obj9.initialState = initialState;
    obj9.ref = ref;
    obj8.children = tmp23(tmp12(1486).BaseNavigationContainer, obj9);
    obj7.children = tmp23(tmp12(1583).LinkingContext.Provider, obj8);
    let tmp24 = obj7;
  } else {
    const obj10 = { value: DefaultTheme, children: fallback };
    obj7.children = tmp23(tmp12(1486).ThemeProvider, obj10);
    tmp24 = obj7;
  }
  return jsx(linking(1594).LocaleDirContext.Provider, tmp24);
});
