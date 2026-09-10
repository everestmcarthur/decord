// Module ID: 15076
// Function ID: 15077
// Name: BountiesScrollPromptNuxFooter
// Dependencies: [17, 21, 4574, 4570, 1114, 2]
// Exports: default

// Module 15076 (BountiesScrollPromptNuxFooter)
import _mod17 from "module_17" /* 17 */;
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4570 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 4574 */;
import size from "module_2" /* 2 */;

const View = _mod17.View;
({ jsx: c3, jsxs: closure_4 } = jsxProd);
let closure_5 = createStyles.createStyles(() => ({ root: { alignItems: "center", gap: 2 }, titleText: { textAlign: "center" }, swipeText: { textAlign: "center", textTransform: "uppercase" } }));
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesScrollPromptNuxFooter.tsx");

export default function BountiesScrollPromptFooter() {
  const tmp = closure_5();
  const obj = { style: tmp.root, children: null };
  const obj2 = { variant: "text-md/semibold", color: "text-default", style: tmp.titleText, children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t.H57f41);
  const items = [React3(Text_Text.Text, obj2), ];
  const obj3 = { variant: "text-xxs/semibold", color: "text-muted", style: tmp.swipeText, children: null };
  const intl2 = util.intl;
  obj3.children = intl2.string(util.t.tG0zsk);
  items[1] = React3(Text_Text.Text, obj3);
  obj.children = items;
  return React4(View, obj);
};
