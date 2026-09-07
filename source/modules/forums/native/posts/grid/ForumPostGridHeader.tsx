// Module ID: 12006
// Function ID: 12007
// Name: ForumPostGridHeader
// Dependencies: [19, 17, 7273, 1964, 21, 4560, 12007, 12009, 12018, 12019, 12020, 2]
// Exports: default

// Module 12006 (ForumPostGridHeader)
import noopAll from "noop" /* 19 */;
import ForumPostPinIconDefault from "ForumPostPinIcon" /* 12007 */;
import ForumPostUsername from "ForumPostUsername" /* 12009 */;
import ForumPostTimestampDefault from "ForumPostTimestamp" /* 12018 */;
import ForumPostTitleDefault from "ForumPostTitle" /* 12020 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { ForumTimestampFormats } from "FORUM_GUIDELINES_ACTION_SHEET" /* 7273 */;
import { ChannelFlags } from "set" /* 1964 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

require = arg1;
noopAll;
({ jsx: closure_6, jsxs: error } = jsxProd);
let closure_8 = createCacheKey.createStyles({ pinIcon: { marginEnd: 8 }, container: { display: "flex", flexDirection: "column", marginBottom: 4 }, details: { flexDirection: "row", alignItems: "center", marginBottom: 4 }, timestampText: { flex: 1 } });
const result = require("set").fileFinishedImporting("modules/forums/native/posts/grid/ForumPostGridHeader.tsx");

export default function ForumPostGridHeader(arg0) {
  ({ thread, hasUnreads, isNew } = arg0);
  const tmp = callback2();
  let hasFlagResult = thread.hasFlag(ChannelFlags.PINNED);
  let obj = { style: tmp.container, children: null };
  obj = { style: tmp.details, children: null };
  if (hasFlagResult) {
    obj = { containerStyle: null };
    obj[0] = tmp.pinIcon;
    hasFlagResult = callback(ForumPostPinIconDefault, obj);
  }
  const items = [hasFlagResult, callback(ForumPostUsername.ForumPostAuthor, { thread, hasUnreads }), callback(ForumPostTimestampDefault, { thread, hasUnreads, format: ForumTimestampFormats.POSTED_DURATION_AGO, textStyle: tmp.timestampText }), ];
  if (isNew) {
    isNew = tmp8(tmp10(12019), {});
  }
  items[3] = isNew;
  obj[1] = items;
  const items1 = [closure_7(View, obj), callback(ForumPostTitleDefault, { title: thread.name, hasUnreads })];
  obj[1] = items1;
  return closure_7(View, obj);
};
