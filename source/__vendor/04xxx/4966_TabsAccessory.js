// Module ID: 4966
// Function ID: 4967
// Name: TabsAccessory
// Dependencies: [19, 17, 21, 4967]
// Exports: default

// Module 4966 (TabsAccessory)
import _modDef4967 from "module_4967" /* 4967 */;
import noop from "module_19" /* 19 */;

const StyleSheet = fn(17).StyleSheet;
const jsx = fn(21).jsx;

export default function TabsAccessory(style) {
  const obj = {};
  const merged = Object.assign(style);
  obj.collapsable = false;
  const items = [style.style, StyleSheet.absoluteFill];
  obj.style = items;
  return jsx(_modDef4967, {});
};
