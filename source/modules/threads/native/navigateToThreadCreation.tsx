// Module ID: 11318
// Function ID: 11319
// Name: navigateToThreadCreation
// Dependencies: [7838, 4464, 4618, 2]
// Exports: navigateToThreadCreation

// Module 11318 (navigateToThreadCreation)
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 7838 */;
import size from "module_2" /* 2 */;

const transitionToChannel = tmp3(4618);
let result = size.fileFinishedImporting("modules/threads/native/navigateToThreadCreation.tsx");

export const navigateToThreadCreation = function navigateToThreadCreation(channel, Message) {
  const result = ThreadActionCreatorsDefault.openThreadCreationForMobile(channel, undefined, Message);
  if (!obj2.navigateToCreateThread(channel.guild_id, channel.id)) {
    transitionToChannel.transitionToChannel(channel.id);
    const tmp3Result = transitionToChannel;
  }
};
