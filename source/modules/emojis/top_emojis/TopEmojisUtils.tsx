// Module ID: 10409
// Function ID: 10410
// Name: TopEmojisUtils
// Dependencies: [1372, 5544, 5547, 10410, 2]
// Exports: maybeFetchTopEmojisByGuild

// Module 10409 (TopEmojisUtils)
import TopEmojisActionCreators from "TopEmojisActionCreators" /* 10410 */;
import UserStore from "UserStore" /* 1372 */;
import EmojiStore from "EmojiStore" /* 5544 */;
import TopEmojiStore from "TopEmojiStore" /* 5547 */;

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
