// Module ID: 10369
// Function ID: 10370
// Name: TopEmojisUtils
// Dependencies: [1371, 5511, 5514, 10370, 2]
// Exports: maybeFetchTopEmojisByGuild

// Module 10369 (TopEmojisUtils)
import TopEmojisActionCreators from "TopEmojisActionCreators" /* 10370 */;
import UserStore from "UserStore" /* 1371 */;
import EmojiStore from "EmojiStore" /* 5511 */;
import TopEmojiStore from "TopEmojiStore" /* 5514 */;

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
