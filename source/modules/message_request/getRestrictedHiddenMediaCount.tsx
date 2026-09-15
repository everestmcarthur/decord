// Module ID: 17053
// Function ID: 17054
// Name: getRestrictedHiddenMediaCount
// Dependencies: [8061, 4978, 2]
// Exports: default

// Module 17053 (getRestrictedHiddenMediaCount)
import StickersUtils from "StickersUtils" /* 4978 */;
import formatMessageForwards from "formatMessageForwards" /* 8061 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/message_request/getRestrictedHiddenMediaCount.tsx");

export default function getRestrictedHiddenMediaCount(message) {
  const result = formatMessageForwards.maybeCreateSingleForwardForMessage(message);
  if (null != result) {
    message = result.messageSnapshot.message;
  }
  const sum = message.attachments.length + message.embeds.length;
  return sum + StickersUtils.getMessageStickers(message).length;
};
