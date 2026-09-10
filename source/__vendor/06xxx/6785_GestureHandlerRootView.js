// Module ID: 6785
// Function ID: 6786
// Name: GestureHandlerRootView
// Dependencies: [19, 17, 21, 6688, 6786]
// Exports: default

// Module 6785 (GestureHandlerRootView)
import _modDef6688 from "module_6688" /* 6688 */;
import _modDef6786 from "module_6786" /* 6786 */;
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
  obj.children = jsx(_modDef6786, { style: container });
  return <tmp3 value>{null}</tmp3>;
};
