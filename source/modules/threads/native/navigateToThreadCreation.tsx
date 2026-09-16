// Module ID: 11368
// Function ID: 11369
// Name: navigateToThreadCreation
// Dependencies: [7879, 4495, 4649, 2]
// Exports: navigateToThreadCreation

// Module 11368 (navigateToThreadCreation)
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 7879 */;
import size from "module_2" /* 2 */;

const transitionToChannel = tmp3(4649);
let result = size.fileFinishedImporting("modules/threads/native/navigateToThreadCreation.tsx");

export const navigateToThreadCreation = function navigateToThreadCreation(channel, Message) {
  const result = ThreadActionCreatorsDefault.openThreadCreationForMobile(channel, undefined, Message);
  if (!obj2.navigateToCreateThread(channel.guild_id, channel.id)) {
    transitionToChannel.transitionToChannel(channel.id);
    const tmp3Result = transitionToChannel;
  }
};
