// Module ID: 16581
// Function ID: 16582
// Name: CustomStatusEntryRow
// Dependencies: [19, 21, 16577, 16582, 2]
// Exports: default

// Module 16581 (CustomStatusEntryRow)
import useReplyActions from "useReplyActions" /* 16577 */;
import ICYMICustomStatusRowDefault from "ICYMICustomStatusRow" /* 16582 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/icymi/native/content_inventory/CustomStatusEntryRow.tsx");

export default function CustomStatusEntryRow(content) {
  content = content.content;
  ({ renderForScreenshot, visible } = content);
  const replyActions = useReplyActions.useReplyActions({ content });
  ({ openEmojiPicker, openReplyActionSheet } = replyActions);
  return jsx(ICYMICustomStatusRowDefault, { id: content.id, userId: content.author_id, customStatusExtra: content.extra, renderForScreenshot, visible, variant: { kind: "otherUserStatus", handlePressPrimary: openReplyActionSheet, handlePressSecondary: openEmojiPicker } });
};
