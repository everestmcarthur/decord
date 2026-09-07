// Module ID: 16513
// Function ID: 16514
// Name: CustomStatusEntryRow
// Dependencies: [19, 21, 16509, 16514, 2]
// Exports: default

// Module 16513 (CustomStatusEntryRow)
import noopAll from "noop" /* 19 */;
import useReplyActions from "useReplyActions" /* 16509 */;
import UploadPlaceholderDefault from "UploadPlaceholder" /* 16514 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/icymi/native/content_inventory/CustomStatusEntryRow.tsx");

export default function CustomStatusEntryRow(content) {
  content = content.content;
  ({ renderForScreenshot, visible } = content);
  let obj = useReplyActions;
  const replyActions = obj.useReplyActions({ content });
  ({ openEmojiPicker, openReplyActionSheet } = replyActions);
  obj = { id: content.id, userId: content.author_id, customStatusExtra: content.extra, renderForScreenshot, visible, variant: { kind: "otherUserStatus", handlePressPrimary: openReplyActionSheet, handlePressSecondary: openEmojiPicker } };
  return jsx(UploadPlaceholderDefault, { id: content.id, userId: content.author_id, customStatusExtra: content.extra, renderForScreenshot, visible, variant: { kind: "otherUserStatus", handlePressPrimary: openReplyActionSheet, handlePressSecondary: openEmojiPicker } });
};
