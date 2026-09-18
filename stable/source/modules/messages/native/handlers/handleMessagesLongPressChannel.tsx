// Module ID: 11588
// Function ID: 11589
// Name: handleMessagesLongPressChannel
// Dependencies: [4705, 11589, 2]
// Exports: handleMessagesLongPressChannel

// Module 11588 (handleMessagesLongPressChannel)
import ChannelUtils from "ChannelUtils" /* 4705 */;
import showLongPressURLActionSheetDefault from "showLongPressURLActionSheet" /* 11589 */;
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
