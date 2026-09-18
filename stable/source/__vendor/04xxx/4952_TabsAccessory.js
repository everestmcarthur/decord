// Module ID: 4952
// Function ID: 4953
// Name: TabsAccessory
// Dependencies: [19, 17, 21, 4953]
// Exports: default

// Module 4952 (TabsAccessory)
import _modDef4953 from "module_4953" /* 4953 */;
import noop from "module_19" /* 19 */;

const StyleSheet = fn(17).StyleSheet;
const jsx = fn(21).jsx;

export default function TabsAccessory(style) {
  const obj = {};
  const merged = Object.assign(style);
  obj.collapsable = false;
  const items = [style.style, StyleSheet.absoluteFill];
  obj.style = items;
  return jsx(_modDef4953, {});
};
