// Module ID: 4950
// Function ID: 4951
// Name: ScreenStack
// Dependencies: [109, 19, 21, 4935, 4951, 4952, 4939]
// Exports: default

// Module 4950 (ScreenStack)
import _modDef4935 from "module_4935" /* 4935 */;
import get_controlledBottomTabsDefault from "get controlledBottomTabs" /* 4939 */;
import _mod4951 from "module_4951" /* 4951 */;
import _modDef4952 from "module_4952" /* 4952 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_3 = ["goBackGesture", "screensRefs", "currentScreenId", "transitionAnimation", "screenEdgeGesture", "onFinishTransitioning", "children"];
const jsx = fn(21).jsx;

export default function ScreenStack(arg0) {
  ({ goBackGesture, screensRefs, currentScreenId, screenEdgeGesture } = arg0);
  ({ transitionAnimation, onFinishTransitioning, children } = arg0);
  let current;
  if (screensRefs != null) {
    current = screensRefs.current;
  }
  if (current == null) {
    current = {};
  }
  const ref = noop.useRef(current);
  const ref1 = obj.useRef(null);
  const context = obj.useContext(_mod4951.GHContext);
  const ref2 = obj.useRef({
    stackUseEffectCallback(ref1) {

    }
  });
  const effect = obj.useEffect(() => {
    const current = ref2.current;
    const result = current.stackUseEffectCallback(ref1);
  });
  _modDef4935("GHWrapper" !== context.name && undefined !== goBackGesture, "Cannot detect GestureDetectorProvider in a screen that uses `goBackGesture`. Make sure your navigator is wrapped in GestureDetectorProvider.");
  _modDef4935(undefined !== goBackGesture && null === ref && undefined === currentScreenId, "Custom Screen Transition require screensRefs and currentScreenId to be provided.");
  const obj3 = { value: ref, children: null };
  const obj4 = { gestureDetectorBridge: ref2, goBackGesture, transitionAnimation, screenEdgeGesture: null, screensRefs: null, currentScreenId: null, children: null };
  if (screenEdgeGesture == null) {
    screenEdgeGesture = false;
  }
  obj4.screenEdgeGesture = screenEdgeGesture;
  obj4.screensRefs = ref;
  obj4.currentScreenId = currentScreenId;
  const obj5 = {};
  const obj2 = {
    stackUseEffectCallback(ref1) {

    }
  };
  const tmp = _objectWithoutProperties(arg0, closure_3);
  const tmp12 = undefined !== goBackGesture && null === ref && undefined === currentScreenId;
  const tmp9 = "GHWrapper" !== context.name && undefined !== goBackGesture;
  const merged = Object.assign(tmp);
  obj5.iosPreventReattachmentOfDismissedScreens = get_controlledBottomTabsDefault.experiment.iosPreventReattachmentOfDismissedScreens;
  obj5.onFinishTransitioning = onFinishTransitioning;
  obj5.ref = ref1;
  obj5.children = children;
  obj4.children = jsx(_modDef4952, {});
  obj3.children = <context gestureDetectorBridge={ref2} goBackGesture={goBackGesture} transitionAnimation={transitionAnimation} screenEdgeGesture={null} screensRefs={null} currentScreenId={null}>{null}</context>;
  return jsx(_mod4951.RNSScreensRefContext.Provider, { value: ref, children: null });
};
