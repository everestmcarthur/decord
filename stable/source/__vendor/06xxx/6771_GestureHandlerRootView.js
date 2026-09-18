// Module ID: 6771
// Function ID: 6772
// Name: GestureHandlerRootView
// Dependencies: [19, 17, 21, 6674, 6772]
// Exports: default

// Module 6771 (GestureHandlerRootView)
import _modDef6674 from "module_6674" /* 6674 */;
import _modDef6772 from "module_6772" /* 6772 */;
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
  obj.children = jsx(_modDef6772, { style: container });
  return <tmp3 value>{null}</tmp3>;
};
