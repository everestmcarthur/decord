// Module ID: 14630
// Function ID: 14631
// Name: KeyCommandsView
// Dependencies: [32, 19, 21, 4607, 14631, 2]
// Exports: default, useKeyCommands

// Module 14630 (KeyCommandsView)
import KeyCommandsNativeComponentDefault from "KeyCommandsNativeComponent" /* 14631 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const jsx = fn(21).jsx;
const createStyles = fn(4607);
let closure_5 = createStyles.createStyles({ viewDefaults: { flex: 1 } });
const redux = noop.createContext({
  keyCommands: [],
  addKeyCommand() {

  },
  removeKeyCommand() {

  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/keyboard/native/KeyCommandsView.tsx");

export default function KeyCommandsView(style) {
  const merged = Object.assign(style, Object.assign({ style: 0 }));
  keyCommands = undefined;
  closure_1 = undefined;
  [keyCommands, closure_1] = noop.useState([]);
  const addKeyCommand = noop.useCallback((arg0) => {
    closure_0 = arg0;
    closure_1((arg0) => {
      const items = [];
      items[HermesBuiltin.arraySpread(arg0, 0)] = closure_0;
      return items;
    });
  }, []);
  const callback1 = noop.useCallback((arg0) => {
    closure_0 = arg0;
    closure_1((arr) => arr.filter((eventName) => eventName.eventName !== closure_1_0));
  }, []);
  let items = [keyCommands, addKeyCommand, callback1];
  const obj = { value: noop.useMemo(() => ({ keyCommands, addKeyCommand, removeKeyCommand: callback1 }), items), children: null };
  const obj2 = {};
  const tmp2 = closure_5();
  const merged1 = Object.assign(merged);
  const items1 = [tmp2.viewDefaults, style.style];
  obj2.style = items1;
  obj2.keyCommands = keyCommands;
  obj2.onKeyCommand = function onKeyCommand(nativeEvent) {
    nativeEvent = nativeEvent.nativeEvent;
    const found = first.find((eventName) => eventName.eventName === nativeEvent.eventName);
    if (found != null) {
      found.onKeyCommand(nativeEvent);
    }
  };
  obj.children = jsx(KeyCommandsNativeComponentDefault, {});
  return <redux.Provider value={noop.useMemo(() => ({ keyCommands, addKeyCommand, removeKeyCommand: callback1 }), items)}>{null}</redux.Provider>;
};
export const useKeyCommands = function useKeyCommands(memo) {
  closure_0 = memo;
  const context = noop.useContext(closure_6);
  const addKeyCommand = context.addKeyCommand;
  const removeKeyCommand = context.removeKeyCommand;
  const items = [addKeyCommand, removeKeyCommand, memo];
  const effect = noop.useEffect(() => {
    for (const item10005 of closure_0) {
      let tmp2 = addKeyCommand(item10005);
      continue;
    }
    return () => {
      for (const item10005 of closure_1_0) {
        let tmp2 = removeKeyCommand(item10005.eventName);
        continue;
      }
    };
  }, items);
};
