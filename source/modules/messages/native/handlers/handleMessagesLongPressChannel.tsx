// Module ID: 11654
// Function ID: 11655
// Name: handleMessagesLongPressChannel
// Dependencies: [4750, 11655, 2]
// Exports: handleMessagesLongPressChannel

// Module 11654 (handleMessagesLongPressChannel)
import ChannelUtils from "ChannelUtils" /* 4750 */;
import showLongPressURLActionSheetDefault from "showLongPressURLActionSheet" /* 11655 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/handlers/handleMessagesLongPressChannel.tsx");

export const handleMessagesLongPressChannel = function handleMessagesLongPressChannel(data) {
  ({ guildId, channelId, messageId, originalLink } = data.data);
  if (null != channelId) {
    if (originalLink == null) {
      originalLink = ChannelUtils.getChannelPermalink(guildId, channelId, messageId);
    }
    if (null != originalLink) {
      const obj2 = { urlString: originalLink, guildId, channelId, messageId };
      showLongPressURLActionSheetDefault(obj2);
    }
  }
};
