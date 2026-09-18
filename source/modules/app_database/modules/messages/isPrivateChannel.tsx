// Module ID: 7679
// Function ID: 7680
// Name: isPrivateChannel
// Dependencies: [2]
// Exports: isPrivateChannel

// Module 7679 (isPrivateChannel)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_database/modules/messages/isPrivateChannel.tsx");

export const isPrivateChannel = function isPrivateChannel(basicChannel) {
  return null == basicChannel.guild_id;
};
