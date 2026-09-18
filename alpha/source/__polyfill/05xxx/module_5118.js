// Module ID: 5118
// Function ID: 5119
// Dependencies: [19, 17, 21, 5119]
// Exports: SafeAreaView

// Module 5118
import _modDef5119 from "module_5119" /* 5119 */;
import noop from "module_19" /* 19 */;

const StyleSheet = fn(17).StyleSheet;
const jsx = fn(21).jsx;
const styles = StyleSheet.create({ flex: { flex: 1 } });

export const SafeAreaView = function SafeAreaView(style) {
  const obj = {};
  const merged = Object.assign(style);
  const items = [styles.flex, style.style];
  obj.style = items;
  const rect = { top: false, bottom: false, left: false, right: false };
  const merged1 = Object.assign(style.edges);
  obj.edges = rect;
  return jsx(_modDef5119, {});
};
