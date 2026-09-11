// Module ID: 15282
// Function ID: 15283
// Name: NavigateForwardButton
// Dependencies: [19, 21, 4606, 576, 5174, 4602, 1178, 15283, 2]
// Exports: default

// Module 15282 (NavigateForwardButton)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1178 */;
import Text_Text from "Text/Text" /* 4602 */;
import Pressables from "Pressables" /* 5174 */;
import _modDef15283 from "module_15283" /* 15283 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(4606);
const obj2 = { container: { alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, flexDirection: "row", padding: 16 }, text: { flexGrow: 1 } };
let closure_5 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/NavigateForwardButton.tsx");

export default function NavigateForwardButton(arg0) {
  ({ onPress, text } = arg0);
  const tmp = closure_5();
  const obj = { style: tmp.container, onPress, children: null };
  const items = [React3(Text_Text.Text, { style: tmp.text, variant: "text-md/semibold", color: "interactive-text-active", children: text }), React3(native.Icon, { source: _modDef15283 })];
  obj.children = items;
  return React4(Pressables.PressableHighlight, obj);
};
