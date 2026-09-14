// Module ID: 12353
// Function ID: 12354
// Name: ErrorBlock
// Dependencies: [19, 21, 12354, 2]
// Exports: default

// Module 12353 (ErrorBlock)
import MessageBlock from "MessageBlock" /* 12354 */;
import noop from "module_19" /* 19 */;

const MessageBlockDefault = MessageBlock;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/ErrorBlock.tsx");

export default function ErrorBlock(children) {
  const obj = { color: MessageBlock.MessageBlockColors.RED, children: children.children };
  return jsx(MessageBlockDefault, { color: MessageBlock.MessageBlockColors.RED, children: children.children });
};
