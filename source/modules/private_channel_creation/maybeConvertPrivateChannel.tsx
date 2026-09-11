// Module ID: 7827
// Function ID: 7828
// Name: maybeConvertPrivateChannel
// Dependencies: [1957, 7295, 4620, 2]
// Exports: default

// Module 7827 (maybeConvertPrivateChannel)
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 4620 */;
import FakePlaceholderPrivateChannel from "FakePlaceholderPrivateChannel" /* 7295 */;
import ChannelStore from "ChannelStore" /* 1957 */;

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
