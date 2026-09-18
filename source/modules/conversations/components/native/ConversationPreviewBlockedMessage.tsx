// Module ID: 8147
// Function ID: 8148
// Name: ConversationPreviewBlockedMessage
// Dependencies: [19, 21, 5142, 576, 8148, 7162, 4718, 1115, 2]
// Exports: default

// Module 8147 (ConversationPreviewBlockedMessage)
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4718 */;
import Stack_Stack from "Stack/Stack" /* 5142 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conversations/components/native/ConversationPreviewBlockedMessage.tsx");

export default function ConversationPreviewBlockedMessage(reason) {
  const obj = { direction: "horizontal", spacing: nativeDefault.space.PX_8, align: "center", children: null };
  if ("blocked" === reason.reason) {
    let EyeSlashIcon = tmp2(8148).DenyIcon;
  } else {
    EyeSlashIcon = tmp2(7162).EyeSlashIcon;
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
