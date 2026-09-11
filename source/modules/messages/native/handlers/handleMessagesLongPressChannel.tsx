// Module ID: 11678
// Function ID: 11679
// Name: handleMessagesLongPressChannel
// Dependencies: [4752, 11679, 2]
// Exports: handleMessagesLongPressChannel

// Module 11678 (handleMessagesLongPressChannel)
import ChannelUtils from "ChannelUtils" /* 4752 */;
import showLongPressURLActionSheetDefault from "showLongPressURLActionSheet" /* 11679 */;
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
