// Module ID: 17756
// Function ID: 17757
// Name: TopEmojisDataManager
// Dependencies: [4577, 1375, 7358, 10535, 2]

// Module 17756 (TopEmojisDataManager)
import TopEmojisUtils from "TopEmojisUtils" /* 10535 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4577 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7358 */;

require = fn;
const EmojiInteractionPoint = fn(1375).EmojiInteractionPoint;
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
