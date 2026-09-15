// Module ID: 11360
// Function ID: 11361
// Name: navigateToThreadCreation
// Dependencies: [7870, 4497, 4650, 2]
// Exports: navigateToThreadCreation

// Module 11360 (navigateToThreadCreation)
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 7870 */;
import size from "module_2" /* 2 */;

const transitionToChannel = tmp3(4650);
let result = size.fileFinishedImporting("modules/threads/native/navigateToThreadCreation.tsx");

export const navigateToThreadCreation = function navigateToThreadCreation(channel, Message) {
  const result = ThreadActionCreatorsDefault.openThreadCreationForMobile(channel, undefined, Message);
  if (!obj2.navigateToCreateThread(channel.guild_id, channel.id)) {
    transitionToChannel.transitionToChannel(channel.id);
    const tmp3Result = transitionToChannel;
  }
};
