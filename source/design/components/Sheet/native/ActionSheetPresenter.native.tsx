// Module ID: 14256
// Function ID: 14257
// Name: ActionSheetPresenter
// Dependencies: [32, 19, 17, 4330, 1074, 21, 8924, 1249, 4607, 5057, 7266, 5043, 504, 12575, 4991, 2]
// Exports: ActionSheetPresenter

// Module 14256 (ActionSheetPresenter)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4607 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ActionSheetStore from "ActionSheetStore" /* 4330 */;

const require = fn;
const StyleSheet = fn(17).StyleSheet;
const NOOP = fn(1074).NOOP;
const jsx = fn(21).jsx;
let closure_9 = noop.forwardRef((sheetKey, ref) => {
  sheetKey = sheetKey.sheetKey;
  transitionState = undefined;
  dependencyMap = undefined;
  let registerDismissHandler;
  let callback2;
  ({ content, impressionName, impressionProperties, zIndex } = sheetKey);
  [transitionState, dependencyMap] = registerDismissHandler.useState("visible");
  _slicedToArray = registerDismissHandler.useRef(callback2);
  registerDismissHandler = registerDismissHandler.useCallback((current) => {
    closure_3.current = current;
  }, []);
  registerDismissHandler.useRef(callback2);
  const callback1 = registerDismissHandler.useCallback(() => {
    ref2.current();
  }, []);
  const obj = { type: sheetKey(1249).ImpressionTypes.HALFSHEET, name: impressionName, properties: impressionProperties };
  transitionState(8924)(obj);
  const imperativeHandle = registerDismissHandler.useImperativeHandle(ref, () => ({
    componentDidEnter() {
      closure_1_2("visible");
    },
    componentWillLeave(current) {
      closure_1_2("exiting");
      ref2.current = current;
    },
    componentDidLeave() {
      closure_1_2("exited");
      ref2.current = callback2;
    }
  }), []);
  const items = [sheetKey];
  callback2 = registerDismissHandler.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideActionSheet(sheetKey);
  }, items);
  const items1 = [transitionState, callback2, callback1, registerDismissHandler];
  const items2 = [callback2];
  const memo = registerDismissHandler.useMemo(() => ({ transitionState, close: callback2, onLeave: callback1, registerDismissHandler }), items1);
  const callback3 = registerDismissHandler.useCallback(() => {
    const current = ref.current;
    if (current != null) {
      current();
    }
    callback2();
    return true;
  }, items2);
  transitionState(5057)(callback3);
  const tmp5 = transitionState(8924);
  return jsx(transitionState(7266).Provider, { value: memo, children: jsx(sheetKey(5043).Dialog, { dialogKey: sheetKey, onDismiss: callback2, zIndex, children: content }) });
});
const size = fn(2);
let result = size.fileFinishedImporting("design/components/Sheet/native/ActionSheetPresenter.native.tsx");

export const ActionSheetPresenter = function ActionSheetPresenter(appEntryKey) {
  appEntryKey = appEntryKey.appEntryKey;
  const items = [appEntryKey];
  const effect = noop.useEffect(() => () => {
    const result = ActionSheetActionCreatorsDefault.resetActionSheetsForAppEntryKey(appEntryKey);
  }, items);
  const items1 = [ActionSheetStore];
  const stateFromStoresArray = appEntryKey(504).useStateFromStoresArray(items1, () => stack.getStack(), []);
  const found = stateFromStoresArray.filter((appEntryKey) => appEntryKey.appEntryKey === appEntryKey);
  const mapped = found.map((content) => <closure_1_9 key={arg0.key} sheetKey={arg0.key} content={arg0.content} impressionName={arg0.impressionName} impressionProperties={arg0.impressionProperties} zIndex={arg0.zIndex} />);
  const obj = appEntryKey(504);
  return jsx(appEntryKey(12575).TransitionGroup, { style: StyleSheet.absoluteFill, component: appEntryKey(4991).TransitionGroupOverlayView, children: mapped });
};
