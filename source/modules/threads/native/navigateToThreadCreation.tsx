// Module ID: 11376
// Function ID: 11377
// Name: navigateToThreadCreation
// Dependencies: [7885, 4497, 4651, 2]
// Exports: navigateToThreadCreation

// Module 11376 (navigateToThreadCreation)
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 7885 */;
import size from "module_2" /* 2 */;

const transitionToChannel = tmp3(4651);
let result = size.fileFinishedImporting("modules/threads/native/navigateToThreadCreation.tsx");

export const navigateToThreadCreation = function navigateToThreadCreation(channel, Message) {
  const result = ThreadActionCreatorsDefault.openThreadCreationForMobile(channel, undefined, Message);
  if (!obj2.navigateToCreateThread(channel.guild_id, channel.id)) {
    transitionToChannel.transitionToChannel(channel.id);
    const tmp3Result = transitionToChannel;
  }
};
