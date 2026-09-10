// Module ID: 10348
// Function ID: 10349
// Name: TopEmojisUtils
// Dependencies: [1371, 5509, 5512, 10349, 2]
// Exports: maybeFetchTopEmojisByGuild

// Module 10348 (TopEmojisUtils)
import TopEmojisActionCreators from "TopEmojisActionCreators" /* 10349 */;
import UserStore from "UserStore" /* 1371 */;
import EmojiStore from "EmojiStore" /* 5509 */;
import TopEmojiStore from "TopEmojiStore" /* 5512 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/emojis/top_emojis/TopEmojisUtils.tsx");

export const maybeFetchTopEmojisByGuild = function maybeFetchTopEmojisByGuild(guildId) {
  if (null != guildId) {
    if (null != UserStore.getCurrentUser()) {
      const topEmojisMetadata = EmojiStore.getTopEmojisMetadata(guildId);
      if (null != topEmojisMetadata) {
        const topEmojisTTL = topEmojisMetadata.topEmojisTTL;
        if (null != topEmojisTTL) {
          const _Date = Date;
        }
      }
      if (!TopEmojiStore.getIsFetching(guildId)) {
        const topEmojis = TopEmojisActionCreators.fetchTopEmojis(guildId);
      }
    }
  }
};
