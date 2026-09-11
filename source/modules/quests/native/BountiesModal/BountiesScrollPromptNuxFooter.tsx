// Module ID: 15102
// Function ID: 15103
// Name: BountiesScrollPromptNuxFooter
// Dependencies: [17, 21, 4607, 7053, 4603, 1114, 2]
// Exports: default

// Module 15102 (BountiesScrollPromptNuxFooter)
import _mod17 from "module_17" /* 17 */;
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4603 */;
import useTypeConsolidationTextTransform from "useTypeConsolidationTextTransform" /* 7053 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 4607 */;
import size from "module_2" /* 2 */;

const View = _mod17.View;
({ jsx: c3, jsxs: closure_4 } = jsxProd);
let closure_5 = createStyles.createStyles(() => ({ root: { alignItems: "center", gap: 2 }, titleText: { textAlign: "center" }, swipeText: { textAlign: "center", textTransform: "uppercase" } }));
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesScrollPromptNuxFooter.tsx");

export default function BountiesScrollPromptFooter() {
  const tmp = closure_5();
  const obj2 = { style: tmp.root, children: null };
  const typeConsolidationTextTransform = useTypeConsolidationTextTransform.useTypeConsolidationTextTransform("BountiesScrollPromptNuxFooter");
  const obj3 = { variant: "text-md/semibold", color: "text-default", style: tmp.titleText, children: null };
  const intl = util.intl;
  obj3.children = intl.string(util.t.H57f41);
  const items = [React3(Text_Text.Text, obj3), ];
  const obj4 = { variant: "text-xxs/semibold", color: "text-muted", style: null, children: null };
  const items1 = [tmp.swipeText, typeConsolidationTextTransform];
  obj4.style = items1;
  const intl2 = util.intl;
  obj4.children = intl2.string(util.t.tG0zsk);
  items[1] = React3(Text_Text.Text, obj4);
  obj2.children = items;
  return React4(View, obj2);
};
