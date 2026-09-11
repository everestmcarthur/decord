// Module ID: 6843
// Function ID: 6844
// Name: GestureHandlerRootView
// Dependencies: [19, 17, 21, 6746, 6844]
// Exports: default

// Module 6843 (GestureHandlerRootView)
import _modDef6746 from "module_6746" /* 6746 */;
import _modDef6844 from "module_6844" /* 6844 */;
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
  obj.children = jsx(_modDef6844, { style: container });
  return <tmp3 value>{null}</tmp3>;
};
