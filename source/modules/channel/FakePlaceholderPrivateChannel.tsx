// Module ID: 7295
// Function ID: 7296
// Name: FakePlaceholderPrivateChannel
// Dependencies: [1961, 1074, 2]

// Module 7295 (FakePlaceholderPrivateChannel)
import Constants from "Constants" /* 1074 */;
import ChannelRecord from "ChannelRecord" /* 1961 */;
import size from "module_2" /* 2 */;

const channelRecord = ChannelRecord.createChannelRecord({ id: "131", type: Constants.ChannelTypes.DM, name: "Placeholder Channel" });
const result = size.fileFinishedImporting("modules/channel/FakePlaceholderPrivateChannel.tsx");

export const FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID = "131";
export const FAKE_PLACEHOLDER_PRIVATE_CHANNEL = channelRecord;
