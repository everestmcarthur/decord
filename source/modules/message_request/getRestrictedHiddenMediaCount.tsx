// Module ID: 17110
// Function ID: 17111
// Name: getRestrictedHiddenMediaCount
// Dependencies: [8070, 4977, 2]
// Exports: default

// Module 17110 (getRestrictedHiddenMediaCount)
import StickersUtils from "StickersUtils" /* 4977 */;
import formatMessageForwards from "formatMessageForwards" /* 8070 */;
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
