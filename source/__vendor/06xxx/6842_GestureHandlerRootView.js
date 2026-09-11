// Module ID: 6842
// Function ID: 6843
// Name: GestureHandlerRootView
// Dependencies: [19, 17, 21, 6745, 6843]
// Exports: default

// Module 6842 (GestureHandlerRootView)
import _modDef6745 from "module_6745" /* 6745 */;
import _modDef6843 from "module_6843" /* 6843 */;
import noop from "module_19" /* 19 */;

const StyleSheet = fn(17).StyleSheet;
const jsx = fn(21).jsx;
let container = StyleSheet.create({ container: { flex: 1 } });

export default function GestureHandlerRootView(style) {
  container = style.style;
  const merged = Object.assign(style, Object.assign({ style: 0 }));
  if (container == null) {
    container = container.container;
  }
  const obj = { value: true, children: null };
  const obj2 = { style: container };
  const merged1 = Object.assign(merged);
  obj2.moduleId = globalThis._RNGH_MODULE_ID;
  obj.children = jsx(_modDef6843, { style: container });
  return <tmp3 value>{null}</tmp3>;
};
