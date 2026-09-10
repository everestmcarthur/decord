// Module ID: 6821
// Function ID: 6822
// Name: GestureHandlerRootView
// Dependencies: [19, 17, 21, 6724, 6822]
// Exports: default

// Module 6821 (GestureHandlerRootView)
import _modDef6724 from "module_6724" /* 6724 */;
import _modDef6822 from "module_6822" /* 6822 */;
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
  obj.children = jsx(_modDef6822, { style: container });
  return <tmp3 value>{null}</tmp3>;
};
