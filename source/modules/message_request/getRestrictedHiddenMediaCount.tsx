// Module ID: 17150
// Function ID: 17151
// Name: getRestrictedHiddenMediaCount
// Dependencies: [8090, 4979, 2]
// Exports: default

// Module 17150 (getRestrictedHiddenMediaCount)
import StickersUtils from "StickersUtils" /* 4979 */;
import formatMessageForwards from "formatMessageForwards" /* 8090 */;
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
