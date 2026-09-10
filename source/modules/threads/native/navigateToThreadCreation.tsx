// Module ID: 11254
// Function ID: 11255
// Name: navigateToThreadCreation
// Dependencies: [7779, 4431, 4585, 2]
// Exports: navigateToThreadCreation

// Module 11254 (navigateToThreadCreation)
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 7779 */;
import size from "module_2" /* 2 */;

const transitionToChannel = tmp3(4585);
let result = size.fileFinishedImporting("modules/threads/native/navigateToThreadCreation.tsx");

export const navigateToThreadCreation = function navigateToThreadCreation(channel, Message) {
  const result = ThreadActionCreatorsDefault.openThreadCreationForMobile(channel, undefined, Message);
  if (!obj2.navigateToCreateThread(channel.guild_id, channel.id)) {
    transitionToChannel.transitionToChannel(channel.id);
    const tmp3Result = transitionToChannel;
  }
};
