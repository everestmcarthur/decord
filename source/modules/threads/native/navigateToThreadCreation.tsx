// Module ID: 11316
// Function ID: 11317
// Name: navigateToThreadCreation
// Dependencies: [7837, 4464, 4617, 2]
// Exports: navigateToThreadCreation

// Module 11316 (navigateToThreadCreation)
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 7837 */;
import size from "module_2" /* 2 */;

const transitionToChannel = tmp3(4617);
let result = size.fileFinishedImporting("modules/threads/native/navigateToThreadCreation.tsx");

export const navigateToThreadCreation = function navigateToThreadCreation(channel, Message) {
  const result = ThreadActionCreatorsDefault.openThreadCreationForMobile(channel, undefined, Message);
  if (!obj2.navigateToCreateThread(channel.guild_id, channel.id)) {
    transitionToChannel.transitionToChannel(channel.id);
    const tmp3Result = transitionToChannel;
  }
};
