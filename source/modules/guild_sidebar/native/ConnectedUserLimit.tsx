// Module ID: 16122
// Function ID: 16123
// Name: ConnectedUserLimit
// Dependencies: [19, 21, 9093, 16123, 2]
// Exports: ConnectedUserLimit

// Module 16122 (ConnectedUserLimit)
import noopAll from "noop" /* 19 */;
import useChannelVideoLimitDefault from "useChannelVideoLimit" /* 9093 */;
import _modDef16123 from "module_16123" /* 16123 */;
import { jsx } from "jsxProd" /* 21 */;

noopAll;
const result = require("set").fileFinishedImporting("modules/guild_sidebar/native/ConnectedUserLimit.tsx");

export const ConnectedUserLimit = function ConnectedUserLimit(users) {
  ({ channel, video } = users);
  const limit = useChannelVideoLimitDefault(channel).limit;
  let num = -1;
  if (channel.userLimit > 0) {
    num = channel.userLimit;
  }
  if (video) {
    video = limit > 0;
  }
  let videoLimit = false;
  let total = num;
  if (video) {
    let bound = limit;
    if (num > 0) {
      const _Math = Math;
      bound = Math.min(num, limit);
    }
    total = bound;
    videoLimit = num < 0 || limit < num;
    const tmp4 = num < 0 || limit < num;
  }
  return jsx(_modDef16123, { users: users.userCount, total, videoLimit });
};
