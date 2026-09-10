// Module ID: 17379
// Function ID: 17380
// Name: TopEmojisDataManager
// Dependencies: [4395, 1374, 7132, 10310, 2]

// Module 17379 (TopEmojisDataManager)
import TopEmojisUtils from "TopEmojisUtils" /* 10310 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4395 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7132 */;

require = fn;
const EmojiInteractionPoint = fn(1374).EmojiInteractionPoint;
class TopEmojisDataManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.actions = { EMOJI_INTERACTION_INITIATED: applyArgumentsResult.handleInteraction };
    return applyArgumentsResult;
  }
}
TopEmojisDataManager.prototype["handleInteraction"] = function handleInteraction(interaction) {
  const items = [EmojiInteractionPoint.EmojiButtonMouseEntered];
  if (items.includes(interaction.interaction)) {
    const guildId = SelectedGuildStore.getGuildId();
    const result = TopEmojisUtils.maybeFetchTopEmojisByGuild(guildId);
  }
};
const topEmojisDataManager = new TopEmojisDataManager();
const size = fn(2);
let result = size.fileFinishedImporting("modules/emojis/top_emojis/TopEmojisDataManager.tsx");

export default topEmojisDataManager;
