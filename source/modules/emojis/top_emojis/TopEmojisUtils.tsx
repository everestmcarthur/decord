// Module ID: 10519
// Function ID: 10520
// Name: TopEmojisUtils
// Dependencies: [1372, 5629, 5632, 10520, 2]
// Exports: maybeFetchTopEmojisByGuild

// Module 10519 (TopEmojisUtils)
import TopEmojisActionCreators from "TopEmojisActionCreators" /* 10520 */;
import UserStore from "UserStore" /* 1372 */;
import EmojiStore from "EmojiStore" /* 5629 */;
import TopEmojiStore from "TopEmojiStore" /* 5632 */;

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
