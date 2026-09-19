// Module ID: 7994
// Function ID: 7995
// Name: maybeConvertPrivateChannel
// Dependencies: [2041, 7461, 4769, 2]
// Exports: default

// Module 7994 (maybeConvertPrivateChannel)
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 4769 */;
import FakePlaceholderPrivateChannel from "FakePlaceholderPrivateChannel" /* 7461 */;
import ChannelStore from "ChannelStore" /* 2041 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/private_channel_creation/maybeConvertPrivateChannel.tsx");

export default function maybeConvertPrivateChannel(arg0) {
  if (arg0 !== FakePlaceholderPrivateChannel.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
    return null;
  } else {
    const channel = ChannelStore.getChannel(arg0);
    let ensurePrivateChannelResult = null;
    if (null != channel) {
      ensurePrivateChannelResult = ChannelActionCreatorsDefault.ensurePrivateChannel(channel.recipients);
    }
    return ensurePrivateChannelResult;
  }
};
