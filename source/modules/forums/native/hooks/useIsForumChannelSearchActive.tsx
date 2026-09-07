// Module ID: 13278
// Function ID: 13279
// Name: useIsForumChannelSearchActive
// Dependencies: [7768, 13262, 504, 2]
// Exports: useIsForumChannelSearchActive

// Module 13278 (useIsForumChannelSearchActive)
import closure_2 from "initialize" /* 7768 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/forums/native/hooks/useIsForumChannelSearchActive.tsx");

export const useIsForumChannelSearchActive = function useIsForumChannelSearchActive(channelId) {
  const _require = channelId;
  let canSearchForumPostsByChannelId = _require(13262).useCanSearchForumPostsByChannelId(channelId);
  _require(504);
  [][0] = channelId;
  if (canSearchForumPostsByChannelId) {
    canSearchForumPostsByChannelId = null != tmp3;
  }
  return canSearchForumPostsByChannelId;
};
