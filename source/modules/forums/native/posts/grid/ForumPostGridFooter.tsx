// Module ID: 12110
// Function ID: 12111
// Name: ForumPostGridFooter
// Dependencies: [19, 17, 1074, 21, 4606, 576, 12059, 12111, 12112, 11508, 2]
// Exports: default

// Module 12110 (ForumPostGridFooter)
import nativeDefault from "native" /* 576 */;
import ForumPostReactions from "ForumPostReactions" /* 11508 */;
import useTypingUsersIds from "useTypingUsersIds" /* 12059 */;
import ForumPostMessageCountDefault from "ForumPostMessageCount" /* 12111 */;
import ForumPostTypingUsersDefault from "ForumPostTypingUsers" /* 12112 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const AnalyticsObjects = fn(1074).AnalyticsObjects;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4606);
let obj2 = { footer: { display: "flex", alignItems: "center", flexDirection: "row", justifyContent: "flex-start", marginTop: 12 }, dot: null };
let size = { height: 4, width: 4, borderRadius: 2, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginHorizontal: 8 };
obj2.dot = size;
let closure_8 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/forums/native/posts/grid/ForumPostGridFooter.tsx");

export default function ForumPostGridFooter(parentChannel) {
  ({ thread, firstMessage, hasUnreads } = parentChannel);
  const tmp = closure_8();
  const typingUserIds = useTypingUsersIds.useTypingUserIds(thread.id);
  let tmp5Result = typingUserIds.length > 0;
  const obj2 = { style: tmp.footer, children: null };
  const items = [hasOwnProperty(ForumPostMessageCountDefault, { thread, hasUnreads }), , ];
  if (tmp5Result) {
    const obj3 = { children: null };
    const obj4 = { style: tmp.dot };
    const items1 = [tmp7(tmp6, obj4), ];
    const obj5 = { thread, typingUserIds, hasUnreads };
    items1[1] = tmp7(ForumPostTypingUsersDefault, obj5);
    obj3.children = items1;
    tmp5Result = tmp5(timestampProducer, obj3);
  }
  items[1] = tmp5Result;
  let tmp7Result = null != firstMessage;
  if (tmp7Result) {
    const obj6 = { thread, firstMessage, parentChannel: parentChannel.parentChannel, locationAnalyticsObject: AnalyticsObjects.FORUM_GRID_ITEM_FOOTER };
    tmp7Result = tmp7(ForumPostReactions.MostCommonForumPostReaction, obj6);
  }
  items[2] = tmp7Result;
  obj2.children = items;
  return React5(View, obj2);
};
