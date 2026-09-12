// Module ID: 11712
// Function ID: 11713
// Name: handleMessagesLongPressChannel
// Dependencies: [4781, 11713, 2]
// Exports: handleMessagesLongPressChannel

// Module 11712 (handleMessagesLongPressChannel)
import ChannelUtils from "ChannelUtils" /* 4781 */;
import showLongPressURLActionSheetDefault from "showLongPressURLActionSheet" /* 11713 */;
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
