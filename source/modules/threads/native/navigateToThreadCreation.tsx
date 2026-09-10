// Module ID: 11294
// Function ID: 11295
// Name: navigateToThreadCreation
// Dependencies: [7816, 4462, 4616, 2]
// Exports: navigateToThreadCreation

// Module 11294 (navigateToThreadCreation)
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 7816 */;
import size from "module_2" /* 2 */;

const transitionToChannel = tmp3(4616);
let result = size.fileFinishedImporting("modules/threads/native/navigateToThreadCreation.tsx");

export const navigateToThreadCreation = function navigateToThreadCreation(channel, Message) {
  const result = ThreadActionCreatorsDefault.openThreadCreationForMobile(channel, undefined, Message);
  if (!obj2.navigateToCreateThread(channel.guild_id, channel.id)) {
    transitionToChannel.transitionToChannel(channel.id);
    const tmp3Result = transitionToChannel;
  }
};
