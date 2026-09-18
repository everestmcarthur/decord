// Module ID: 11474
// Function ID: 11475
// Name: navigateToThreadCreation
// Dependencies: [7967, 4579, 4733, 2]
// Exports: navigateToThreadCreation

// Module 11474 (navigateToThreadCreation)
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 7967 */;
import size from "module_2" /* 2 */;

const transitionToChannel = tmp3(4733);
let result = size.fileFinishedImporting("modules/threads/native/navigateToThreadCreation.tsx");

export const navigateToThreadCreation = function navigateToThreadCreation(channel, Message) {
  const result = ThreadActionCreatorsDefault.openThreadCreationForMobile(channel, undefined, Message);
  if (!obj2.navigateToCreateThread(channel.guild_id, channel.id)) {
    transitionToChannel.transitionToChannel(channel.id);
    const tmp3Result = transitionToChannel;
  }
};
