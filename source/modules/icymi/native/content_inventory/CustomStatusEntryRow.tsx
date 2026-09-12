// Module ID: 16605
// Function ID: 16606
// Name: CustomStatusEntryRow
// Dependencies: [19, 21, 16601, 16606, 2]
// Exports: default

// Module 16605 (CustomStatusEntryRow)
import useReplyActions from "useReplyActions" /* 16601 */;
import ICYMICustomStatusRowDefault from "ICYMICustomStatusRow" /* 16606 */;
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
