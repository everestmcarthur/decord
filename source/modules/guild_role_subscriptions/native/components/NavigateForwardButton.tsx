// Module ID: 15253
// Function ID: 15254
// Name: NavigateForwardButton
// Dependencies: [19, 21, 4574, 576, 5137, 4570, 1178, 15254, 2]
// Exports: default

// Module 15253 (NavigateForwardButton)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1178 */;
import Text_Text from "Text/Text" /* 4570 */;
import Pressables from "Pressables" /* 5137 */;
import _modDef15254 from "module_15254" /* 15254 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(4574);
const obj2 = { container: { alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, flexDirection: "row", padding: 16 }, text: { flexGrow: 1 } };
let closure_5 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/NavigateForwardButton.tsx");

export default function NavigateForwardButton(arg0) {
  ({ onPress, text } = arg0);
  const tmp = closure_5();
  const obj = { style: tmp.container, onPress, children: null };
  const items = [React3(Text_Text.Text, { style: tmp.text, variant: "text-md/semibold", color: "interactive-text-active", children: text }), React3(native.Icon, { source: _modDef15254 })];
  obj.children = items;
  return React4(Pressables.PressableHighlight, obj);
};
