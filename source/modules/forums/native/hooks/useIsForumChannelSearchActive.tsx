// Module ID: 13431
// Function ID: 13432
// Name: useIsForumChannelSearchActive
// Dependencies: [7888, 13414, 504, 2]
// Exports: useIsForumChannelSearchActive

// Module 13431 (useIsForumChannelSearchActive)
import ForumSearchStore from "ForumSearchStore" /* 7888 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/forums/native/hooks/useIsForumChannelSearchActive.tsx");

export const useIsForumChannelSearchActive = function useIsForumChannelSearchActive(channelId) {
  _require = channelId;
  let canSearchForumPostsByChannelId = require("useCanSearchForumPostsByChannelId").useCanSearchForumPostsByChannelId(channelId);
  require("initialize");
  [][0] = channelId;
  if (canSearchForumPostsByChannelId) {
    canSearchForumPostsByChannelId = null != tmp3;
  }
  return canSearchForumPostsByChannelId;
};
