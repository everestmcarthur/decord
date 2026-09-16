// Module ID: 5502
// Function ID: 5503
// Name: canJoinVoiceChannel
// Dependencies: [1962, 1074, 2]
// Exports: default

// Module 5502 (canJoinVoiceChannel)
import Constants from "Constants" /* 1074 */;
import ChannelRecord from "ChannelRecord" /* 1962 */;
import size from "module_2" /* 2 */;

const isPrivate = ChannelRecord.isPrivate;
const BasicPermissions = Constants.BasicPermissions;
const result = size.fileFinishedImporting("modules/channel/canJoinVoiceChannel.tsx");

export default function canJoinVoiceChannel(type, canBasicChannel) {
  let canBasicChannelResult = isPrivate(type.type);
  if (!canBasicChannelResult) {
    canBasicChannelResult = canBasicChannel.canBasicChannel(BasicPermissions.CONNECT | BasicPermissions.VIEW_CHANNEL, type);
  }
  return canBasicChannelResult;
};
