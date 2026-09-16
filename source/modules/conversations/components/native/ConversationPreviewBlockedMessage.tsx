// Module ID: 8044
// Function ID: 8045
// Name: ConversationPreviewBlockedMessage
// Dependencies: [19, 21, 5058, 576, 8045, 7076, 4634, 1115, 2]
// Exports: default

// Module 8044 (ConversationPreviewBlockedMessage)
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4634 */;
import Stack_Stack from "Stack/Stack" /* 5058 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conversations/components/native/ConversationPreviewBlockedMessage.tsx");

export default function ConversationPreviewBlockedMessage(reason) {
  const obj = { direction: "horizontal", spacing: nativeDefault.space.PX_8, align: "center", children: null };
  if ("blocked" === reason.reason) {
    let EyeSlashIcon = tmp2(8045).DenyIcon;
  } else {
    EyeSlashIcon = tmp2(7076).EyeSlashIcon;
  }
  const items = [React3(EyeSlashIcon, { size: "sm", color: nativeDefault.colors.TEXT_MUTED }), ];
  const intl = tmp2(1115).intl;
  const t = tmp2(1115).t;
  const obj2 = { size: "sm", color: nativeDefault.colors.TEXT_MUTED };
  const tmp = React4;
  items[1] = React3(Text_Text.Text, { variant: "text-md/normal", color: "text-muted", children: intl.string("blocked" === reason.reason ? t["WPe+xL"] : t.uxrh1O) });
  obj.children = items;
  return tmp(Stack_Stack.Stack, obj);
};
