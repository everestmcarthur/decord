// Module ID: 17844
// Function ID: 17845
// Name: AVErrorStreamBadNetworkQualityDefinition
// Dependencies: [4599, 1074, 9115, 17837, 1369, 2]

// Module 17844 (AVErrorStreamBadNetworkQualityDefinition)
import isDiscordFrontendDevelopment from "isDiscordFrontendDevelopment" /* 1369 */;
import closure_2 from "initialize" /* 4599 */;
import { RTCConnectionQuality } from "ME" /* 1074 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorStreamBadNetworkQuality.tsx");

export const AVErrorStreamBadNetworkQualityDefinition = {
  getActiveErrors() {
    allActiveStreamKeys = allActiveStreamKeys.getAllActiveStreamKeys();
    const mapped = allActiveStreamKeys.map((streamKey) => {
      let tmp = null;
      if (quality.getQuality(streamKey) === constants.BAD) {
        const obj = { type: null };
        obj[0] = callback(9115).AVError.STREAM_BAD_NETWORK_QUALITY;
        const merged = Object.assign(callback(17837).getStreamErrorContext(streamKey));
        tmp = obj;
        const obj2 = callback(17837);
      }
      return tmp;
    });
    return mapped.filter(isDiscordFrontendDevelopment.isNotNullish);
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  }
};
