// Module ID: 13402
// Function ID: 13403
// Name: VibegrationsAppChannelActionCreators
// Dependencies: [7991, 573, 2]
// Exports: setAppChannelChatOpen

// Module 13402 (VibegrationsAppChannelActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import VibegrationsAppChannelsStore from "VibegrationsAppChannelsStore" /* 7991 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/actions/VibegrationsAppChannelActionCreators.tsx");

export const setAppChannelChatOpen = function setAppChannelChatOpen(id, open) {
  if (VibegrationsAppChannelsStore.isChatOpen(id) !== open) {
    const obj2 = { type: "VIBEGRATIONS_APP_CHANNEL_CHAT_SET", channelId: id, open };
    DispatcherDefault.dispatch(obj2);
  }
};
