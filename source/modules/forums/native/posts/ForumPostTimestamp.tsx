// Module ID: 12084
// Function ID: 12085
// Name: ForumPostTimestamp
// Dependencies: [19, 12071, 21, 4605, 7937, 4601, 2]
// Exports: default

// Module 12084 (ForumPostTimestamp)
import ForumHooks from "ForumHooks" /* 7937 */;
import noop from "module_19" /* 19 */;

const Text_Text = tmp2(4601);
require = fn;
const useForumChannelStore = fn(12071).useForumChannelStore;
const jsx = fn(21).jsx;
const createStyles = fn(4605);
let closure_4 = createStyles.createStyles({ text: { lineHeight: 18, height: 18 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/forums/native/posts/ForumPostTimestamp.tsx");

export default function ForumPostTimestamp(thread) {
  thread = thread.thread;
  ({ textStyle, hasUnreads, format } = thread);
  const tmp = closure_4();
  let str = "text-muted";
  const lastActiveTimestamp = ForumHooks.useLastActiveTimestamp(thread, useForumChannelStore(thread.parent_id).sortOrder, format);
  if (hasUnreads) {
    str = "text-default";
  }
  const obj2 = { lineClamp: 1, variant: "text-xs/normal", color: str, style: null, children: lastActiveTimestamp };
  const items = [textStyle, tmp.text];
  obj2.style = items;
  return jsx(Text_Text.Text, { lineClamp: 1, variant: "text-xs/normal", color: str, style: null, children: lastActiveTimestamp });
};
