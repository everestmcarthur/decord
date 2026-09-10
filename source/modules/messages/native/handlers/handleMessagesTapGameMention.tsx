// Module ID: 11644
// Function ID: 11645
// Name: handleMessagesTapGameMention
// Dependencies: [8713, 8719, 2]
// Exports: handleMessagesTapGameMention

// Module 11644 (handleMessagesTapGameMention)
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 8713 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8719 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapGameMention.tsx");

export const handleMessagesTapGameMention = function handleMessagesTapGameMention(gameId) {
  gameId = gameId.gameId;
  const obj = GameProfileActionCreatorsDefault;
  obj.openGameProfileModal({ gameId, gameProfileModalChecks: { shouldOpenGameProfile: true, gameId }, source: GameProfileAnalyticUtils.GameProfileSources.GameMention });
};
