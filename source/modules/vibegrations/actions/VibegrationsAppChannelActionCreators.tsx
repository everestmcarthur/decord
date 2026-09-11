// Module ID: 13352
// Function ID: 13353
// Name: VibegrationsAppChannelActionCreators
// Dependencies: [7949, 573, 2]
// Exports: setAppChannelChatOpen

// Module 13352 (VibegrationsAppChannelActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import VibegrationsAppChannelsStore from "VibegrationsAppChannelsStore" /* 7949 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/actions/VibegrationsAppChannelActionCreators.tsx");

export const setAppChannelChatOpen = function setAppChannelChatOpen(id, open) {
  if (VibegrationsAppChannelsStore.isChatOpen(id) !== open) {
    const obj2 = { type: "VIBEGRATIONS_APP_CHANNEL_CHAT_SET", channelId: id, open };
    DispatcherDefault.dispatch(obj2);
  }
};
