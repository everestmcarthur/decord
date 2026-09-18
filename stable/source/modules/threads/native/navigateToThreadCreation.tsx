// Module ID: 11227
// Function ID: 11228
// Name: navigateToThreadCreation
// Dependencies: [7765, 4417, 4571, 2]
// Exports: navigateToThreadCreation

// Module 11227 (navigateToThreadCreation)
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 7765 */;
import size from "module_2" /* 2 */;

const transitionToChannel = tmp3(4571);
let result = size.fileFinishedImporting("modules/threads/native/navigateToThreadCreation.tsx");

export const navigateToThreadCreation = function navigateToThreadCreation(channel, Message) {
  const result = ThreadActionCreatorsDefault.openThreadCreationForMobile(channel, undefined, Message);
  if (!obj2.navigateToCreateThread(channel.guild_id, channel.id)) {
    transitionToChannel.transitionToChannel(channel.id);
    const tmp3Result = transitionToChannel;
  }
};
