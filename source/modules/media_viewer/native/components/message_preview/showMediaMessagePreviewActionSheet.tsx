// Module ID: 13067
// Function ID: 13068
// Name: showMediaMessagePreviewActionSheet
// Dependencies: [1957, 1371, 4573, 13068, 1896, 2]
// Exports: default

// Module 13067 (showMediaMessagePreviewActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4573 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_viewer/native/components/message_preview/showMediaMessagePreviewActionSheet.tsx");

export default function showMediaMessagePreviewActionSheet(message) {
  message = message.message;
  const channel = ChannelStore.getChannel(message.channelId);
  if (null != channel) {
    if (null != message) {
      const user = UserStore.getUser(message.author.id);
      if (null != user) {
        const obj2 = { channel, message, user, closeMediaModal: message.closeMediaModal };
        ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13068, dependencyMap.paths), "MediaMessagePreviewActionSheet", obj2);
      }
    }
  }
};
