// Module ID: 15005
// Function ID: 15006
// Name: FamilyCenterEmpty
// Dependencies: [19, 17, 21, 4636, 15006, 4632, 2]
// Exports: default

// Module 15005 (FamilyCenterEmpty)
import Text_Text from "Text/Text" /* 4632 */;
import _modDef15006 from "module_15006" /* 15006 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, Image: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4636);
let closure_7 = createStyles.createStyles({ art: { marginBottom: 10, width: 243 }, empty: { display: "flex", alignItems: "center" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterEmpty.tsx");

export default function FamilyCenterEmpty(children) {
  const tmp = closure_7();
  const obj = { style: tmp.empty, children: null };
  const items = [hasOwnProperty(React4, { source: _modDef15006, style: tmp.art, resizeMethod: "scale" }), hasOwnProperty(Text_Text.Text, { variant: "text-sm/medium", color: "text-muted", children: children.text })];
  obj.children = items;
  return timestampProducer(React3, obj);
};
